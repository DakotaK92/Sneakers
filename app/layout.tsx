import "./globals.css"
import { ReduxProvider } from "../lib/providers"
import { Kumbh_Sans } from "next/font/google";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.variable}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
