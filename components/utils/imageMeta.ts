import { ImageItem, Project } from '../../types';

function basename(path: string): string {
  const last = path.split('/').pop() || path;
  const dot = last.lastIndexOf('.');
  return dot >= 0 ? last.slice(0, dot) : last;
}

function humanizeFromFilename(name: string, idx: number): string {
  const match = name.match(/p\d+-(\d+)/);
  if (match) {
    const n = parseInt(match[1], 10);
    if (!Number.isNaN(n)) return `图 ${n + 1}`;
  }
  return `图 ${idx + 1}`;
}

export function getImageMeta(
  img: string | ImageItem,
  project: Project,
  idx: number
): { src: string; name: string } {
  if (typeof img === 'string') {
    const file = basename(img);
    const friendly = humanizeFromFilename(file, idx);
    return { src: img, name: `${project.title} – ${friendly}` };
  }
  const src = img.src;
  const base = basename(src);
  const friendly = humanizeFromFilename(base, idx);
  const name = img.name ? img.name : `${project.title} – ${friendly}`;
  return { src, name };
}

