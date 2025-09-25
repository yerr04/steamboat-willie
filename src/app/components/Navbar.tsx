'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState('EN')

    return (
        <nav className="bg-[#1d1d1d] p-4 sticky top-0 z-50">
            <div className="grid grid-cols-3 items-center p-4 w-full border-b-2 border-[#faf5ed]">
                <div className="justify-self-start text-white font-bold text-lg">
                    <Link href="/">Steamboat Willie</Link>
                </div>
                <div className="hidden md:flex justify-self-center space-x-6 text-white">
                    <Link href="/">Our Game</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/news">News</Link>
                    <Link href="/community">Community</Link>
                </div>
                <div className="justify-self-end flex items-center space-x-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <select 
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="bg-[#2d2d2d] text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:border-gray-400"
                        >
                            <option value="EN">EN</option>
                            <option value="ES">ES</option>
                            <option value="FR">FR</option>
                            <option value="DE">DE</option>
                        </select>
                    </div>
                    
                    {/* Play Game Button */}
                    <Link href="/play">
                        <button className="bg-[#faeedc] hover:bg-[#faf5ed] text-black font-semibold px-4 py-2 rounded transition-colors duration-200">
                            Play Game
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
