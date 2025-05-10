'use client';

import { useState } from 'react';
import ArrowIcon from "@/app/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white p-4 border-[0.5px] border-[#8300FF] my-[10px]">
            <div className="flex justify-between items-center max-w-[1572px] mx-auto">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={60} height={60} />
                    <p className="text-xl md:text-2xl font-bold" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        Founder&apos;s Friday
                    </p>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-16">
                    <div className="flex gap-8">
                        <Link href='' className="text-base md:text-xl font-medium">Home</Link>
                        <Link href='' className="text-base md:text-xl font-medium">About Us</Link>
                        <Link href='' className="text-base md:text-xl font-medium">Gallery</Link>
                        <Link href='' className="text-base md:text-xl font-medium">Contact Us</Link>
                    </div>
                    <Button variant={"ghost"} className="w-[196px] h-[59px] border-2 rounded-[20px] py-2 px-5 md:py-[15px] md:px-[30px] text-[#9E8CAF] font-medium text-lg md:text-2xl">
                        Register
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.90002 12.5H18.62" stroke="#9E8CAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.76 5.64062L18.62 12.5006L11.76 19.3606" stroke="#9E8CAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-6 h-6 text-[#9524FF]" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col mt-4 gap-4 md:hidden">
                    <Link href='' className="text-base font-medium">Home</Link>
                    <Link href='' className="text-base font-medium">About Us</Link>
                    <Link href='' className="text-base font-medium">Gallery</Link>
                    <Link href='' className="text-base font-medium">Contact Us</Link>
                    <button className="flex items-center justify-center border-[#9524FF] border rounded-[20px] py-2 px-4 text-[#9524FF] font-medium text-lg">
                        Register
                        <ArrowIcon />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
