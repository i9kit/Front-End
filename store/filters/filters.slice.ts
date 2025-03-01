import { EnumProductSort } from "@/services/product/product.types";
import { IFiltersActionsPayload, IFilterState } from "./filters.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFilterState = {
    isFilterUpdated: false,
    queryParams: {
        sort: EnumProductSort.NEWEST,
        searchTerm: '',
        page: 1,
        perPage: 20,
        ratings: ''
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload
            state.queryParams[key] = value
            state.isFilterUpdated = true
        },
        resetFiltersUpdate: state => {
            state.isFilterUpdated = false
        }
    }
})