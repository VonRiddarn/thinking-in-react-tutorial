import { JSX } from "react";
import { Product } from "../types/Product";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type ProductTableProps = {
	products: Product[];
	filterText: string;
	inStockOnly: boolean;
};

function ProductTable({products, filterText, inStockOnly}:ProductTableProps) {
	const rows:JSX.Element[] = [];
	let lastCategory: string = "";

	products.forEach((product) => {

		if(inStockOnly && !product.stocked)
			return;

		// Return the index of the first letter of the first substring.
		// "nda" + "Monday" = 2;
		// If no substring is found, returns -1.
		if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
			return;

		if(product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow category={product.category} key={product.category}/>
			);
		}

		rows.push(
			<ProductRow product={product} key={product.name} />
		);

		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

export default ProductTable;