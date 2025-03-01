'use client'

import Link from "next/link";
import Image from 'next/image'
import { FC } from "react";
import Search from "./Search";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md"
import HeaderCart from "./cart/HeaderCart";
import HeaderProfile from "./HeaderProfile";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import { useAuth } from "@/hooks/useAuth";
import AuthProfile from "./AuthProfile";



const Header: FC = () => {
    const {isAdminPanel} = useIsAdminPanel()
    const {user} = useAuth()
    
    return (
        <header 
            className="bg-secondary w-full py-6 px-6 grid"
            style={{
                gridTemplateColumns: '1fr 3fr 1.2fr'
            }}
        >
            <Link href='/'>
            {isAdminPanel ? (
                <h2 className="text-3xl text-white font-semibold">
                    Admin Panel
                </h2>
            ) : (
                <Image
                priority
                width={180}
                height={37}
                src='/images/logo.svg'
                alt="Amazon v2"
            />
            )}
            </Link>
            <Search />
            <div className="flex items-center justify-end gap-10">
                {user?.isAdmin && !isAdminPanel && (
                    <Link
                        href='/admin'
                        className="hover:text-primary transition-colors duration-200 text-white inline-block text-lg"
                    >
                        <MdOutlineAdminPanelSettings size={28}/>
                    </Link>
                )}
                {user && (
                    <Link href='/favorites' className="hover:text-primary transition-colors duration-200 text-white inline-block text-lg">
                        <AiOutlineHeart size={28}/>
                    </Link>
                )}
                <HeaderCart />
                {user ? (
                    <HeaderProfile/>
                ) : (
                    <AuthProfile/>
                )}
            </div>
        </header>
    )
}

export default Header