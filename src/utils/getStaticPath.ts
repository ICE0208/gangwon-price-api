import { join } from 'path';

export default function getStaticPath(subPath: string) {
  const filePath = join(`../static/${subPath}`);
  return filePath;
}
