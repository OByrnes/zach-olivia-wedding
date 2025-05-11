
import { S3Client, ListObjectsV2Command, HeadObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { fetchS3Images, uploadS3Image } from '@/app/lib/fetchS3Images';


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawToken = searchParams.get('continuationToken');
  const continuationToken = rawToken ? Buffer.from(rawToken, 'base64').toString('utf-8') : undefined;
  const data = await fetchS3Images(continuationToken)

  return NextResponse.json(data);
}

export async function POST(req:NextRequest){
  const formData = await req.formData();
  const entries = [...formData.entries()];
  const uploaded: {key:string,  isPortrait:boolean}[] = [];

  // Get all files
  const files = entries.filter(([key, val]) => key === 'file' && val instanceof File).map(([_, file]) => file as File);
  for (const file of files) {
    const layoutKey = `layout-${file.name}`;
    const layout = formData.get(layoutKey)?.toString() || 'landscape';
    const key = await uploadS3Image(file, layout)
    uploaded.push({key: key, isPortrait: layout==='portrait'})
  }

  return NextResponse.json(uploaded);
}