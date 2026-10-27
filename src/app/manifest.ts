import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Birei Farm", short_name: "Birei Farm", description: "Discover Birei Farm.", start_url: "/", display: "standalone", background_color: "#fffefa", theme_color: "#1d4735", icons: [{ src: "/logo-mark.svg", sizes: "any", type: "image/svg+xml" }] };
}
