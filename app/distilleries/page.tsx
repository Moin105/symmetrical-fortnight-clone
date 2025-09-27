'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const distilleries = [
  {
    id: 1,
    name: 'Golden Oak Distillery',
    type: 'Whiskey Distillery',
    rating: 4.9,
    reviews: 1247,
    location: 'Highland Valley',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$$',
    specialties: ['Single Malt', 'Aged Whiskey', 'Tasting Tours'],
    established: '1892'
  },
  {
    id: 2,
    name: 'Midnight Spirits Co.',
    type: 'Craft Distillery',
    rating: 4.8,
    reviews: 892,
    location: 'Industrial District',
    image: 'https://images.unsplash.com/photo-1571266028243-e68f96d85b9a?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$',
    specialties: ['Gin', 'Vodka', 'Small Batch'],
    established: '2015'
  },
  {
    id: 3,
    name: 'Heritage Rum Works',
    type: 'Rum Distillery',
    rating: 4.7,
    reviews: 567,
    location: 'Coastal Region',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$',
    specialties: ['Aged Rum', 'Spiced Rum', 'Cocktail Classes'],
    established: '1923'
  },
  {
    id: 4,
    name: 'Artisan Spirits',
    type: 'Boutique Distillery',
    rating: 4.6,
    reviews: 423,
    location: 'Mountain View',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$',
    specialties: ['Tequila', 'Mezcal', 'Private Tastings'],
    established: '2008'
  },
  {
    id: 5,
    name: 'Urban Brewery & Distillery',
    type: 'Hybrid Facility',
    rating: 4.5,
    reviews: 789,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&h=300&fit=crop',
    isOpen: false,
    priceRange: '$$',
    specialties: ['Craft Beer', 'Whiskey', 'Brewery Tours'],
    established: '2010'
  },
  {
    id: 6,
    name: 'Vintage Brandy House',
    type: 'Brandy Distillery',
    rating: 4.4,
    reviews: 634,
    location: 'Wine Country',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&h=300&fit=crop',
    isOpen: true,
    priceRange: '$$$$',
    specialties: ['Cognac', 'Armagnac', 'Wine Pairing'],
    established: '1876'
  }
]

export default function DistilleriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Premium Distilleries
              </h1>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Explore the finest distilleries and craft spirit producers
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
                  placeholder="Search distilleries, spirits, or locations..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Types</option>
                  <option>Whiskey Distillery</option>
                  <option>Craft Distillery</option>
                  <option>Rum Distillery</option>
                  <option>Boutique Distillery</option>
                  <option>Hybrid Facility</option>
                  <option>Brandy Distillery</option>
                </select>
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Locations</option>
                  <option>Highland Valley</option>
                  <option>Industrial District</option>
                  <option>Coastal Region</option>
                  <option>Mountain View</option>
                  <option>Downtown</option>
                  <option>Wine Country</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Distilleries Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {distilleries.map((distillery) => (
                <div key={distillery.id} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow group cursor-pointer">
                  {/* Distillery Image */}
                  <div className="relative h-48">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${distillery.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        distillery.isOpen 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {distillery.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-full p-2">
                        <span className="text-yellow-500 text-sm font-bold">★</span>
                        <span className="text-white text-sm font-semibold ml-1">
                          {distillery.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded font-semibold">
                        Est. {distillery.established}
                      </span>
                    </div>
                  </div>

                  {/* Distillery Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {distillery.name}
                    </h3>
                    <p className="text-gray-400 mb-2">{distillery.type}</p>
                    <p className="text-gray-500 text-sm mb-4">{distillery.location}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <span className="mr-1">👥</span>
                        {distillery.reviews} reviews
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">📍</span>
                        {distillery.location}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {distillery.specialties.slice(0, 2).map((specialty) => (
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
                        {distillery.type} • Est. {distillery.established}
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
                Load More Distilleries
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
