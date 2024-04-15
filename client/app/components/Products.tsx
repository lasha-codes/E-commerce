import { useSelector } from 'react-redux'

const Products = () => {
  const { products } = useSelector((state: any) => state.product)
  return (
    <div className='mt-16'>
      <div className='flex items-center justify-center flex-wrap gap-5'>
        {products &&
          products.map((product: any) => {
            return (
              <div
                key={product.id}
                className='bg-white h-[130px] w-[260px] flex items-center border rounded-xl p-5'
              >
                <div className='flex items-start gap-5'>
                  <img
                    src={product.image[0]}
                    className='w-[80px] max-h-full object-cover pt-5'
                  />
                  <div className='flex flex-col gap-2'>
                    <h1 className=''>{product.title.slice(0, 10)}...</h1>
                    <span className='text-sm capitalize text-sonicSilver'>
                      {product.type}
                    </span>
                    <span className='font-semibold text-salmonPink'>
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Products
