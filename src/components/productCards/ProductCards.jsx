import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import LoadingProducts from "../loadingProducts/LoadingProducts";
import { cardsPerLoad } from "../../pages/home/Home";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ productsData, count, setCount, loading, lastProduct }) => {
    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    };
    const navigate = useNavigate();

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_products text-[#0f172a]'>
            <div className="container mx-auto">
                {loading && <LoadingProducts />}

                <div className='products_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[8px] gap-y-[12px] sm:gap-y-[14px] lg:gap-x-[12px] lg:gap-y-[18px] min-[700px]:gap-[10px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
                    {
                        productsData?.products?.map((product) => (
                            <div
                                key={product.id}
                                className='card bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e7eb] group transition duration-200 hover:shadow-md'
                            >
                                <div className='card_image flex items-center justify-center bg-[#f9fafb] overflow-hidden'>
                                    <img
                                        onClick={() => navigate(`/product/${product.id}`)}
                                        loading="lazy"
                                        className='object-contain h-[160px] sm:h-[220px] md:h-[289px] group-hover:scale-[1.03] duration-300 cursor-pointer'
                                        src={product.images[0]}
                                        alt={product.title}
                                    />
                                </div>

                                <div className='card_body p-[12px] sm:p-[16px]'>
                                    <h4 className='text-[12px] sm:text-[15px] font-semibold text-[#1e293b] h-[18px] sm:h-[24px] mb-[6px] line-clamp-1'>
                                        {product.title}
                                    </h4>
                                    <p className='text-[11px] sm:text-[13px] text-[#64748b] mb-[12px] min-h-[32px] sm:min-h-[40px] line-clamp-2'>
                                        {product.description}
                                    </p>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[14px] sm:text-[16px] font-medium text-[#2563eb]'>
                                            ${product.price}
                                        </p>
                                        <button
                                            className='size-[34px] flex items-center justify-center rounded-md border border-[#e5e7eb] bg-[#eff6ff] text-[#2563eb] hover:bg-[#dbeafe] transition'
                                            aria-label="Add"
                                        >
                                            <IoAdd size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* See More Button */}
                {
                    !lastProduct && showButton && (
                        <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                            <button
                                onClick={handleSeeMore}
                                className='cursor-pointer text-[13px] sm:text-[15px] font-medium px-[16px] py-[8px] bg-[#2563eb] hover:bg-[#1d4ed8] text-white transition rounded-md'
                            >
                                See more
                            </button>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default React.memo(ProductCards);
