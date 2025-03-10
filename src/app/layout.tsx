import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import { ClerkProvider } from "@clerk/nextjs"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning className=''>
        <body className='overflow-hidden'>
          <Header />

          <div className='flex min-h-screen'>
            <Sidebar />
            <div className='flex-1 p-4 bg-blue-200 '>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
