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
): { src: string; name: string; isVideo: boolean; poster?: string } {
  const toSrc = (v: string | ImageItem) => (typeof v === 'string' ? v : v.src);
  const src = toSrc(img);
  const base = basename(src);
  const friendly = humanizeFromFilename(base, idx);
  const name = typeof img === 'object' && img.name ? img.name : `${project.title} – ${friendly}`;
  const poster = typeof img === 'object' ? img.poster : undefined;
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  return { src, name, isVideo, poster };
}
