import React from 'react'
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingRecipes = () => {
    const loadingRecipes = Array(cardsPerLoad).fill("");

    return (
        <div className='recipes_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 gap-x-[10px] gap-y-[16px] sm:gap-[16px] md:gap-[20px] min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5'>
            {
                loadingRecipes.map((_, index) => (
                    <div
                        key={index}
                        className='card overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] shadow-sm animate-pulse'
                    >
                        {/* Image placeholder */}
                        <div className='bg-[#e5e7eb] h-[200px] sm:h-[240px] md:h-[289px]' />

                        {/* Text placeholders */}
                        <div className='card_body'>
                            {
                                Array(5).fill(0).map((_, idx) => (
                                    <div
                                        key={idx}
                                        className='px-[10px] py-[10px] border-b last:border-b-0 border-[#e5e7eb]'
                                    >
                                        <div className='h-[12px] w-[60%] bg-[#d1d5db] rounded-full' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingRecipes);
