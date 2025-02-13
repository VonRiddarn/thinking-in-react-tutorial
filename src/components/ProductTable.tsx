import { JSX } from "react";
import { Product } from "../types/Product";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({products, filterText, inStockOnly}:{products:Product[], filterText:string, inStockOnly:boolean}) {
	const rows:JSX.Element[] = [];
	let lastCategory: string = "";

	products.forEach((product) => {
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