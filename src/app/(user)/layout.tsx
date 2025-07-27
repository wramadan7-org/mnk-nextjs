import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import FooterComponent from "@/components/FooterComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MNK",
  description:
    "PT. Multi Nitrotama Kimia (MNK) is Indonesia’s leading provider of mining explosives and blasting services. MNK has over 20 years of proven track record in producing Ammonium Nitrate (AN) and has recently expanded its production capacity to 150,000 tons per annum. MNK is committed to providing reliable quality delivery and service with continuous focus on safety, people development and upholding of MNK values.",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />

        <SidebarComponent />

        {children}

        <FooterComponent />
      </body>
    </html>
  );
}
