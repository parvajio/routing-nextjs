import { title } from "process"

export const metadata = {
    title: "Next.js",
    description: "A Next.js application with a custom layout",
}


export default function RootLayout({children}: {children: React.ReactNode}){
    return (
        <html lang="en">
            <header style={{backgroundColor: "lightblue", padding:"1rem"}}>
                <div>header</div>
            </header>
            <body>
                {children}
            </body>
            <footer style={{backgroundColor: "lightgreen", padding:"1rem"}}>
                footer
            </footer>
        </html>
    )
}