import type { UseFetchOptions } from "nuxt/app";
import type { ImageOptions } from "@nuxt/image";

export default function (
  input: string,
  imgOpts?: ImageOptions,
  fetchOpts?: UseFetchOptions<string>
) {
  const img = useImage();
  const path = img(input, imgOpts);

  return useFetch(path, {
    ...fetchOpts,
    server: false,
    transform: (data: Blob) => URL.createObjectURL(data),
  });
}
