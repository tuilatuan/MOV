import type { Metadata } from "next";
import "./globals.css";
import { bevietnam, nunito } from "@/ui/fonts/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/store/StoreProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Mov",
  description:
    "Tại MOV, chúng tôi cam kết phát triển lĩnh vực Phân tích Hành vi Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa học chất lượng cao.",

  keywords: "MOV, Phân tích Hành vi Ứng dụng, Việt Nam, Tài liệu, Khóa học",
  robots: "index, follow",
  authors: [],
  openGraph: {
    type: "website",
    url: "https://www.mov.com",
    title: "Mov - Phân tích Hành vi Ứng dụng tại Việt Nam",
    description:
      "Tại MOV, chúng tôi cam kết phát triển lĩnh vực Phân tích Hành vi Ứng dụng (ABA) tại Việt Nam bằng cách chuyển ngữ các tài liệu và khóa học chất lượng cao.",
    images: [
      {
        url: "https://mov.cfdstudio.vn/images/ckeditor/3dw6bajdJY68iQQumJEh2-Rectangle 172.jpg",
        width: 800,
        height: 600,
        alt: "MOV Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${bevietnam.variable} relative overflow-x-hidden font-sans`}
      >
        <StoreProvider>
          <Header />
          <main className="relative mt-[var(--h-header)] bg-custom-gradient">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
