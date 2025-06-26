export default async function Blogs() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("internal delay")
        }, 2000);
    })
    return (
        <>

            <h1>THis is blog page.</h1>
        </>
    )
}