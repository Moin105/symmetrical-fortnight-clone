import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const blogPost = {
  id: 1,
  title: 'Top 10 Must-Try Pizza Places in New York',
  content: `
    <p>New York City is renowned for its pizza culture, with countless pizzerias serving up delicious pies from classic Neapolitan to innovative gourmet creations. After extensive research and taste testing, we've compiled a list of the top 10 pizza places that every food lover must try in the Big Apple.</p>
    
    <h2>1. Lombardi's (1905)</h2>
    <p>As America's first pizzeria, Lombardi's holds a special place in pizza history. Located in Little Italy, this iconic establishment serves up classic coal-fired pizzas with a perfectly charred crust and fresh mozzarella. The Margherita pizza here is a must-try, featuring San Marzano tomatoes and fresh basil.</p>
    
    <h2>2. Grimaldi's</h2>
    <p>Nestled under the Brooklyn Bridge, Grimaldi's is famous for its coal-fired brick oven pizzas. The thin, crispy crust and generous toppings make every bite memorable. Don't miss their signature white pizza with ricotta, mozzarella, and garlic.</p>
    
    <h2>3. Di Fara Pizza</h2>
    <p>This family-owned pizzeria in Midwood, Brooklyn, has been serving authentic Neapolitan-style pizza since 1965. Owner Dom DeMarco personally makes each pizza, ensuring perfection. The wait is worth it for their legendary square slices.</p>
    
    <h2>4. Joe's Pizza</h2>
    <p>A Greenwich Village institution since 1975, Joe's Pizza is famous for its classic New York slices. The thin, foldable crust and perfect cheese-to-sauce ratio make it a favorite among locals and tourists alike.</p>
    
    <h2>5. Roberta's</h2>
    <p>Located in Bushwick, Roberta's has revolutionized the pizza scene with its wood-fired oven and creative toppings. Their "Bee Sting" pizza with soppressata, mozzarella, and hot honey is a game-changer.</p>
    
    <h2>6. Lucali</h2>
    <p>This intimate pizzeria in Carroll Gardens serves up some of the best thin-crust pizzas in the city. The BYOB policy and candlelit atmosphere make it perfect for date night. Be prepared to wait, but it's absolutely worth it.</p>
    
    <h2>7. Motorino</h2>
    <p>With locations in Williamsburg and the East Village, Motorino specializes in Neapolitan-style pizzas with a perfectly charred crust. Their Brussels sprout pizza with pancetta and mozzarella is a unique and delicious option.</p>
    
    <h2>8. Artichoke Basille's Pizza</h2>
    <p>Known for their signature artichoke pizza, this chain has become a late-night favorite. The creamy artichoke sauce and thick, Sicilian-style crust create a unique pizza experience that's unlike anything else in the city.</p>
    
    <h2>9. L&B Spumoni Gardens</h2>
    <p>This Bensonhurst institution is famous for its Sicilian square slices. The thick, fluffy crust and sweet sauce make it a must-try for anyone visiting Brooklyn. Don't forget to order their famous spumoni for dessert.</p>
    
    <h2>10. Paulie Gee's</h2>
    <p>Located in Greenpoint, Paulie Gee's offers creative wood-fired pizzas with unique toppings. Their "Hellboy" pizza with soppressata, mozzarella, and hot honey is a spicy delight that keeps customers coming back.</p>
    
    <h2>Tips for the Best Pizza Experience</h2>
    <ul>
      <li>Call ahead for reservations at popular spots like Lucali and Roberta's</li>
      <li>Visit during off-peak hours to avoid long waits</li>
      <li>Try different styles: Neapolitan, New York, and Sicilian</li>
      <li>Don't be afraid to ask for recommendations from the staff</li>
      <li>Consider the atmosphere - some places are perfect for dates, others for quick slices</li>
    </ul>
    
    <p>Whether you're a pizza purist or an adventurous eater, New York City has something for everyone. These 10 pizzerias represent the best of what the city has to offer, from classic institutions to innovative newcomers. Happy eating!</p>
  `,
  excerpt: 'Discover the best pizza joints in the Big Apple, from classic Neapolitan to innovative gourmet creations.',
  author: {
    name: 'Sarah Johnson',
    bio: 'Food writer and pizza enthusiast with 10+ years of experience covering New York\'s culinary scene.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
    twitter: '@sarahjohnson',
    instagram: '@sarahjohnson_food'
  },
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Food Guide',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop',
  tags: ['Pizza', 'New York', 'Restaurants', 'Food Guide', 'Italian'],
  relatedPosts: [
    {
      id: 2,
      title: 'Weekend Brunch Spots You Need to Try',
      excerpt: 'From classic eggs benedict to innovative fusion dishes, here are the best brunch destinations.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      date: '2024-01-08'
    },
    {
      id: 3,
      title: 'The Rise of Plant-Based Dining: A Complete Guide',
      excerpt: 'Explore the growing trend of plant-based restaurants and how they\'re changing the food industry.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'International Cuisine: Exploring Global Flavors',
      excerpt: 'Take a culinary journey around the world with these authentic international restaurants.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
      date: '2024-01-03'
    }
  ]
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
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