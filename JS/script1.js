

const categoriesContainer = document.getElementById('categories');
console.log(categoriesContainer);

const categories = fetch('https://fakestoreapi.com/products/categories')
.then(res=>res.json())
.then(data=> fetchCategories(data))
.catch(err=> console.log("Failed to fetch categories:", err));

console.log(categories);

async function fetchCategories(categories) {
    for(category of categories){
        console.log(category);
        const Button = document.createElement('button');
        Button.classList.add('btn','btn-md','btn-outline','font-medium','border','border-gray-300','rounded-2xl','px-5');
        Button.innerText= category;
        console.log(Button)
        categoriesContainer.appendChild(Button);

    }
}