import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Home } from './pages/Home';
function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
