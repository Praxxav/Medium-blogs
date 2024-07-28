// src/components/landing.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Medium Blogz</h1>
          <nav>
            <Link to="/"  className="ml-4 text-white py-2 px-4 rounded transition-all duration-300 border border-transparent hover:border-white">Home</Link>
            <Link to="/"  className="ml-4 text-white py-2 px-4 rounded transition-all duration-300 border border-transparent hover:border-white">About</Link>
            <Link to="/"  className="ml-4 text-white py-2 px-4 rounded transition-all duration-300 border border-transparent hover:border-white">Contact</Link>
            <Link to="/signin" className="ml-4 text-white py-2 px-4 rounded transition-all duration-300 border border-transparent hover:border-white">Login</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-gray-100 py-10">
          <div className="container mx-auto text-center"> 
            <h2 className="text-4xl font-bold mb-4 ">BLOGZ FOR DEVS</h2>
            <p className="text-lg mb-8">Discover the latest articles and updates.</p>
            <Link to="/signup" className="bg-black text-white py-2 px-4 rounded transition-all duration-300 border border-transparent hover:border-white">Read More</Link>
          </div>
        </section>
        <section className="container mx-auto py-10">
          <h3 className="text-3xl font-bold mb-6">Featured Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white p-4 shadow-lg rounded-lg">
              <h4 className="text-2xl font-bold mb-2">Understanding JavaScript: The Backbone of Modern Web Development</h4>
              <p className="text-gray-700 mb-4">JavaScript is a versatile and powerful programming language that has become an essential tool for modern web development. Initially created to add interactivity to web pages, JavaScript has evolved significantly and now powers a vast majority of web applications, providing the dynamic and interactive experiences users have come to expect. This article delves into the core concepts of JavaScript, its importance in web development, and how it continues to shape the future of the web.</p>
              <Link to="/signup" className="text-blue-500 transition-all duration-300 border border-transparent hover:border-white">Read More</Link>
            </article>
            <article className="bg-white p-4 shadow-lg rounded-lg">
              <h4 className="text-2xl font-bold mb-2">React: The Modern Way to Build Dynamic User Interfaces</h4>
              <p className="text-gray-700 mb-4">React is a popular JavaScript library for building user interfaces, particularly single-page applications where efficient, dynamic rendering of content is crucial. Created by Facebook in 2013, React has revolutionized front-end development with its component-based architecture and declarative approach. This article explores the core concepts of React, its advantages, and why it has become the go-to library for modern web development.</p>
              <Link to="/signup" className="text-blue-500 transition-all duration-300 border border-transparent hover:border-white">Read More</Link>
            </article>
            <article className="bg-white p-4 shadow-lg rounded-lg">
              <h4 className="text-2xl font-bold mb-2">Next.js: The Future of React-Based Web Development</h4>
              <p className="text-gray-700 mb-4">Next.js is a popular React framework that enhances React's capabilities by adding features such as server-side rendering (SSR), static site generation (SSG), and API routes. Developed by Vercel, Next.js provides a comprehensive solution for building modern web applications, combining the best of React with additional optimizations for performance and user experience. This article explores the core concepts of Next.js, its benefits, and why it's a game-changer for React-based web development.</p>
              <Link to="/signup" className="text-blue-500 transition-all duration-300 border border-transparent hover:border-white">Read More</Link>
            </article>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Medium Blogz. All rights reserved. Developed with love by Pranav Kulkarni.
        </div>
      </footer>
    </div>
  );
}

export default Landing;
