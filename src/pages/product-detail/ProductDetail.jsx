import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { MdOutlineDone } from "react-icons/md";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    api.get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => navigate("*"));
  }, []);

  return (
    
    <section className="bg-[#f8fafc] py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-md">
            <div className="flex flex-col gap-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-200">
                <img
                  src={product?.images?.[mainImgIndex]}
                  alt="main"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product?.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl overflow-hidden cursor-pointer border-2 ${mainImgIndex === idx ? "border-blue-500" : "border-gray-200"}`}
                    onClick={() => setMainImgIndex(idx)}
                  >
                    <img src={img} alt={`thumb-${idx}`} className="w-full h-[60px] object-contain" />
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="underline font-medium text-blue-600">{product?.rating}</span> ({product?.reviews?.length} reviews) • <span>{product.stock} in stock</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-3xl font-bold text-pink-600">${product?.price}</p>
              </div>
              <div className="text-sm text-gray-700">
                <p><span className="font-medium text-gray-500">Brand:</span> {product?.brand}</p>
                <p className="flex items-center gap-2">
                  <span className="font-medium text-gray-500">Availability:</span> {product?.availabilityStatus}
                  {product?.stock >= 7 && (
                    <MdOutlineDone className="text-green-600" />
                  )}
                </p>
                <p><span className="font-medium text-gray-500">Return:</span> {product?.returnPolicy}</p>
                <p><span className="font-medium text-gray-500">Shipping:</span> {product?.shippingInformation}</p>
                <p><span className="font-medium text-gray-500">Warranty:</span> {product?.warrantyInformation}</p>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
