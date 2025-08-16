'use client'

import React from 'react'

const categories = [
  {
    id: 1,
    name: 'Pizza',
    icon: '🍕',
    color: 'from-red-400 to-red-600',
    count: 45
  },
  {
    id: 2,
    name: 'Burgers',
    icon: '🍔',
    color: 'from-yellow-400 to-orange-500',
    count: 32
  },
  {
    id: 3,
    name: 'Sushi',
    icon: '🍣',
    color: 'from-blue-400 to-purple-500',
    count: 28
  },
  {
    id: 4,
    name: 'Salads',
    icon: '🥗',
    color: 'from-green-400 to-emerald-500',
    count: 23
  },
  {
    id: 5,
    name: 'Desserts',
    icon: '🍰',
    color: 'from-pink-400 to-rose-500',
    count: 19
  },
  {
    id: 6,
    name: 'Drinks',
    icon: '🥤',
    color: 'from-cyan-400 to-blue-500',
    count: 41
  },
  {
    id: 7,
    name: 'Pasta',
    icon: '🍝',
    color: 'from-amber-400 to-yellow-500',
    count: 36
  },
  {
    id: 8,
    name: 'Seafood',
    icon: '🦐',
    color: 'from-indigo-400 to-purple-500',
    count: 24
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your favorite cuisines and find the perfect meal for any occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 text-center">
                  {category.count} restaurants
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
} 