import "@/app/global.css";

export const metadata = {
    title: {
        default: "Next.js App with Custom Layout",
        template: "%s | Next.js App",
    },
    description: "A Next.js application with a custom layout",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
                    <div>header</div>
                </header>
                {children}
                <footer className="font-bold" style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
                    footer
                </footer>
            </body>
        </html>
    )
}