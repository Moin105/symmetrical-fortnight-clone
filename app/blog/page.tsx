import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Craft Cocktails: A Complete Guide',
    excerpt: 'Discover the secrets behind creating perfect craft cocktails from master mixologists and premium bars.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Whiskey Tasting Guide: From Beginner to Expert',
    excerpt: 'Learn how to properly taste and appreciate different types of whiskey from around the world.',
    author: 'Emily Rodriguez',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Spirits',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'Best Rooftop Bars in the City: A Nightlife Guide',
    excerpt: 'Explore the most stunning rooftop bars with breathtaking city views and premium cocktails.',
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Bars',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'Exclusive Events: How to Access Premium Experiences',
    excerpt: 'From private tastings to VIP events, discover how to access the most exclusive nightlife experiences.',
    author: 'David Kim',
    date: '2024-01-08',
    readTime: '4 min read',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 5,
    title: 'Sustainable Food Delivery: How We\'re Making a Difference',
    excerpt: 'Learn about our commitment to eco-friendly practices and reducing our environmental impact.',
    author: 'ByFoods Team',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: 'International Cuisine: Exploring Global Flavors',
    excerpt: 'Take a culinary journey around the world with these authentic international restaurants.',
    author: 'Sarah Johnson',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Food Guide',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
    featured: false
  }
]

const categories = ['All', 'Cocktails', 'Spirits', 'Bars', 'Events', 'Distilleries', 'Nightlife']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ByFoods Blog
              </h1>
              <p className="text-xl text-black/80 max-w-2xl mx-auto">
                Discover the latest in nightlife, spirits, events, and entertainment culture
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All' 
                        ? 'bg-primary-500 text-black' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-primary-600 font-semibold text-sm">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>By {blogPosts[0].author}</span>
                      <span>•</span>
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <button className="btn-primary">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                      <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest food trends, restaurant guides, and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Topics
              </h2>
              <p className="text-lg text-gray-600">
                Explore our most-read content categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🍕', title: 'Pizza Guides', count: '12 articles' },
                { icon: '🥗', title: 'Healthy Eating', count: '8 articles' },
                { icon: '🌍', title: 'International Cuisine', count: '15 articles' },
                { icon: '🏆', title: 'Restaurant Reviews', count: '20 articles' }
              ].map((topic, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {topic.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-primary-500 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">10</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 