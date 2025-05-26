import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { LiaHeart } from "react-icons/lia";
import LoadingPostsDetail from '../../components/loadingPostsDetail/LoadingPostsDetail';

const PostsDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/posts/${id}`)
      .then(res => setData(res.data))
      .catch(() => navigate("*"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="min-h-screen bg-[#f8f9fa] py-20 px-4 text-[#1e1e1e]">
      <div className="max-w-xl mx-auto">
        {loading ? (
          <LoadingPostsDetail />
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-6">
            {/* Post Body */}
            <p className="text-[15px] md:text-[17px] text-gray-800 leading-relaxed">
              {data?.body}
            </p>

            {/* Like Only */}
            <div className="flex items-center gap-2 text-gray-600">
              <LiaHeart className="text-2xl hover:text-red-500 cursor-pointer transition duration-200" />
              <span className="text-sm font-medium">{data?.reactions?.likes} likes</span>
            </div>

            {/* Comment Box */}
            <form className="w-full">
              <label className="text-sm text-gray-600 block mb-1">Leave a comment</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Write something..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostsDetail;
