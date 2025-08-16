'use client'

import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Choose Restaurant',
    description: 'Browse through hundreds of restaurants and cuisines in your area',
    icon: '🏪',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Select Your Food',
    description: 'Choose from a wide variety of delicious dishes and customize your order',
    icon: '🍽️',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 3,
    title: 'Fast Delivery',
    description: 'Get your food delivered to your doorstep in 30 minutes or less',
    icon: '🚚',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 4,
    title: 'Enjoy Your Meal',
    description: 'Sit back, relax, and enjoy your delicious meal with family and friends',
    icon: '😋',
    color: 'from-purple-400 to-purple-600'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ordering food has never been easier. Follow these simple steps to get your favorite meals delivered
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {step.id}
              </div>

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Order?
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ByFoods for their daily meals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Start Ordering
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 