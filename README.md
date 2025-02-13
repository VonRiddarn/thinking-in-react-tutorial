# Thinking in react tutorial
Following along the "Thinking in React" tutorial at: https://react.dev/learn/thinking-in-react

## Download, install and run
1️⃣ Fork the Repository  
If you want to make changes to your own copy, 
fork this repository by clicking the `Fork` button at the top right of this page.  

2️⃣ Clone the Repository  
```
	git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
```  
`USER-NAME` = Your Github username  
`REPO-NAME` = The name you forked the repo as

3️⃣ Navigate into the Project Folder  
```
	cd REPOSITORY-NAME
```

4️⃣ Install Dependencies  
```
	npm install
```

5️⃣ Start the Development Server  
```
	npm run dev
```

## About the folder structure
Currently, we're using the structure:  

```
/src/
 ├── 📦 components/  
 │    ├── FilterableProductTable.tsx  
 │    ├── ProductCategoryRow.tsx  
 │    ├── ProductRow.tsx  
 │    ├── ProductTable.tsx  
 │    ├── Searchbar.tsx  
 ├── 💾 data/  
 │    ├── products.ts  
 ├── 🏷️ types/  
 │    ├── Product.ts  
```

Which isn't ideal as the entire filterable table feature is inside of the components folder.  
In this case it's workable, as it's just a simple tutorial / test project, but if one was to expand on this
a potentially better folder structure would be to add a features folder:  

```
/src/
 ├── 📦 components/  
 │    ├── Searchbar.tsx  
 ├── 🚀 features/  
 │    ├── 🏪 FilterableTable/  
 │    │    ├── FilterableProductTable.tsx  
 │    │    ├── ProductCategoryRow.tsx  
 │    │    ├── ProductRow.tsx  
 │    │    ├── ProductTable.tsx  
 ├── 💾 data/  
 │    ├── products.ts  
 ├── 🏷️ types/  
 │    ├── Product.ts  
```

We won't use that structure as this project is intended to be accessible to developers 
of varying skill levels.