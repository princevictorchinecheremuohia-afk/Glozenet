"use client"

import Link from "next/link"
import Image from "next/image"
import {Menu} from "lucide-react"

import Container from "./Container"
import { NAV_LINKS } from "@/constants/navigation"
import {Button} from "@/components/ui/button"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo/Glopenet-logo.png" alt="Glopenet Logo" width="42" height="42">
                    </Link>
                </nav>
            </Container>
        </header>
    )
}