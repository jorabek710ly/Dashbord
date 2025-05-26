import React, { useEffect, useState } from "react";
import LoadingPosts from "../loadingPosts/LoadingPosts";
import { cardsPerLoad } from "../../pages/home/Home";
import { NavLink } from "react-router-dom";

const PostCards = ({ postsData, count, setCount, loading, lastPost }) => {
    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    };

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 250);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section_posts bg-gray-50 py-12">
            <div className="container mx-auto max-w-7xl px-6">
                {loading && <LoadingPosts />}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {postsData?.posts?.map(post => (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col transition-shadow duration-300 hover:shadow-lg min-h-[260px]"
                        >
                            {/* Tags */}
                            <div className="h-[44px] flex items-center border-b border-gray-200 px-4">
                                <p className="text-sm text-gray-500 truncate">
                                    {post.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="mr-2">#{tag}</span>
                                    ))}
                                </p>
                            </div>

                            {/* Content */}
                            <div className="flex-1 px-4 py-5">
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    <span className="font-semibold text-gray-800">Content: </span>
                                    {post.body}
                                </p>
                            </div>

                            {/* Footer link */}
                            <div className="border-t border-gray-200 px-4 py-3 flex justify-end">
                                <NavLink
                                    to={`/post/${post.id}`}
                                    className="text-blue-600 text-sm font-semibold hover:underline"
                                >
                                    See the full detail
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See more button */}
                {!lastPost && showButton && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleSeeMore}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 shadow-md transition-colors duration-300"
                        >
                            Load More Posts
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default React.memo(PostCards);

