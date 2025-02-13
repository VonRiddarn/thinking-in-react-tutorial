import { Product } from "../types/Product";
import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";

type FilterableProductTableProps = {
	products:Product[];
};

const FilterableProductTable = ({products}:FilterableProductTableProps)  => {

	return (
		<div>
			<Searchbar />
			<ProductTable products={products} />
		</div>
	);
}

export default FilterableProductTable;