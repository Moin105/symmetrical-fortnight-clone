'use client'

import React from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Craft Cocktails',
    excerpt: 'Discover the secrets behind creating perfect craft cocktails from master mixologists.',
    author: 'Sarah Johnson',
    date: '2024-02-10',
    readTime: '5 min read',
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Whiskey Tasting Guide',
    excerpt: 'Learn how to properly taste and appreciate different types of whiskey.',
    author: 'Michael Chen',
    date: '2024-02-08',
    readTime: '7 min read',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'Best Rooftop Bars in the City',
    excerpt: 'Explore the most stunning rooftop bars with breathtaking city views.',
    author: 'Emma Davis',
    date: '2024-02-05',
    readTime: '6 min read',
    category: 'Bars',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&h=300&fit=crop',
    featured: false
  }
]

export default function FeaturedBlogs() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends in nightlife, spirits, and entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group cursor-pointer block"
            >
              <div className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow">
                <div className="relative h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-black text-xs rounded-full font-semibold">
                      {post.category}
                    </span>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <span className="mr-2">👤</span>
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📖</span>
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="text-primary-500 font-semibold">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="btn-secondary text-lg px-8 py-3"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
