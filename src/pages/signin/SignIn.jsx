import React from 'react';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link
          to={-1}
          className="inline-flex items-center gap-2 mb-8 text-sm text-[#8b949e] hover:text-white transition-colors"
        >
          <IoChevronBackSharp className="text-lg" />
          Go Back
        </Link>

        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-6">
          <h1 className="text-xl font-semibold text-center">Sign in</h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full px-4 py-2 bg-transparent border border-[#30363d] rounded-md text-sm placeholder-[#8b949e] focus:outline-none focus:ring-2 focus:ring-[#238636]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-transparent border border-[#30363d] rounded-md text-sm placeholder-[#8b949e] focus:outline-none focus:ring-2 focus:ring-[#238636]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-2 rounded-md transition-colors text-sm"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SignIn);

