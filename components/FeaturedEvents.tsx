'use client'

import React from 'react'
import Link from 'next/link'

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
  }
]

export default function FeaturedEvents() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Exclusive Events
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join premium tastings, masterclasses, and social gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link 
              key={event.id} 
              href={`/events`}
              className="group cursor-pointer block"
            >
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/20 transition-shadow">
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

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
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
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-yellow-500 font-bold text-lg">
                      {event.price}
                    </div>
                    <div className="text-primary-500 font-semibold">
                      Book Now →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/events" 
            className="btn-secondary text-lg px-8 py-3"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}
