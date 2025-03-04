'use client'
import { TypePaginationProducts } from "@/types/product.interface";
import { FC, useState } from "react";
import { useFilters } from "./useFilters";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/product/product.service";
import Heading from "@/ui/Heading";
import Button from "@/ui/button/Button";

import styles from './ProductExplorer.module.scss'
import cn from 'clsx'
import Catalog from "@/ui/catalog/Catalog";
import Pagination from "./pagination/Pagination";
import SortDropdown from "./sort/SortDropdown";
import Filters from "./filters/Filter";


interface IProductExplorer {
    initialProducts: TypePaginationProducts
}

const ProductExplorer: FC<IProductExplorer> = ({initialProducts}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()
    
    const { data, isFetching } = useQuery(
        ['product explorer', queryParams],
        () => ProductService.getAll(queryParams),
        {
            initialData: initialProducts,
            enabled: isFilterUpdated
        }
    )

    return (
        <>
        <div className="flex items-center justify-between mb-7">
            <Heading>
                {queryParams.searchTerm 
                    ? `Search by query "${queryParams.searchTerm}"`
                    : 'Explorer'
                }
            </Heading>
            <SortDropdown/>
        </div>
        <Button 
            variant="white"
            onClick={() => setIsFilterOpen(!isFilterOpen)} 
            className="mb-7"
            size="md"
        >
            {isFilterOpen ? 'Close' : 'Open'} filters
        </Button>
        <div className={cn(styles.explorer, {
            [styles.filterOpened] : isFilterOpen
        })}
        >
            <aside>
                <Filters/>
            </aside>

            <section>    
                <Catalog products={data.products} isLoading={isFetching} />
                <Pagination
                    changePage={page => updateQueryParams('page', page.toString())}
                    currentPage={queryParams.page}
                    numberPages={data.length / +queryParams.perPage}
                />
            </section>
        </div>
        </>
    )
}

export default ProductExplorer