import { FC, PropsWithChildren } from "react"

interface iFilterWrapper {
    title: string
}

const FilterWrapper: FC<PropsWithChildren<iFilterWrapper>> = ({title, children}) => {
    return (
        <div className="mb-6">
            <div className="mb-3 font-semibold">{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default FilterWrapper