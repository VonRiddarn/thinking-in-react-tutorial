const Searchbar = ({
	filterText, 
	inStockOnly,
	onFilterTextChange,
	onInStockOnlyChange }: {
		filterText: string, 
		inStockOnly: boolean,
		onFilterTextChange: (text:string) => void,
		onInStockOnlyChange: (newValue: boolean) => void
	}) => {
	return (
		<form>
			<input 
			type="text" 
			value={filterText} 
			placeholder="Search..." 
			onChange={(e) => onFilterTextChange(e.target.value)}/>
			<label>
				<input type="checkbox" 
				checked={inStockOnly}
				onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
				{' '}
				Only show products in stock
			</label>
		</form>
	);
}

export default Searchbar;