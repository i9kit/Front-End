import { Children, type FC, type PropsWithChildren } from "react";
import cn from 'clsx'
import styles from './Checkbox.module.scss'

interface ICheckbox {
    isChecked: boolean
    onClick: () => void
    className?: string
}

const Checkbox: FC<PropsWithChildren<ICheckbox>> = ({isChecked, onClick, className, children}) => {
    return (
        <button
            className={cn(styles.checkbox, className)}
            onClick={onClick}
        >
            <span className={cn({
                [styles.active]: isChecked})}
            />
            <span>{children}</span>
        </button>
    )
}

export default Checkbox