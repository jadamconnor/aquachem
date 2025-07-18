import fs from 'fs';
import { config } from 'dotenv';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import fetch from 'node-fetch';
import unzipper from 'unzipper';
import path from 'path';

config();

const filePath = './src/locales/en.json';

const s3Client = new S3Client({
  region: 'us-east-2', // Replace with your AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function fetchJsonFromS3(bucket, key) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch JSON: ${response.statusText}`);
    }

    const jsonContent = await response.json();
    // console.log('JSON content:', jsonContent);
    return jsonContent;
  } catch (error) {
    console.error('Error fetching JSON from S3:', error);
    throw error;
  }
}

const bucketName = 'aquachemcontent';
const objectKey = 'en.json';

fetchJsonFromS3(bucketName, objectKey)
  .then((jsonContent) => {
    console.log(jsonContent);
    fs.writeFile(filePath, JSON.stringify(jsonContent, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully');
      }
    });
    console.log('Translation file downloaded and saved.');
  })
  .catch((error) => {
    // Handle any errors
    console.log('Error fetching JSON from S3:', error);
  });

async function extractFiles(buffer) {
  const directory = await unzipper.Open.buffer(buffer);
  for (const file of directory.files) {
    const content = await file.buffer();
    const outputPath = path.join('public', 'downloads', file.path);
    await fs.writeFile(outputPath, content, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File written successfully');
      }
    });
  }
}

async function downloadAndExtractFiles(bucket, key, destination) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ZIP file: ${response.statusText}`);
    }
    const buffer = await response.buffer();
    await fs.promises.mkdir(destination, { recursive: true });
    extractFiles(buffer);
  } catch (error) {
    console.error('Error downloading and extracting files:', error);
    throw error;
  }
}

const downloadsKey = 'downloads.zip';
const destinationPath = './public/downloads';

downloadAndExtractFiles(bucketName, downloadsKey, destinationPath);
