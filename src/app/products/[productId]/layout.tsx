export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Freatured products</h1>
            {children}
        </>
    )
}