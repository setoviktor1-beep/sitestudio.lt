import { ImageResponse } from "next/og";

export const alt = "SiteStudio — svetainių kūrimas verslui Lietuvoje";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #1a41ab 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "20px",
              background: "#2456d6",
              fontSize: "48px",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: "54px", fontWeight: 700 }}>
            Site<span style={{ color: "#7c9bef" }}>Studio</span>
          </div>
        </div>
        <div
          style={{
            marginTop: "56px",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "980px",
          }}
        >
          Svetainių kūrimas verslui — svetainės, kurios padeda parduoti
        </div>
        <div style={{ marginTop: "32px", fontSize: "30px", color: "#cbd5e1", maxWidth: "900px" }}>
          Svetainės, el. parduotuvės ir interneto sistemos visoje Lietuvoje
        </div>
        <div style={{ marginTop: "48px", fontSize: "26px", color: "#7c9bef" }}>sitestudio.lt</div>
      </div>
    ),
    size,
  );
}
