'use client'

import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const events = [
  {
    id: 1,
    name: 'Golden Hour Cocktail Masterclass',
    type: 'Workshop',
    date: '2024-02-15',
    time: '7:00 PM',
    location: 'The Golden Hour Bar',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
    price: '$75',
    capacity: '20 people',
    description: 'Learn to craft premium cocktails with expert mixologists',
    category: 'Education'
  },
  {
    id: 2,
    name: 'Whiskey Tasting Experience',
    type: 'Tasting',
    date: '2024-02-18',
    time: '6:30 PM',
    location: 'Golden Oak Distillery',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    price: '$120',
    capacity: '15 people',
    description: 'Exclusive tasting of rare and aged whiskeys',
    category: 'Tasting'
  },
  {
    id: 3,
    name: 'Midnight Jazz Night',
    type: 'Live Music',
    date: '2024-02-20',
    time: '9:00 PM',
    location: 'Midnight Lounge',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&h=300&fit=crop',
    price: '$45',
    capacity: '50 people',
    description: 'Intimate jazz performance in a speakeasy setting',
    category: 'Entertainment'
  },
  {
    id: 4,
    name: 'Rooftop Sunset Party',
    type: 'Social Event',
    date: '2024-02-22',
    time: '5:00 PM',
    location: 'Sky Bar',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&h=300&fit=crop',
    price: '$60',
    capacity: '100 people',
    description: 'Celebrate sunset with premium drinks and city views',
    category: 'Social'
  },
  {
    id: 5,
    name: 'Craft Spirits Festival',
    type: 'Festival',
    date: '2024-02-25',
    time: '2:00 PM',
    location: 'Industrial District',
    image: 'https://images.unsplash.com/photo-1571266028243-e68f96d85b9a?w=400&h=300&fit=crop',
    price: '$85',
    capacity: '200 people',
    description: 'Sample craft spirits from local distilleries',
    category: 'Festival'
  },
  {
    id: 6,
    name: 'Wine & Cheese Pairing',
    type: 'Tasting',
    date: '2024-02-28',
    time: '7:30 PM',
    location: 'The Wine Cellar',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
    price: '$95',
    capacity: '25 people',
    description: 'Expert-led wine and cheese pairing experience',
    category: 'Tasting'
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Premium Events
              </h1>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Join exclusive tastings, masterclasses, and social events
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
                  placeholder="Search events, venues, or categories..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Categories</option>
                  <option>Education</option>
                  <option>Tasting</option>
                  <option>Entertainment</option>
                  <option>Social</option>
                  <option>Festival</option>
                </select>
                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500">
                  <option>All Dates</option>
                  <option>This Week</option>
                  <option>Next Week</option>
                  <option>This Month</option>
                  <option>Next Month</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow group cursor-pointer">
                  {/* Event Image */}
                  <div className="relative h-48">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-full p-2">
                        <span className="text-yellow-500 text-sm font-bold">💰</span>
                        <span className="text-white text-sm font-semibold ml-1">
                          {event.price}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {event.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-400 mb-2">{event.type}</p>
                    <p className="text-gray-500 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-2">📅</span>
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-2">👥</span>
                        {event.capacity}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-yellow-400 font-bold text-lg">
                        {event.price}
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        Book Now →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors">
                Load More Events
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
