import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const allRestaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.8,
    reviews: 1247,
    deliveryTime: '25-35 min',
    deliveryFee: '$2.99',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    tags: ['Pizza', 'Pasta', 'Italian'],
    isOpen: true,
    priceRange: '$$'
  },
  {
    id: 2,
    name: 'Burger House',
    cuisine: 'American',
    rating: 4.6,
    reviews: 892,
    deliveryTime: '20-30 min',
    deliveryFee: '$1.99',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    tags: ['Burgers', 'Fries', 'American'],
    isOpen: true,
    priceRange: '$'
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    reviews: 1563,
    deliveryTime: '30-45 min',
    deliveryFee: '$3.99',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    tags: ['Sushi', 'Asian', 'Healthy'],
    isOpen: true,
    priceRange: '$$$'
  },
  {
    id: 4,
    name: 'Fresh Greens',
    cuisine: 'Healthy',
    rating: 4.7,
    reviews: 634,
    deliveryTime: '15-25 min',
    deliveryFee: '$0.99',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    tags: ['Salads', 'Healthy', 'Vegan'],
    isOpen: true,
    priceRange: '$$'
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    reviews: 445,
    deliveryTime: '18-28 min',
    deliveryFee: '$2.49',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    tags: ['Tacos', 'Mexican', 'Spicy'],
    isOpen: false,
    priceRange: '$'
  },
  {
    id: 6,
    name: 'Sweet Dreams',
    cuisine: 'Desserts',
    rating: 4.8,
    reviews: 789,
    deliveryTime: '20-30 min',
    deliveryFee: '$1.49',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    tags: ['Desserts', 'Cakes', 'Sweet'],
    isOpen: true,
    priceRange: '$$'
  },
  {
    id: 7,
    name: 'Noodle House',
    cuisine: 'Asian',
    rating: 4.4,
    reviews: 567,
    deliveryTime: '22-32 min',
    deliveryFee: '$2.99',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    tags: ['Noodles', 'Asian', 'Soup'],
    isOpen: true,
    priceRange: '$$'
  },
  {
    id: 8,
    name: 'Steak House',
    cuisine: 'American',
    rating: 4.7,
    reviews: 923,
    deliveryTime: '35-45 min',
    deliveryFee: '$4.99',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    tags: ['Steak', 'American', 'Premium'],
    isOpen: true,
    priceRange: '$$$'
  }
]

const cuisines = ['All', 'Italian', 'American', 'Japanese', 'Mexican', 'Asian', 'Healthy', 'Desserts']

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                All Restaurants
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Discover amazing restaurants in your area and order your favorite meals
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search restaurants..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      cuisine === 'All' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Sort by: Rating</option>
                <option>Sort by: Delivery Time</option>
                <option>Sort by: Price</option>
                <option>Sort by: Distance</option>
              </select>
            </div>
          </div>
        </section>

        {/* Restaurants Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allRestaurants.map((restaurant) => (
                <Link 
                  key={restaurant.id} 
                  href={`/restaurant/${restaurant.id}/menu`}
                  className="card group cursor-pointer block"
                >
                  {/* Restaurant Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <div 
                      className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${restaurant.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        restaurant.isOpen 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {restaurant.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <span className="text-yellow-500 text-sm font-bold">★</span>
                        <span className="text-gray-900 text-sm font-semibold ml-1">
                          {restaurant.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {restaurant.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Restaurant Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <span className="mr-1">👥</span>
                        {restaurant.reviews} reviews
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">🕒</span>
                        {restaurant.deliveryTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Delivery • {restaurant.deliveryTime}
                      </div>
                      <div className="text-primary-600 font-semibold">
                        Order Now →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Restaurants
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 