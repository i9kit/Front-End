'use client'
import { generateSlug } from '@/utils/generate-slug';
import Heading from '@/ui/Heading';
import Field from '@/ui/input/Field';
import Button from '@/ui/button/Button';
import { useCategories } from '@/hooks/queries/useCategories';
import ProductItem from '@/ui/catalog/product-item/ProductItem';
import { useCreateProduct } from '@/hooks/queries/useCreateProduct';
import { IProduct } from '@/types/product.interface';
import { convertPrice } from '@/utils/convertPrice';


const AddProductPage = () => {
  const {productData, setProductData, mutate: addProduct, isLoading} = useCreateProduct()

  const {data: categories} = useCategories()

  const previewCategory = categories?.find(
    c => c.id === productData.categoryId
  )

  const previewProduct: IProduct = {
    ...productData,
    id: 0,
    createdAt: String(new Date()),
    category: previewCategory || {
      id: 0,
      name: 'Test',
      slug: 'test'
    },
    reviews: [],
    price: productData.price || 0, 
    images: productData.images.length > 0 ? productData.images : ['/uploads/2.jpg']
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setProductData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'categoryId' ? Number(value) : value,
      slug: name === 'name' ? generateSlug(value) : prev.slug,
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const images = e.target.value.split(',').map((url) => url.trim());
    setProductData((prev) => ({ ...prev, images }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct();
  };

  return (
    <div className='grid grid-cols-2 gap-8 p-4'>
      <div>
        <Heading>Add Product</Heading>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field
              label="Product Name"
              name="name"
              placeholder='Name'
              value={productData.name}
              onChange={handleChange}
              required
              className='w-60'
            />
          <Field
            label="Price"
            name="price"
            placeholder='Price'
            type="number"
            value={productData.price === undefined ? '' : productData.price}
            onChange={handleChange}
            required
          />
          <Field
            label="Description"
            name="description"
            placeholder='Description'
            value={productData.description}
            onChange={handleChange}
            as="textarea"
            required
          />
          <div>
            <label className="-mt-1 block text-sm font-medium text-gray-700">Category</label>
            <select
              name="categoryId"
              value={productData.categoryId} 
              onChange={handleChange}
              className="mt-1 block w-60 rounded-lg border border-grey px-4 py-2 outline-none transition-none transition-all placeholder:text-grey focus:border-primary;"
            >
              <option value="">None</option> 
              {categories?.map((category) => (
                <option key={category.id} value={category.id} className='rounded-lg border border-solid border-grey px-4 py-2 outline-none transition-none transition-all placeholder:text-grey focus:border-primary;'>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <Field
            label="Images"
            name="images"
            placeholder='Url Image'
            value={productData.images.join(', ')}
            onChange={handleImagesChange}
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            variant='orange'
            size='md'
          >
            {isLoading ? 'Adding...' : 'Add Product'}
          </Button>
        </form>
      </div>
      <div>
        <Heading>Product Preview</Heading>
          <section className="rounded-lg mt-4">
            <div>
              <div className="bg-white rounded-xl relative overflow-hidden">
                  <img 
                      width={250} 
                      height={250} 
                      src={previewProduct.images[0]} 
                      alt={previewProduct.name}
                      className="block mx-auto"
                    />
              </div>
              <h3 className="mt-2 font-semibold">{previewProduct.name}</h3>
              <div className="text-aqua text-xs mb-2"> {previewProduct.category.name} </div>
              <div className="text-xl font-semibold">{convertPrice(previewProduct.price)}</div>
            </div>
        </section>
      </div>
    </div>
  );
};


export default AddProductPage;