import React from 'react'
import { PiUserLight } from "react-icons/pi";
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingUsers = () => {
    const loadingUsers = Array(cardsPerLoad).fill("");

    return (
        <div className='users_wrapper py-[30px] grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[16px] min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
            {
                loadingUsers.map((_, index) => (
                    <div
                        key={index}
                        className='users_card rounded-xl overflow-hidden border border-[#e5e7eb] bg-[#f9fafb] shadow-sm animate-pulse'
                    >
                        {/* Icon header */}
                        <div className='h-[42px] px-[12px] flex items-center justify-between border-b border-[#e5e7eb]'>
                            <PiUserLight className='text-[#d1d5db] text-[22px]' />
                            <div className='h-[14px] w-[20%] bg-[#d1d5db] rounded-full' />
                        </div>

                        {/* Info skeleton lines */}
                        {
                            ['First Name', 'Last Name', 'Username'].map((label, idx) => (
                                <div
                                    key={idx}
                                    className='h-[42px] flex items-center border-b last:border-b-0 border-[#e5e7eb]'
                                >
                                    <div className='px-[12px] w-full'>
                                        <div className='h-[12px] w-[50%] bg-[#d1d5db] rounded-full' />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingUsers);
