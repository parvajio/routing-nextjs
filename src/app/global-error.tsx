"use client";

export default function GlobalError() {
    return (
        <html>
            <body>

                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold">Something went wrong</h1>
                    <button className="p-4 bg-amber-800" onClick={() => {
                        window.location.reload();
                    }}>
                        Refresh
                    </button>
                </div>
            </body>
        </html>
    )
}