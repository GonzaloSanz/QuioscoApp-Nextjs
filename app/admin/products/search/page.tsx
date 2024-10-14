import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

const searchProducts = async (searchTerm: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    });

    return products;
}

const SearchPage = async ({ searchParams }: { searchParams: { search: string } }) => {
    const products = await searchProducts(searchParams.search);

    return (
        <>
            <Heading>Resultados de Búsqueda: {searchParams.search}</Heading>

            <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                <ProductSearchForm />
            </div>

            {products.length ? (
                <ProductsTable
                    products={products}
                />
            ) : (
                <p className="text-center text-lg">No se han encontrado resultados...</p>
            )}
        </>
    )
}

export default SearchPage;