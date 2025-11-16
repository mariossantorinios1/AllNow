import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EverythingNow",
  description: "All tools in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
