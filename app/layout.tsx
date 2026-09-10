import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Sachan | Full Stack Developer",
  description:
    "Abhay Sachan is a Full Stack Developer specializing in React.js, Next.js, Node.js and Express.js. Explore projects, experience and technical skills.",
  keywords: [
    "Abhay Sachan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  authors: [
    {
      name: "Abhay Sachan",
    },
  ],
  creator: "Abhay Sachan",
  openGraph: {
    title: "Abhay Sachan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js and Express.js.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}