import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { ValidGenders } from "@/interfaces";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: ValidGenders;
  };
}
const seedProducts = initialData.products;

const Page = ({ params }: Props) => {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender == id);

  const labels = {
    men: "hombres",
    women: "mujeres",
    kid: "niños",
    unisex: "todos",
  };

  return (
    <div>
      <Title title={`Artículos para ${labels[id]}`} />
      <ProductGrid products={products} />
    </div>
  );
};

export default Page;
