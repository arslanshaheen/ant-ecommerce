// export const getAllProducts = () => {
// import Category from "./../Pages/Category/index";
//   return fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then(console.log);
// };
export const getAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Filter products with ID less than 14
    const filteredProducts = data.products.filter(product => product.id < 16);

    console.log(filteredProducts);
    return { products: filteredProducts }; 
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

console.log("https://fakestoreapi.com/products")
// export const getProductsByCategory = (category) => {
//   return fetch(`https://dummyjson.com/products/category/${category}`).then(
//     (res) => res.json()
//   );
// };
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Re-throw the error for further handling if needed
  }
};

// export const addToCart = (id) => {
//   return fetch("https://dummyjson.com/carts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       userId: 1,
//       products: [
//         {
//           id: id,
//           quantity: 1,
//         },
//       ],
//     }),
//   })
//     .then((res) => res.json())
//     .then(console.log);
// };
///addtocart//
export const getCart = () => {
  return fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the data here
      return data; // Return the data if needed
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error; // Re-throw the error for further handling if needed
    });
};
//////////////////
export const addToCart = (id) => {
  return fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};
