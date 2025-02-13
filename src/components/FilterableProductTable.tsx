import { Product } from "../types/Product";
import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";

const FilterableProductTable = ({products}:{products:Product[]})  => {
	return (
		<div>
			<Searchbar />
			<ProductTable products={products} />
		</div>
	);
}

export default FilterableProductTable;