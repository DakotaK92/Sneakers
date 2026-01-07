import type { Metadata } from "next"
import "./globals.css"
import Providers from "./providers"
import { Kumbh_Sans } from "next/font/google"
import Header from "../components/Header"

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kumbhSans",
})

export const metadata: Metadata = {
  title: "Shoe E-commerce App",
  description:
    "A simple e-commerce application for shoes built using the Redux Toolkit. You can view shoes, add them to your cart, and manage your cart items seamlessly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} min-h-screen bg-white`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
