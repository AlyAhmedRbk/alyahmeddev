import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ali Ahmed, DevOps & Generative AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(path.join(process.cwd(), "public/images/ali-ahmed.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0b1320", color: "#ece8df" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#a3adbd" }}>ALI AHMED</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 80, lineHeight: 1.05, fontWeight: 600 }}>Ali Ahmed</div>
            <div style={{ marginTop: 20, fontSize: 36, color: "#d4b273" }}>DevOps & Generative AI Engineer</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a3adbd" }}>AWS · Terraform · CI/CD · RAG · AI agents</div>
        </div>
        <img src={src} alt="" width={504} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
