import { title } from "process"

export const metadata = {
    title: "Next.js",
    description: "A Next.js application with a custom layout",
}


export default function RootLayout({children}: {children: React.ReactNode}){
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}