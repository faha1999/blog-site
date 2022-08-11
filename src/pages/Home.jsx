import React from 'react';
import { BlogList } from '../components/BlogList';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { blogList } from '../data/blogData';

export const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <BlogList blogs={blogList} />
    </>
  );
};
