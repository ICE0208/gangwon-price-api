import { join } from 'path';

export default function getStaticPath(subPath: string) {
  const filePath = join(__dirname + `../static/${subPath}`);
  return filePath;
}
