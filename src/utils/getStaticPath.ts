import { join } from 'path';

export default function getStaticPath(subPath: string) {
  const filePath = join(process.cwd(), `static/${subPath}`);
  return filePath;
}
