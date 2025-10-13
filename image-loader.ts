import { ImageLoaderProps } from "next/image"

export default function publicImageLoader({ src, width }: ImageLoaderProps) {
  return `${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${src}`
}