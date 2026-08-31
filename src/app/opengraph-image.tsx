import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "VOXLEAP — Global English Coaching Studio";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#06070c",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: "#34e3e3",
            display: "flex",
          }}
        >
          VOXLEAP
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 500,
            color: "#b7bcc6",
            display: "flex",
          }}
        >
          Global English Coaching Studio
        </div>
      </div>
    ),
    size
  );
}