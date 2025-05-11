import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextRequest, NextResponse } from 'next/server';

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET_NAME = process.env.AWS_BUCKET_NAME!;

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const key = url.searchParams.get('key');
  if (!key) {
    return new NextResponse('Missing image key', { status: 400 });
  }

  const command = new GetObjectCommand({ Bucket: BUCKET_NAME, Key: key });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

  // Redirect the request to the signed S3 URL
  return NextResponse.redirect(signedUrl, 307);
}