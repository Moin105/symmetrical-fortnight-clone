'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
    specialties: ['Craft Cocktails', 'Premium Spirits', 'Live Music']
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
    specialties: ['Vintage Cocktails', 'Exclusive Spirits', 'Intimate Setting']
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
    specialties: ['City Views', 'Champagne', 'Sunset Drinks']
  },
  {
    id: 4,
    name: 'The Whiskey Den',
    type: 'Whiskey Bar',
    rating: 4.7,
    reviews: 423,
    location: 'Old Town',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$',
    specialties: ['Rare Whiskeys', 'Cigar Lounge', 'Classic Cocktails']
  },
  {
    id: 5,
    name: 'Neon Nights',
    type: 'Nightclub',
    rating: 4.5,
    reviews: 789,
    location: 'Entertainment District',
    image: 'https://images.unsplash.com/photo-1571266028243-e68f96d85b9a?w=400&h=300&fit=crop',
    isOpen: false,
    priceRange: '$$',
    specialties: ['Dancing', 'DJ Sets', 'VIP Tables']
  },
  {
    id: 6,
    name: 'The Wine Cellar',
    type: 'Wine Bar',
    rating: 4.4,
    reviews: 634,
    location: 'Historic Quarter',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$',
    specialties: ['Fine Wines', 'Cheese Platters', 'Sommelier Service']
  }
]

export default function BarsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Premium Bars & Lounges
              </h1>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Discover the finest bars, lounges, and nightlife venues in the city
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search bars, locations, or types..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Types</option>
                  <option>Cocktail Bar</option>
                  <option>Speakeasy</option>
                  <option>Rooftop Bar</option>
                  <option>Whiskey Bar</option>
                  <option>Nightclub</option>
                  <option>Wine Bar</option>
                </select>
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Locations</option>
                  <option>Downtown</option>
                  <option>Arts District</option>
                  <option>Financial District</option>
                  <option>Old Town</option>
                  <option>Entertainment District</option>
                  <option>Historic Quarter</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Bars Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bars.map((bar) => (
                <div key={bar.id} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow group cursor-pointer">
                  {/* Bar Image */}
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
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded font-semibold">
                        {bar.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Bar Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
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

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {bar.specialties.slice(0, 2).map((specialty) => (
                        <span 
                          key={specialty} 
                          className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {bar.type} • {bar.location}
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        View Details →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors">
                Load More Bars
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
