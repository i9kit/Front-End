import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.slice";
import { cartSlice } from "./cart/cart.slice";
import { REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, FLUSH } from "redux-persist";
import { carouselSlice } from "./carousel/carousel.slice";
import { filtersSlice } from "./filters/filters.slice";


const isClient = typeof window !== 'undefined' 

const combinedReducers = combineReducers({
    cart: cartSlice.reducer,
    carousel: carouselSlice.reducer,
    filters: filtersSlice.reducer,
    user: userSlice.reducer
})

let mainReducer = combinedReducers

if(isClient) {
    const {persistReducer} = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
        key: 'amazon-v2',
        storage,
        whitelist: ['cart']
    }

    mainReducer = persistReducer(persistConfig, combinedReducers)
}

export const store = configureStore({
    reducer: mainReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof mainReducer>