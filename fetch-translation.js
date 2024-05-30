import fs from 'fs';
import https from 'https';
import { config } from 'dotenv';

config();

const url = process.env.CONTENT_SERVICE_URL;
const binID = process.env.CONTENT_SERVICE_BIN_ID;
const masterKey = process.env.CONTENT_SERVICE_MASTER_KEY;
const accessKey = process.env.CONTENT_SERVICE_ACCESS_KEY;
const filePath = './src/locales/en.json';

https
  .get(
    `${url}/${binID}`,
    {
      headers: {
        'X-Master-Key': masterKey,
        'X-Access-Key': accessKey,
      },
    },
    (response) => {
      let data = '';

      // A chunk of data has been received.
      response.on('data', (chunk) => {
        console.log(chunk);
        data += chunk;
      });

      // The whole response has been received.
      response.on('end', () => {
        fs.writeFileSync(filePath, data);
        console.log('Translation file downloaded and saved.');
      });
    },
  )
  .on('error', (err) => {
    console.error('Error fetching the file:', err);
  });
