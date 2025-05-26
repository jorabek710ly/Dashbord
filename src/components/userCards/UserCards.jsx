import React, { useEffect, useState } from 'react';
import { PiUserLight } from "react-icons/pi";
import LoadingUsers from '../loadingUsers/LoadingUsers';
import { cardsPerLoad } from "../../pages/home/Home";
import { NavLink } from 'react-router-dom';

const UserCards = ({ userData, count, setCount, loading, lastUser }) => {
    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section_users bg-gray-900 py-10">
            <div className="container mx-auto max-w-7xl px-6">
                {loading && <LoadingUsers />}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {userData?.users?.map(user => (
                        <div 
                            key={user.id} 
                            className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 hover:shadow-blue-500 transition-shadow duration-300 min-h-[220px]"
                        >
                            <NavLink to={`/user/${user.id}`} className="mb-5 text-blue-400 hover:text-blue-600 transition-colors duration-300">
                                <PiUserLight className="text-[56px]" />
                            </NavLink>
                            <div className="w-full text-center space-y-3 flex flex-col justify-center">
                                <p className="text-sm sm:text-base text-gray-300">
                                    <span className="font-semibold text-white">First Name: </span>{user.firstName}
                                </p>
                                <p className="text-sm sm:text-base text-gray-300">
                                    <span className="font-semibold text-white">Last Name: </span>{user.lastName}
                                </p>
                                <NavLink 
                                    to={`/user/${user.id}`} 
                                    className="text-blue-400 text-sm sm:text-base hover:underline truncate block"
                                    title={`@${user.username}`}
                                >
                                    Username: <span className="font-semibold">@{user.username}</span>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                {!lastUser && showButton && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleSeeMore}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                        >
                            Load More Users
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default React.memo(UserCards);
