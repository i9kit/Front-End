import { ProductService } from "@/services/product/product.service";
import { TypeProductDataAdd } from "@/services/product/product.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useCreateProduct = () => {
    const router = useRouter();
    
    const [productData, setProductData] = useState<TypeProductDataAdd>({
        name: '',
        price: undefined,
        description: '',
        categoryId: undefined,
        slug: '',
        images: ['/uploads/2.jpg'],
      });
    
    const { mutate, isLoading } = useMutation(
        ['create product'],
        () => ProductService.create(productData),
        {
          onSuccess: () => router.push('/'),
          onError: (error) => console.error('Error adding product:', error),
        }
      )
    
    return {productData, setProductData, mutate, isLoading}
}