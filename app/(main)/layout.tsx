import { PropsWithChildren } from "react";
import                           Providers from "@/providers/Providers";
import { Metadata } from "next";
import { SITE_NAME } from "@/constants/seo.constants";
import { getSiteUrl } from "@/config/url.config";

import {Golos_Text} from "next/font/google";

import '@/assets/styles/globals.scss'
import Sidebar from "@/ui/layout/sidebar/Sidebar";
import Header from "@/ui/layout/header/Header";

export const metadata: Metadata = {
    icons: {
        icon: '/public/favicon.svg'
    },
    title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        emails: ['info@amazon.com']
    }
}

const golos = Golos_Text({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin', 'cyrillic-ext'],
    display: 'swap',
    style: ['normal'],
    variable: '--font-golos'
}) 

export default function MainLayout({children}: PropsWithChildren<unknown>) {
    return (
        <html lang="en" className={golos.variable}>
            <body>
              <Providers>
                <div className="bg-secondary overflow-hidden">
                    <Header/>
                    <div 
                        className="grid" 
                        style={{
                            gridTemplateColumns: '0.8fr 4fr'
                        }}
                    >
                        <Sidebar/>
                        <main className="p-12 pb-52 bg-bg-color rounded-tl-lg">
                            {children}
                        </main>
                    </div>
                </div>
              </Providers>
              <div id="modal"></div>
            </body>
        </html>
    )
}