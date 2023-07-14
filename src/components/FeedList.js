import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function FeedList({ blogs }) {
  return (
    <div className="py-5 sm:py-5 overflow-y-auto md:h-screen h-[600px]">
      <div className=" max-w-7xl ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.length === 0 && (
            <p>
              No blogs posted yet!{" "}
              <Link to="/create">
                <span className="text-blue-600">blogIt?</span>
              </Link>
            </p>
          )}
          {blogs
            .sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate()) // sort blogs in descending order of creation time
            .map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <article
                  key={blog.id}
                  className="flex max-w-xl flex-col items-start justify-between bg-white p-4 rounded-md shadow-lg"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    {/* <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time> */}
                    <p className="relative z-10 rounded-full bg-amber-400 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                      {blog.category}
                    </p>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-800 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {blog.name}
                    </h3>
                    <p className="mt-5 mr-2 text-sm leading-6 text-gray-600 line-clamp-3">
                      {blog.details}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Avatar src={blog.createdBy.photoURL} />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {blog.createdBy.displayName}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
