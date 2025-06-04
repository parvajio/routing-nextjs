import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome home!!</h1>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/myorofile"}>My Profile</Link>
            <Link href={"/articles/2-5-2025?lang=en"}>Read in English</Link>
            <Link href={"/articles/2-5-2025?lang=bn"}>Read in Bangla</Link>
        </>
    )
}