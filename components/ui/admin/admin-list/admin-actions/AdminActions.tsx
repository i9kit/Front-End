import { FC } from 'react';
import { IListItem } from '../admin-list.interface';
import styles from './AdminActions.module.scss'
import { useRouter } from 'next/navigation';
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri';

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
    removeHandler?: () => void;
}

const AdminActions: FC<IAdminActions> = ({
    editUrl,
    viewUrl,
    removeHandler
}) => {
    const {push} = useRouter()

    return (
        <div className={styles.actions}>
            {viewUrl && (
                <button onClick={() => push(viewUrl)}>
                    <RiExternalLinkLine/>
                </button>
            )}
            {editUrl && (
                <button onClick={() => push(editUrl)}>
                    <RiEdit2Line/>
                </button>
            )}
            {removeHandler && (
                <button onClick={removeHandler}>
                    <RiDeleteRow/>
                </button>
            )}
        </div>
    )
}

export default AdminActions