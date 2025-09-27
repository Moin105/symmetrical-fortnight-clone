'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, Clock, Phone, Share2, Heart, Calendar, Award, Users, Factory } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const distilleryDetails = {
  id: 1,
  name: 'Golden Oak Distillery',
  type: 'Whiskey Distillery',
  rating: 4.9,
  reviews: 1247,
  location: 'Highland Valley',
  address: '456 Oak Ridge Road, Highland Valley, HV 12345',
  phone: '+1 (555) 987-6543',
  website: 'www.goldenoakdistillery.com',
  established: '1892',
  founded: '1892',
  founder: 'William Golden Oak',
  hours: {
    monday: '10:00 AM - 6:00 PM',
    tuesday: '10:00 AM - 6:00 PM',
    wednesday: '10:00 AM - 6:00 PM',
    thursday: '10:00 AM - 6:00 PM',
    friday: '10:00 AM - 8:00 PM',
    saturday: '9:00 AM - 8:00 PM',
    sunday: '12:00 PM - 5:00 PM'
  },
  priceRange: '$$$$',
  isOpen: true,
  specialties: ['Single Malt Whiskey', 'Aged Whiskey', 'Tasting Tours', 'Private Events'],
  awards: [
    'World Whiskey Awards 2023 - Gold Medal',
    'International Spirits Challenge 2022 - Best Single Malt',
    'Whisky Magazine Awards 2021 - Distillery of the Year'
  ],
  images: [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571266028243-e68f96d85b9a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop'
  ],
  description: 'Golden Oak Distillery has been crafting exceptional single malt whiskeys for over 130 years. Our traditional methods, combined with the finest ingredients and the perfect Highland climate, create whiskeys of unparalleled quality and character. Each bottle tells a story of heritage, craftsmanship, and passion.',
  products: {
    whiskeys: [
      { name: 'Golden Oak 12 Year', price: '$85', age: '12 years', description: 'Smooth and mellow with notes of honey and oak' },
      { name: 'Golden Oak 18 Year', price: '$180', age: '18 years', description: 'Rich and complex with deep caramel and spice notes' },
      { name: 'Golden Oak 25 Year', price: '$450', age: '25 years', description: 'Rare and exceptional with layers of flavor and complexity' },
      { name: 'Golden Oak Cask Strength', price: '$120', age: 'No age statement', description: 'Bottled at natural cask strength for maximum flavor' }
    ],
    tours: [
      { name: 'Standard Tour', price: '$25', duration: '1 hour', description: 'Guided tour of the distillery with tasting of 3 whiskeys' },
      { name: 'Premium Tour', price: '$50', duration: '2 hours', description: 'Extended tour with premium tastings and distillery history' },
      { name: 'Private Tour', price: '$150', duration: '3 hours', description: 'Exclusive private tour with master distiller' }
    ]
  }
}

const reviews = [
  {
    id: 1,
    name: 'James MacLeod',
    rating: 5,
    date: '2024-01-15',
    comment: 'Absolutely incredible distillery tour! The 18-year single malt is exceptional. The history and craftsmanship here is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    rating: 5,
    date: '2024-01-12',
    comment: 'The premium tour was worth every penny. Learning about the distillation process from the master distiller was fascinating.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Robert Wilson',
    rating: 4,
    date: '2024-01-10',
    comment: 'Beautiful location and excellent whiskeys. The tasting room has a great atmosphere and knowledgeable staff.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  }
]

export default function DistilleryDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [isFavorite, setIsFavorite] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'tours', label: 'Tours' },
    { id: 'reviews', label: 'Reviews' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${distilleryDetails.images[selectedImage]})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{distilleryDetails.name}</h1>
                  <p className="text-xl text-gray-300">{distilleryDetails.type} • Est. {distilleryDetails.established}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-3 rounded-full transition-colors ${
                      isFavorite ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {distilleryDetails.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-primary-500' : 'hover:opacity-80'
                  }`}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2">
                {/* Tabs */}
                <div className="mb-8">
                  <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-500 text-black'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About {distilleryDetails.name}</h2>
                      <p className="text-gray-300 leading-relaxed mb-6">{distilleryDetails.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">Founded</h3>
                          <p className="text-gray-300">{distilleryDetails.founded}</p>
                        </div>
                        <div className="bg-gray-900 p-4 rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">Founder</h3>
                          <p className="text-gray-300">{distilleryDetails.founder}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {distilleryDetails.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Awards & Recognition</h3>
                      <div className="space-y-3">
                        {distilleryDetails.awards.map((award, index) => (
                          <div key={index} className="flex items-center space-x-3 bg-gray-900 p-3 rounded-lg">
                            <Award className="w-5 h-5 text-primary-500" />
                            <span className="text-gray-300">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Our Whiskeys</h2>
                      <div className="space-y-4">
                        {distilleryDetails.products.whiskeys.map((whiskey, index) => (
                          <div key={index} className="bg-gray-900 p-6 rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-xl">{whiskey.name}</h3>
                                <p className="text-primary-400 text-sm">{whiskey.age}</p>
                              </div>
                              <span className="text-primary-500 font-bold text-xl">{whiskey.price}</span>
                            </div>
                            <p className="text-gray-300">{whiskey.description}</p>
                            <button className="mt-4 bg-primary-500 hover:bg-primary-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                              Add to Cart
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'tours' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Distillery Tours</h2>
                      <div className="space-y-6">
                        {distilleryDetails.products.tours.map((tour, index) => (
                          <div key={index} className="bg-gray-900 p-6 rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-xl">{tour.name}</h3>
                                <p className="text-gray-400">{tour.duration}</p>
                              </div>
                              <span className="text-primary-500 font-bold text-xl">{tour.price}</span>
                            </div>
                            <p className="text-gray-300 mb-4">{tour.description}</p>
                            <button className="bg-primary-500 hover:bg-primary-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                              Book Tour
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Reviews</h2>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-lg font-semibold">{distilleryDetails.rating}</span>
                        <span className="text-gray-400">({distilleryDetails.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-900 p-6 rounded-lg">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{review.name}</h3>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-600'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-300 mb-2">{review.comment}</p>
                              <p className="text-gray-500 text-sm">{review.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      distilleryDetails.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {distilleryDetails.isOpen ? 'Open Now' : 'Closed'}
                    </span>
                    <span className="text-primary-500 font-bold">{distilleryDetails.priceRange}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{distilleryDetails.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{distilleryDetails.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Factory className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">Est. {distilleryDetails.established}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors">
                    Book Tour
                  </button>
                </div>

                {/* Hours */}
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(distilleryDetails.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{day}</span>
                        <span className="text-gray-300">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                      Share Location
                    </button>
                    <button className="w-full bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                      Add to Favorites
                    </button>
                    <button className="w-full bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                      Write Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
