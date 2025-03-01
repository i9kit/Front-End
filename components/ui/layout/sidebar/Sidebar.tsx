'use client'
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import Loader from "@/ui/Loader";
import { FC } from "react";
import cn from 'clsx'
import Link from "next/link";
import {FiLogOut} from 'react-icons/fi'
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import { useCategories } from "@/hooks/queries/useCategories";
import { ADMIN_MENU } from "./admin-menu.data";
import { convertToMenuItems } from "./convert-to-menu-items";


const Sidebar: FC = () => {
    const {isLoading, data} = useCategories()

    const {isAdminPanel, pathname} = useIsAdminPanel()

    const {user} = useAuth()
    const {logout} = useActions()
    
    return (
        <aside 
            className="bg-secondary flex flex-col justify-between z-10"
            style={{
                height: 'calc(100vh - 91px)'
            }}
        >
            <div>
               {isLoading ? (
                <Loader/>
               ) : data ? (
                <>
                    <div className="text-xl text-white mt-4 mb-6 ml-6">
                    {isAdminPanel ? 'Menu:' : 'Categories:'} 
                    </div>
                    <ul>
                        {(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
                            item => (
                            <li key={item.href}>
                                <Link 
                                    className={cn(
                                        'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
                                        pathname === item.href ? 'text-primary' : 'text-white'  
                                    )}
                                    href={item.href}>
                                        {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
               ) : (
                <div>
                    Categories is not found!
                </div>
               )} 
            </div>

            {!!user && (
                <button
                    className="text-white flex items-center ml-10 mb-10"
                    onClick={() => logout()}
                >
                    <FiLogOut/>
                    <span className="ml-2">Logout</span>
                </button>
            )}
        </aside>
    )
}

export default Sidebar