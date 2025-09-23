'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-[#1d1d1d] p-4 flex justify-center items-center sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex space-x-4">
                    <Link href="/">Our Game</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/news">News</Link>
                    <Link href="/community">Community</Link>
                </div>
            </div>
        </nav>
    )
}