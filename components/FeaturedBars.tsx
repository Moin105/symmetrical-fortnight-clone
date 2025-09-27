'use client'

import React from 'react'
import Link from 'next/link'

const bars = [
  {
    id: 1,
    name: 'The Golden Hour',
    type: 'Cocktail Bar',
    rating: 4.8,
    reviews: 1247,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$',
    specialties: ['Craft Cocktails', 'Premium Spirits']
  },
  {
    id: 2,
    name: 'Midnight Lounge',
    type: 'Speakeasy',
    rating: 4.9,
    reviews: 892,
    location: 'Arts District',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$$',
    specialties: ['Vintage Cocktails', 'Exclusive Spirits']
  },
  {
    id: 3,
    name: 'Sky Bar',
    type: 'Rooftop Bar',
    rating: 4.6,
    reviews: 567,
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$',
    specialties: ['City Views', 'Champagne']
  }
]

export default function FeaturedBars() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Bars
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the finest bars and lounges in the city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bars.map((bar) => (
            <Link 
              key={bar.id} 
              href={`/bars`}
              className="group cursor-pointer block"
            >
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow">
                <div className="relative h-48">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${bar.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      bar.isOpen 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {bar.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-full p-2">
                      <span className="text-yellow-500 text-sm font-bold">★</span>
                      <span className="text-white text-sm font-semibold ml-1">
                        {bar.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {bar.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{bar.type}</p>
                  <p className="text-gray-500 text-sm mb-4">{bar.location}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <span className="mr-1">👥</span>
                      {bar.reviews} reviews
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">📍</span>
                      {bar.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {bar.type} • {bar.location}
                    </div>
                    <div className="text-primary-500 font-semibold">
                      View Details →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/bars" 
            className="btn-secondary text-lg px-8 py-3"
          >
            View All Bars
          </Link>
        </div>
      </div>
    </section>
  )
}
