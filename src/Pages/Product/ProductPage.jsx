

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./Product.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import productImg from "./assets/m-h-slider-img-6.png";

function ProductSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  async function FetchData() {
    const apiUrl = "https://dummyjson.com/products";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Error");
      }
      const result = await response.json();
      setData(result.products.slice(0, 5)); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div className="product-container">
      <div className="product-text">
      <img src={productImg}/>
      <h2 >Find Your Beauty Match</h2>
      <span>At vero eos et accusamus et iusto</span>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-items">
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "250px", height:"200px", borderRadius: "10px" }}
              />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={()=>navigate(`/product/${item.id}`)} className="details">Details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;


