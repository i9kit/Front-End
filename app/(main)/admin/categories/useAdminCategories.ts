import { getAdminUrl } from "@/config/url.config"
import { CategoryService } from "@/services/category.service"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAdminCategories = () => {
    const {data, isFetching, refetch} = useQuery(
        ['get admin categories'],
        () => CategoryService.getAll(), 
        {
            select: ({data}) => 
                data.map((category): IListItem => {
                    return {
                        id: category.id,
                        viewUrl: `/category/${category.slug}`,
                        editUrl: getAdminUrl(`/categories/edit/${category.id}`),
                        items: [
                            category.name,
                            category.slug
                        ]
                    }
            })
         }
    )
    
    const { mutate } = useMutation(
        ['delete category'],
        (id:number) => CategoryService.delete(id),
        {
            onSuccess() {
                refetch()
            }
        }
    )

    return {
        data,
        isFetching,
        mutate
    }
}