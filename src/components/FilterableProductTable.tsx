import { useState } from "react";
import { Product } from "../types/Product";
import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";

const FilterableProductTable = ({products}:{products:Product[]})  => {

	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);

	return (
		<div>
			<Searchbar 
			filterText={filterText} 
			inStockOnly={inStockOnly} 
			onFilterTextChange={setFilterText}
			onInStockOnlyChange={setInStockOnly}/>
			<ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
		</div>
	);
}

export default FilterableProductTable;