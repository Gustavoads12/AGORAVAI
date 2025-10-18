import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import Script from "next/script" // <-- ESSENCIAL: Importação do componente Script
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Tocaa.ai",
  description: "200 MÚSICAS PRA TOCAR NO PIANO - Aprenda piano do zero com videoaulas passo a passo",
  openGraph: {
    title: "Tocaa.ai",
    description: "200 MÚSICAS PRA TOCAR NO PIANO - Aprenda piano do zero com videoaulas passo a passo",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable}`}>

      {/* 💥 PIXEL DO TIKTOK ADICIONADO AQUI 💥 */}
      <Script
        id="tiktok-pixel-code"
        strategy="afterInteractive" // Carrega após a página se tornar interativa
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            
              ttq.load('D3P4G6BC77UCJBA5CU4G');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
