import { useState } from "react";
import { Product } from "../types/Product";
import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";

const FilterableProductTable = ({products}:{products:Product[]})  => {

	const [filterText, setFilterText] = useState("in");
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div>
			<Searchbar filterText={filterText} inStockOnly={inStockOnly} />
			<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
		</div>
	);
}

export default FilterableProductTable;