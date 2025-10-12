export default function publicImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  return `https://neurotum.github.io/webpage${src}`
}