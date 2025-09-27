'use client'

import React from 'react'
import Link from 'next/link'

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
    specialties: ['Single Malt', 'Aged Whiskey'],
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
    specialties: ['Gin', 'Vodka'],
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
    specialties: ['Aged Rum', 'Spiced Rum'],
    established: '1923'
  }
]

export default function FeaturedDistilleries() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Premium Distilleries
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the finest craft spirit producers and their exceptional offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {distilleries.map((distillery) => (
            <Link 
              key={distillery.id} 
              href={`/distilleries`}
              className="group cursor-pointer block"
            >
              <div className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow">
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

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
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

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {distillery.type} • Est. {distillery.established}
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
            href="/distilleries" 
            className="btn-secondary text-lg px-8 py-3"
          >
            View All Distilleries
          </Link>
        </div>
      </div>
    </section>
  )
}
