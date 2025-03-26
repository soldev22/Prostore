
import ProductList from '@/components/shared/product/product-list';


import { getLatestProducts } from '@/lib/actions/product.actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';
const Hompage = async () => {
 const latestProducts = await getLatestProducts();
  return (
<ProductList data={latestProducts} title='Newest Arrivals' limit={Number(LATEST_PRODUCTS_LIMIT)}/>
  );
};
console.log(LATEST_PRODUCTS_LIMIT);
export default Hompage;
