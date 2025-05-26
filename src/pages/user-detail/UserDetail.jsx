import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api';

const UserDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/users/${id}`)
      .then(res => setData(res.data))
      .catch(() => navigate("*"));
  }, []);

  return (
    <section className="min-h-screen bg-white text-[#1a1a1a] py-16">
      <div className="container mx-auto px-4">
        {data && (
          <div className="max-w-4xl mx-auto shadow-lg rounded-2xl border border-gray-200 p-6 bg-[#f9f9f9]">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">User Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-medium">{data.firstName} {data.lastName}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Username</p>
                <p className="text-blue-600">@{data.username}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="hover:underline text-blue-500 cursor-pointer">{data.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p>{data.phone}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Company</p>
                <p className="font-medium">{data.company?.name}</p>
                <p className="text-sm text-gray-500">{data.company?.title}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-gray-700">
                  {data.address?.city}, {data.address?.state}, {data.address?.country}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600">Short Bio</p>
              <p className="text-gray-700 italic mt-1">
                A passionate professional with interest in tech and innovation.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserDetail;
