import React from 'react';
import { BlogItem } from './partials/BlogItem';

export const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};
