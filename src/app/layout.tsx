import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const conferenceTitle = "1st International Conference on Sustainable Health";
const conferenceDescription = "Innovation, Advances, & Challenges-2025";
const conferenceUrl = "https://healthcon-2025.com"; // Replace with your actual domain

export const metadata: Metadata = {
  title: {
    default: conferenceTitle,
    template: `%s | ${conferenceTitle}`,
  },
  description: conferenceDescription,
  keywords: [
    "sustainable health", "health conference", "medical innovation", "biomaterials", 
    "global health", "Parul University", "Vadodara", "conference 2025"
  ],
  authors: [{ name: "Parul University" }],
  creator: "Parul University Research & Development Cell",
  publisher: "Parul University",
  metadataBase: new URL(conferenceUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: conferenceTitle,
    description: conferenceDescription,
    url: conferenceUrl,
    siteName: conferenceTitle,
    images: [
      {
        url: '/og-image.png', // Replace with your actual open graph image
        width: 1200,
        height: 630,
        alt: 'Promotional banner for the conference',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: conferenceTitle,
    description: conferenceDescription,
    images: ['/twitter-image.png'], // Replace with your actual twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="google-site-verification" content="vtfnJbrcvmHT1myoCog7e4xohj7rxnikn8cyPfvy4Cw" />
        
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TNMX9Y689D"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TNMX9Y689D');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
