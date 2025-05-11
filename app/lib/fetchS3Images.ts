// lib/fetchS3Images.ts
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME!;

export async function fetchS3Images(continuationToken?: string) {
  const listCommand = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    MaxKeys: 40,
    ContinuationToken: continuationToken,
  });

  const data = await s3.send(listCommand);
  const images = await Promise.all(
    (data.Contents || []).map(async (item) => {
      const url = await getSignedUrl(
        s3,
        new GetObjectCommand({ Bucket: BUCKET_NAME, Key: item.Key! }),
        { expiresIn: 3600 }
      );
      const headCommand = new HeadObjectCommand({
        Bucket: BUCKET_NAME,
        Key: item.Key!,
      });
      const head = await s3.send(headCommand);
      console.log(head)
      const layout = head.Metadata?.layout || ''; // x-amz-meta-layout → layout
      const isPortrait = layout.toLowerCase() === 'portrait';
      return { key: item.Key!, url, isPortrait };
    })
  );

  return {
    images,
    nextToken: data.NextContinuationToken ?? null,
  };
}


export async function uploadS3Image(file:File, layout:string){

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const key = `${Date.now()}-${file.name}`;

  const putCommand = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: file.type,
    Metadata: {
      layout, // this becomes x-amz-meta-layout
    },
  });

  await s3.send(putCommand);
  return key
}