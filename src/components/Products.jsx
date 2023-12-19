import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const ProductPage = () => {
  const apiURL = "https://slash-backend.onrender.com/product";
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [productRatings, setProductRatings] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response);
        // Initialize ratings for each product
        const initialRatings = response.data.data.reduce((acc, product) => {
          acc[product.id] = 0; // Initial rating for each product is 0
          return acc;
        }, {});
        setProductRatings(initialRatings);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortProducts = () => {
    const sortedProducts = [...products];

    if (sortBy === "high") {
      sortedProducts.sort(
        (a, b) => b.ProductVariations[0].price - a.ProductVariations[0].price
      );
    } else if (sortBy === "low") {
      sortedProducts.sort(
        (a, b) => a.ProductVariations[0].price - b.ProductVariations[0].price
      );
    }

    return sortedProducts;
  };

  const ratingChanged = (newRating, productId) => {
    setProductRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: newRating,
    }));
  };

  const sortedProducts = sortProducts();

  return (
    <div className="flex flex-col justify-center absolute mt-28 w-full font-serif">
      <label className="ml-2" htmlFor="sort">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={handleSortChange}
        className="p-2 border rounded ml-2 w-40"
      >
        <option value="default">Default</option>
        <option value="high">High Price</option>
        <option value="low">Low Price</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4  font-sans">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md duration-300 hover:shadow-xl"
          >
            <img
              src={
                product.ProductVariations[0].ProductVarientImages[0].image_path
              }
              alt={product.name}
              className="w-full h-60 object-cover mb-4 rounded-md"
            />
            <div className="text-left">
              <h3 className="text-lg text-[#bebebe] ">{product.name}</h3>
              <p className=" text-2xl text-black">{product.description}</p>
              <p className="text-black text">
                £{product.ProductVariations[0].price}
              </p>
              <p className="text-gray-600">
                Rating: {productRatings[product.id]}
              </p>
              <ReactStars
                count={5}
                onChange={(newRating) => ratingChanged(newRating, product.id)}
                value={productRatings[product.id]}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <p className="text-gray-600">
                Category: {product.SubCategories.name}
              </p>
              <button className="bg-[#463610] text-white py-2 px-4 mt-4 rounded-md  hover:opacity-75 duration-300 ease-out">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
