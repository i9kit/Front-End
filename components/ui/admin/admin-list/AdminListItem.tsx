import { FC } from "react";
import { IAdminListItem } from "./admin-list.interface";

import styles from './Admin-list.module.scss'
import AdminActions from "./admin-actions/AdminActions";

const AdminListItem: FC<IAdminListItem> = ({removeHandler, listItem}) => {
    return (
        <div className={styles.item}>
            {listItem.items.map(value => (
                <div key={value}>{value}</div>
            ))}

            <AdminActions
                viewUrl={listItem.viewUrl}
                editUrl={listItem.editUrl}
                removeHandler={removeHandler}       
            />
        </div>
    )
}

export default AdminListItem