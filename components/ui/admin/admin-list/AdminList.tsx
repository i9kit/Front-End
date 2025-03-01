'use client'
import { FC } from "react"
import { IListItem } from "./admin-list.interface"

import styles from './Admin-list.module.scss'
import Loader from "@/ui/Loader"
import AdminListItem from "./AdminListItem"

interface IAdminList {
    listItems?: IListItem[]
    isLoading: boolean

    removeHandler?: (id:number) => void
}

const AdminList: FC<IAdminList> = ({
    isLoading,
    listItems = [],
    removeHandler,
}) => {
    return (
        <div>
            <>
            {isLoading ? (
                <Loader/>
            ) : listItems.length ? (
                listItems.map(listItem => (
                    <AdminListItem 
                        key={listItem.id}
                        removeHandler={
                            removeHandler ? () => removeHandler(listItem.id) : undefined
                        }
                        listItem={listItem}
                    />
                ))
            ) : (
                <div className={styles.notFound}>Element not found!</div>
            )}
            </>
        </div>
    )
}

export default AdminList