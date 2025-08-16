'use client'

import React from 'react'
import Link from 'next/link'

const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.8,
    reviews: 1247,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
    isOpen: true,
    tags: ['Popular', 'Fast Delivery']
  },
  {
    id: 2,
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.9,
    reviews: 892,
    deliveryTime: '30-45 min',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
    isOpen: true,
    tags: ['Fresh', 'Healthy']
  },
  {
    id: 3,
    name: 'Burger House',
    cuisine: 'American',
    rating: 4.6,
    reviews: 567,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
    isOpen: true,
    tags: ['Classic', 'Quick']
  },
  {
    id: 4,
    name: 'Fresh Greens',
    cuisine: 'Healthy',
    rating: 4.7,
    reviews: 423,
    deliveryTime: '25-40 min',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
    isOpen: false,
    tags: ['Vegetarian', 'Organic']
  },
  {
    id: 5,
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.5,
    reviews: 789,
    deliveryTime: '30-45 min',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop',
    isOpen: true,
    tags: ['Spicy', 'Authentic']
  },
  {
    id: 6,
    name: 'Noodle House',
    cuisine: 'Asian',
    rating: 4.4,
    reviews: 634,
    deliveryTime: '35-50 min',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop',
    isOpen: true,
    tags: ['Hot', 'Comfort']
  }
]

export default function FeaturedRestaurants() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Restaurants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best restaurants in your area with amazing food and fast delivery
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
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
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <span className="mr-1">🕒</span>
                    {restaurant.deliveryTime}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">👥</span>
                    {restaurant.reviews} reviews
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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

        <div className="text-center mt-12">
          <Link 
            href="/restaurants" 
            className="btn-secondary text-lg px-8 py-3"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </section>
  )
} 