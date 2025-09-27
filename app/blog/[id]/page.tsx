import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const blogPost = {
  id: 1,
  title: 'The Art of Craft Cocktails: A Complete Guide',
  content: `
    <p>Craft cocktails have revolutionized the nightlife scene, bringing artistry, creativity, and premium ingredients to the forefront of mixology. From speakeasies to rooftop bars, the craft cocktail movement has elevated the drinking experience to new heights. In this comprehensive guide, we'll explore the techniques, ingredients, and venues that define this exciting world.</p>
    
    <h2>1. The Foundation: Quality Spirits</h2>
    <p>Every great craft cocktail starts with premium spirits. Whether it's a small-batch bourbon, artisanal gin, or aged rum, the base spirit sets the tone for the entire drink. Top mixologists carefully select spirits that offer complexity, character, and balance.</p>
    
    <h2>2. Fresh Ingredients Make the Difference</h2>
    <p>Gone are the days of artificial syrups and pre-made mixes. Modern craft cocktails rely on fresh citrus, house-made syrups, and seasonal ingredients. From muddled herbs to freshly squeezed juices, every component is carefully prepared to enhance the drinking experience.</p>
    
    <h2>3. The Science of Mixing</h2>
    <p>Craft cocktails are built on the principles of balance, dilution, and temperature. Understanding how different ingredients interact, the importance of proper shaking or stirring, and the role of ice in creating the perfect drink is essential for any aspiring mixologist.</p>
    
    <h2>4. Presentation and Garnish</h2>
    <p>Visual appeal is crucial in craft cocktails. From elegant glassware to creative garnishes, presentation elevates the entire experience. Edible flowers, citrus twists, and even smoke effects can transform a simple drink into a work of art.</p>
    
    <h2>5. Signature Techniques</h2>
    <p>Advanced techniques like fat-washing, barrel-aging, and molecular mixology have pushed the boundaries of what's possible in cocktail creation. These innovative methods allow bartenders to create unique flavors and textures that were previously unimaginable.</p>
    
    <h2>6. The Role of the Bartender</h2>
    <p>Modern bartenders are more than drink makers – they're storytellers, entertainers, and craftspeople. The best craft cocktail bars feature bartenders who can guide guests through flavor profiles, suggest perfect pairings, and create personalized experiences.</p>
    
    <h2>7. Popular Craft Cocktail Categories</h2>
    <ul>
      <li><strong>Classic Revivals:</strong> Updated versions of timeless drinks like the Old Fashioned and Manhattan</li>
      <li><strong>Seasonal Creations:</strong> Cocktails that highlight seasonal ingredients and flavors</li>
      <li><strong>Smoked Cocktails:</strong> Drinks enhanced with wood smoke for depth and complexity</li>
      <li><strong>Tiki Revival:</strong> Modern interpretations of tropical classics with premium ingredients</li>
      <li><strong>Low-ABV Options:</strong> Sophisticated drinks with lower alcohol content for extended enjoyment</li>
    </ul>
    
    <h2>8. Building Your Home Bar</h2>
    <p>Creating craft cocktails at home requires quality tools and ingredients. Essential equipment includes a cocktail shaker, jigger, muddler, and strainer. Start with a few premium spirits and build your collection gradually, focusing on versatility and quality.</p>
    
    <h2>9. The Future of Craft Cocktails</h2>
    <p>The craft cocktail movement continues to evolve, with trends like zero-waste cocktails, sustainable practices, and innovative flavor combinations shaping the future. Technology is also playing a role, with apps and tools helping both professionals and enthusiasts perfect their craft.</p>
    
    <p>Whether you're a seasoned cocktail enthusiast or just beginning your journey into the world of craft drinks, there's always something new to discover. The art of craft cocktails is about more than just mixing ingredients – it's about creating experiences, telling stories, and celebrating the rich tradition of mixology while pushing its boundaries forward.</p>
  `,
  excerpt: 'Discover the secrets behind creating perfect craft cocktails from master mixologists and premium bars.',
  author: {
    name: 'Sarah Johnson',
    bio: 'Cocktail expert and mixology enthusiast with 10+ years of experience in the nightlife industry.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
    twitter: '@sarahjohnson',
    instagram: '@sarahjohnson_food'
  },
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Cocktails',
  image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop',
  tags: ['Cocktails', 'Mixology', 'Bars', 'Spirits', 'Nightlife'],
  relatedPosts: [
    {
      id: 2,
      title: 'Whiskey Tasting Guide: From Beginner to Expert',
      excerpt: 'Learn how to properly taste and appreciate different types of whiskey from around the world.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      date: '2024-01-08'
    },
    {
      id: 3,
      title: 'Best Rooftop Bars in the City: A Nightlife Guide',
      excerpt: 'Explore the most stunning rooftop bars with breathtaking city views and premium cocktails.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Exclusive Events: How to Access Premium Experiences',
      excerpt: 'From private tastings to VIP events, discover how to access the most exclusive nightlife experiences.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
      date: '2024-01-03'
    }
  ]
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="bg-black">
        {/* Article Header */}
        <section className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><a href="/" className="hover:text-primary-500">Home</a></li>
                <li>/</li>
                <li><a href="/blog" className="hover:text-primary-500">Blog</a></li>
                <li>/</li>
                <li className="text-gray-900">{blogPost.title}</li>
              </ol>
            </nav>

            {/* Article Meta */}
            <div className="mb-6">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {blogPost.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>

            {/* Article Excerpt */}
            <p className="text-xl text-gray-600 mb-8">
              {blogPost.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={blogPost.author.image} 
                  alt={blogPost.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{blogPost.author.name}</div>
                  <div className="text-sm text-gray-600">{new Date(blogPost.date).toLocaleDateString()} • {blogPost.readTime}</div>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Share:</span>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </button>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-xl shadow-sm p-8">
                  {/* Featured Image */}
                  <div className="mb-8">
                    <img 
                      src={blogPost.image} 
                      alt={blogPost.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                    />
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {blogPost.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Author Info */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={blogPost.author.image} 
                        alt={blogPost.author.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{blogPost.author.name}</div>
                        <div className="text-sm text-gray-600">{blogPost.author.bio}</div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <a href={`https://twitter.com/${blogPost.author.twitter}`} className="text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href={`https://instagram.com/${blogPost.author.instagram}`} className="text-pink-600 hover:text-pink-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                    <p className="text-primary-100 mb-4">Get the latest food guides and restaurant reviews delivered to your inbox.</p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                      />
                      <button className="w-full bg-white text-primary-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  {/* Popular Posts */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((post) => (
                        <div key={post} className="flex space-x-3">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                              Popular Post Title {post}
                            </h4>
                            <p className="text-xs text-gray-500">Jan 10, 2024</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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

        {/* Comments Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments (3)</h3>
              
              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button className="btn-primary">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {[1, 2, 3].map((comment) => (
                  <div key={comment} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900">User {comment}</span>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          Great article! I've been to a few of these places and they're all amazing. Can't wait to try the others on the list.
                        </p>
                        <button className="text-sm text-primary-600 hover:text-primary-700 mt-2">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 