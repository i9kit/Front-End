'use client'
import { FC } from "react"
import { IoLogInOutline } from "react-icons/io5";
import Link from "next/link"

const AuthProfile: FC = () => {
    return (
        <div className="relative">
            <Link href='/auth'>
                <IoLogInOutline 
                    size={32}
                    className="hover:text-primary transition-colors duration-200 text-white inline-block text-lg"
                />
            </Link>
        </div>
    )
}

export default AuthProfile