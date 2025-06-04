"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLink = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Forget Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {
                navLink.map((link) => {
                
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

                    return (

                        <Link className={isActive ? "text-blue-500 font-bold" : "text-gray-400 "} key={link.name} href={link.href}>{link.name}</Link>
                    )
                }
                )
            }
            {children}
        </>
    )
}