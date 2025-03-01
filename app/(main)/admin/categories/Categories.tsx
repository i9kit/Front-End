'use client'
import { FC } from "react";
import { useAdminCategories } from "./useAdminCategories";
import Heading from "@/ui/Heading";
import AdminList from "@/ui/admin/admin-list/AdminList";

const Categories: FC = () => {
    const { data, isFetching, mutate } = useAdminCategories()

    return (
        <>
            <Heading className='mb-7'>Category</Heading>
            <AdminList
              isLoading={isFetching}
              listItems={data}
              removeHandler={mutate}  
            />
        </>
    )
}

export default Categories