'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, CreditCard, Truck, CheckCircle, Star } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LoadingSpinner, { PageLoader } from '../../components/LoadingSpinner'

const orderSteps = [
  {
    id: 1,
    title: 'Choose Restaurant',
    description: 'Browse and select your favorite restaurant',
    icon: '🍽️',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Select Menu Items',
    description: 'Add delicious items to your cart',
    icon: '📋',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Review & Checkout',
    description: 'Confirm your order and payment',
    icon: '💳',
    status: 'active'
  },
  {
    id: 4,
    title: 'Order Confirmation',
    description: 'Track your order delivery',
    icon: '🚚',
    status: 'pending'
  }
]

const popularRestaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.8,
    reviews: 1247,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
    isOpen: true,
    priceRange: '$$'
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
    priceRange: '$$$'
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
    priceRange: '$'
  }
]

const quickActions = [
  {
    title: 'Quick Order',
    description: 'Reorder your favorite meals',
    icon: '⚡',
    color: 'bg-gradient-to-r from-primary-500 to-primary-600'
  },
  {
    title: 'Group Order',
    description: 'Order together with friends',
    icon: '👥',
    color: 'bg-gradient-to-r from-secondary-500 to-secondary-600'
  },
  {
    title: 'Schedule Order',
    description: 'Plan your meal in advance',
    icon: '📅',
    color: 'bg-gradient-to-r from-accent-500 to-accent-600'
  },
  {
    title: 'Catering',
    description: 'Large orders for events',
    icon: '🎉',
    color: 'bg-gradient-to-r from-purple-500 to-purple-600'
  }
]

export default function OrderPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleQuickAction = (action: string) => {
    setIsLoading(true)
    setSelectedAction(action)
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      // Navigate based on action
      if (action === 'Quick Order') {
        window.location.href = '/restaurants'
      } else if (action === 'Group Order') {
        window.location.href = '/restaurants'
      } else if (action === 'Schedule Order') {
        window.location.href = '/restaurants'
      } else if (action === 'Catering') {
        window.location.href = '/collections'
      }
    }, 2000)
  }

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Order Delicious Food
              </h1>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Choose from hundreds of restaurants and get your favorite meals delivered to your doorstep
              </p>
              
              {/* Order Progress */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {orderSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative p-4 rounded-lg ${
                        step.status === 'completed' 
                          ? 'bg-green-500/20 border border-green-400'
                          : step.status === 'active'
                          ? 'bg-white/20 border border-white'
                          : 'bg-white/10 border border-white/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`text-2xl ${step.status === 'completed' ? 'text-green-300' : 'text-white'}`}>
                          {step.status === 'completed' ? '✅' : step.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{step.title}</h3>
                          <p className="text-xs text-primary-200">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How would you like to order?
              </h2>
              <p className="text-lg text-gray-600">
                Choose the best option for your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleQuickAction(action.title)}
                >
                  <div className={`${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                    <div className="text-4xl mb-4">{action.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-white/90">{action.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Restaurants */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Restaurants
              </h2>
              <p className="text-lg text-gray-600">
                Start with these customer favorites
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRestaurants.map((restaurant, index) => (
                <motion.div
                  key={restaurant.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => window.location.href = `/restaurant/${restaurant.id}/menu`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${restaurant.image})` }}
                      />
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
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-gray-900 text-sm font-semibold ml-1">
                            {restaurant.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {restaurant.deliveryTime}
                        </div>
                        <span className="font-semibold">{restaurant.priceRange}</span>
                      </div>

                      <button className="w-full btn-primary">
                        Order Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <button 
                onClick={() => window.location.href = '/restaurants'}
                className="btn-secondary text-lg px-8 py-3"
              >
                View All Restaurants
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose ByFoods?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Truck className="w-8 h-8" />,
                  title: 'Fast Delivery',
                  description: 'Get your food delivered in 30 minutes or less'
                },
                {
                  icon: <CreditCard className="w-8 h-8" />,
                  title: 'Secure Payment',
                  description: 'Multiple payment options with secure transactions'
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: 'Quality Guaranteed',
                  description: 'Fresh ingredients and quality food every time'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="text-primary-600 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 