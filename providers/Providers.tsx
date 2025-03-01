'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { persistor, store } from '@/store/store'
import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { PropsWithChildren } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function Providers({children}: PropsWithChildren) {
  return (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          {children} 
        </AuthProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider> 
  )
}
