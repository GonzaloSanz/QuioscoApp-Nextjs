import ProductCard from "@/components/products/ProductCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

const getProducts = async (category: string) => {
  const products = prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  });

  return products;
}

const OrderPage = async ({ params }: { params: { category: string } }) => {
  const products = await getProducts(params.category);
  
  return (
    <>
      <Heading>Elige y personalize tu pedido a continuación:</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default OrderPage;