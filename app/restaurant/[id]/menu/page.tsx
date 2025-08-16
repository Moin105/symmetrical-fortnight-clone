import React from 'react'
import Link from 'next/link'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'

const restaurant = {
  id: 1,
  name: 'Pizza Palace',
  cuisine: 'Italian',
  rating: 4.8,
  reviews: 1247,
  deliveryTime: '25-35 min',
  deliveryFee: '$2.99',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
  isOpen: true,
  description: 'Authentic Italian pizzeria serving the finest wood-fired pizzas, fresh pasta, and traditional Italian dishes.'
}

const menuCategories = [
  {
    id: 1,
    name: 'Pizzas',
    items: [
      {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Fresh mozzarella, tomato sauce, and basil',
        price: 18.99,
        originalPrice: 22.99,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
        tags: ['Popular', 'Vegetarian']
      },
      {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Classic pepperoni with melted cheese',
        price: 20.99,
        originalPrice: 24.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
        tags: ['Popular']
      },
      {
        id: 3,
        name: 'BBQ Chicken Pizza',
        description: 'BBQ sauce, grilled chicken, red onions',
        price: 22.99,
        originalPrice: 26.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
        tags: ['Spicy']
      }
    ]
  },
  {
    id: 2,
    name: 'Pasta',
    items: [
      {
        id: 4,
        name: 'Spaghetti Carbonara',
        description: 'Eggs, cheese, pancetta, and black pepper',
        price: 16.99,
        originalPrice: 19.99,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop',
        tags: ['Popular']
      },
      {
        id: 5,
        name: 'Fettuccine Alfredo',
        description: 'Creamy parmesan sauce with butter',
        price: 15.99,
        originalPrice: 18.99,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop',
        tags: ['Vegetarian']
      }
    ]
  },
  {
    id: 3,
    name: 'Salads',
    items: [
      {
        id: 6,
        name: 'Caesar Salad',
        description: 'Romaine lettuce, parmesan, croutons, caesar dressing',
        price: 12.99,
        originalPrice: 14.99,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
        tags: ['Vegetarian']
      },
      {
        id: 7,
        name: 'Greek Salad',
        description: 'Mixed greens, feta, olives, cucumber, tomatoes',
        price: 13.99,
        originalPrice: 15.99,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
        tags: ['Vegetarian']
      }
    ]
  }
]

export default function RestaurantMenuPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        {/* Restaurant Header */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                    <p className="text-gray-600 mb-2">{restaurant.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {restaurant.rating} ({restaurant.reviews} reviews)
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">🕒</span>
                        {restaurant.deliveryTime}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">🚚</span>
                        {restaurant.deliveryFee}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      restaurant.isOpen 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {restaurant.isOpen ? 'Open Now' : 'Closed'}
                    </span>
                    <button className="btn-primary">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium">
                  All Items
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
                  Popular
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
                  Vegetarian
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300">
                  Spicy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm sticky top-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <nav className="space-y-2">
                    {menuCategories.map((category) => (
                      <a
                        key={category.id}
                        href={`#${category.name.toLowerCase()}`}
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        {category.name} ({category.items.length})
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Menu Items */}
              <div className="lg:col-span-3 space-y-8">
                {menuCategories.map((category) => (
                  <div key={category.id} id={category.name.toLowerCase()}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                    <div className="grid gap-6">
                      {category.items.map((item) => (
                        <Link 
                          key={item.id} 
                          href={`/product/${item.id}`}
                          className="block"
                        >
                          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex gap-6">
                              {/* Item Image */}
                              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                <div 
                                  className="w-full h-full bg-cover bg-center"
                                  style={{ backgroundImage: `url(${item.image})` }}
                                />
                              </div>

                              {/* Item Details */}
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                                      {item.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                  </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {item.tags.map((tag) => (
                                    <span 
                                      key={tag} 
                                      className={`px-2 py-1 text-xs rounded-full ${
                                        tag === 'Popular' 
                                          ? 'bg-yellow-100 text-yellow-700'
                                          : tag === 'Spicy' 
                                          ? 'bg-red-100 text-red-700'
                                          : 'bg-green-100 text-green-700'
                                      }`}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                {/* Price and Add to Cart */}
                                <div className="flex items-center justify-between">
                                  <div className="text-right">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <span className="text-lg font-bold text-primary-600">${item.price}</span>
                                      {item.originalPrice > item.price && (
                                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                                      )}
                                    </div>
                                    <span className="text-primary-600 font-semibold text-sm">
                                      View Details →
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
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