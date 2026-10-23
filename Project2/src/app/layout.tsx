import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exploration2",
  description: "work on exploration 2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body>{children}</body>
    </html>
  );
}
