import { CategoryService } from "@/services/category.service";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
    const {data, isLoading} = useQuery(
    ['get categories'],
    () => CategoryService.getAll(),
        {
            select: ({data}) => data
        }
    )

    return {data, isLoading}
}