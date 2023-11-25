import { createReadStream } from 'fs';

export default function readFileAsync(filePath: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    createReadStream(filePath)
      .on('data', (chunk) => chunks.push(chunk as Buffer))
      .on('end', () => resolve(Buffer.concat(chunks)))
      .on('error', reject);
  });
}
