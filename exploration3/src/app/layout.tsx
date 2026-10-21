import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exploration3",
  description: "Dan is cool",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
