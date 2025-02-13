import { useState } from "react";
import { Product } from "../types/Product";
import ProductTable from "./ProductTable";
import Searchbar from "./Searchbar";

type FilterableProductTableProps = {
	products:Product[];
};

const FilterableProductTable = ({products}:FilterableProductTableProps)  => {

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