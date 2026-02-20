const categoriesContainer = document.getElementById("categories");
//console.log(categoriesContainer);
const productsContainer = document.getElementById("products");
//console.log(productsContainer);
const productDetailsContainer = document.getElementById(
  "productDetailsContainer",
);
//console.log(productDetailsContainer);

const categories = fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((data) => fetchCategories(data))
  .catch((err) => console.log("Failed to fetch categories:", err));

//console.log(categories);

async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    renderProducts(data);
  } catch (err) {
    //console.log("Failed to fetch products:", err);
    productsContainer.innerHTML = `
      <div class="text-center text-gray-500 py-10 mt-5">
        <p class="text-lg">Failed to load products. Please try again later.</p>
      </div>
    `;
  }
}

function fetchCategories(categories) {
  for (const category of categories) {
    console.log(category);
    const Button = document.createElement("button");
    Button.classList.add(
      "btn",
      "btn-md",
      "btn-outline",
      "font-medium",
      "border",
      "border-gray-300",
      "rounded-2xl",
      "px-5",
    );
    Button.innerText = category;
    Button.addEventListener("click", () => {
      fetchProductsByCategories(category);
    });
    //  console.log(Button);
    categoriesContainer.appendChild(Button);
  }
}

async function fetchProductsByCategories(category) {
  //console.log(category);

  const products = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  )
    .then((res) => res.json())
    .then((data) => renderProducts(data))
    .catch((err) => {
      // console.log(`Failed to fetch products for category ${category}:`, err);
      productDetailsContainer.innerHTML = `
      <div class="text-center text-gray-500 py-10 mt-5">
        <p class="text-lg">Failed to load products for category "${category}". Please try again later.</p>
      </div>
    `;
    });
}

 function renderProducts(products) {
  productsContainer.innerHTML = products
    .map(
      (product) => `
      <div class="card bg-white w-full shadow-sm rounded-lg overflow-hidden flex flex-col">
        <figure class="bg-gray-300 p-8 flex justify-center items-center flex-grow">
          <img src="${product.image}" alt="${product.title}" class="max-h-60 min-h-60 w-auto object-contain" />
        </figure>
        <div class="card-body p-4">
          <div class="flex justify-between items-center mb-2">
            <div class="text-xs bg-indigo-100 text-indigo-600 rounded-2xl px-3 py-0.5 font-semibold">
              ${product.category}
            </div>
            <div class="flex items-center text-yellow-500 text-sm font-semibold space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l+1.286-3.97z"/>
              </svg>
              <span class="text-gray-700" >${product.rating.rate} (${product.rating.count})</span> 
            </div>
          </div>
            <h2 class="font-semibold text-lg line-clamp-1 mb-1">${product.title}</h2>
            <p class="font-bold text-lg mb-4">$${product.price}</p>
            <div class="flex space-x-3">
                  <button
                    class="btn btn-outline btn-sm flex-1 gap-2 justify-center border-slate-300 shadow-sm rounded-lg"
                    type="button" onclick="productDetails(${product.id}); my_modal_3.showModal();"
                  >
                    <i class="fas fa-eye text-sm"></i>
                    Details
                  </button>
                  <button
                    class="btn btn-primary btn-sm flex-1 gap-2 justify-center rounded-lg"
                    type="button"
                  >
                    <i class="fas fa-shopping-cart text-sm"></i>
                    Add
                  </button>
            </div>
        </div>
      </div>
    `,
    )
    .join("");
}

async function productDetails(id) {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      productDetailsContainer.innerHTML = `
      <div class="card bg-base-100 w-full shadow-sm mt-5">
        <figure class="bg-gray-300">
          <img 
            src="${data.image}" 
            alt="${data.title}" 
            class="max-h-60 min-h-60 w-auto object-contain py-2" 
          />
        </figure>

        <div class="card-body">
         <div class="badge badge-secondary">${data.category}</div>
          <h2 class="card-title">
            ${data.title}
           
          </h2>

          <p>${data.description}</p>

          <div class="flex items-center gap-2 mt-2">
            <div class="">
              ⭐ ${data.rating.rate}
            </div>
            <div class="text-sm text-gray-500">
              (${data.rating.count} reviews)
            </div>
          </div>

          <div class="card-actions justify-between items-center mt-4">
            <div class=" text-lg font-bold">
              $${data.price}
            </div>

            <button class="btn btn-accent">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .catch((err) => {
      console.log("Failed to fetch product details:", err);
      productDetailsContainer.innerHTML = `
      <div class="text-center text-gray-500 py-10 mt-5">
        <p class="text-lg">Failed to load product details. Please try again later.</p>
      </div>
    `;
    });


}

fetchProducts();
