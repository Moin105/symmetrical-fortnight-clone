'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Star, MapPin, Clock, Phone, Share2, Heart, Calendar, Award, Users, Factory, X } from 'lucide-react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import LoadingSpinner from '../../../components/LoadingSpinner'
import { apiService } from '../../../lib/api'
import { Distillery } from '../../../lib/types'

const staticDistilleryDetails = {
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

export default function DistilleryDetailPage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id as string
  const [distillery, setDistillery] = useState<Distillery | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')
  const [isFavorite, setIsFavorite] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedTour, setSelectedTour] = useState<any>(null)
  const [bookingForm, setBookingForm] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    bookingDate: '',
    numberOfGuests: 2,
    specialRequests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDistillery = async () => {
      try {
        setLoading(true)
        const response = await apiService.getDistillery(Number(id))
        setDistillery(response.data)
      } catch (error) {
        console.error('Error fetching distillery:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDistillery()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!distillery) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="bg-black py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Distillery Not Found</h1>
            <button onClick={() => router.push('/distilleries')} className="text-primary-500 hover:text-primary-600">
              ← Back to Distilleries
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Use distillery data from API, fallback to static data for missing fields
  const distilleryDetails = {
    ...staticDistilleryDetails,
    ...distillery,
    images: distillery.image ? [distillery.image] : staticDistilleryDetails.images,
    address: distillery.address || staticDistilleryDetails.address,
    phone: distillery.phone || staticDistilleryDetails.phone,
    website: distillery.website || staticDistilleryDetails.website,
    hours: distillery.operatingHours || staticDistilleryDetails.hours,
    description: distillery.description || staticDistilleryDetails.description,
    products: {
      ...staticDistilleryDetails.products,
      tours: staticDistilleryDetails.products.tours || [],
    },
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Products' },
    { id: 'tours', label: 'Tours' },
    { id: 'reviews', label: 'Reviews' }
  ]

  const handleTourBooking = (tour: typeof distilleryDetails.products.tours[0]) => {
    setSelectedTour(tour)
    setShowBookingModal(true)
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTour) return

    setError('')
    setIsSubmitting(true)

    try {
      const price = parseInt(selectedTour.price.replace('$', ''))
      const orderData = {
        orderType: 'distillery_tour',
        distilleryId: parseInt(id),
        customerName: bookingForm.customerName,
        customerEmail: bookingForm.customerEmail,
        customerPhone: bookingForm.customerPhone,
        numberOfGuests: bookingForm.numberOfGuests,
        totalAmount: price * bookingForm.numberOfGuests,
        bookingDate: bookingForm.bookingDate,
        specialRequests: bookingForm.specialRequests || `Tour: ${selectedTour.name}`,
        paymentMethod: 'online',
        isPaid: false,
      }

      const response = await apiService.createOrder(orderData)
      router.push(`/orders/${response.data.id}`)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create booking. Please try again.')
      setIsSubmitting(false)
    }
  }

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
                      {distilleryDetails.products.tours && distilleryDetails.products.tours.length > 0 ? (
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
                              <button 
                                onClick={() => handleTourBooking(tour)}
                                className="bg-primary-500 hover:bg-primary-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                              >
                                Book Tour
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gray-900 p-6 rounded-lg text-center">
                          <p className="text-gray-400 mb-4">No tours available at this time.</p>
                          <button 
                            onClick={() => {
                              const defaultTour = {
                                name: 'Standard Tour',
                                price: '$25',
                                duration: '1 hour',
                                description: 'Guided tour of the distillery'
                              }
                              handleTourBooking(defaultTour)
                            }}
                            className="bg-primary-500 hover:bg-primary-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                          >
                            Book Standard Tour
                          </button>
                        </div>
                      )}
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

                  {distilleryDetails.products.tours && distilleryDetails.products.tours.length > 0 ? (
                    <button 
                      onClick={() => {
                        setSelectedTour(distilleryDetails.products.tours[0])
                        setShowBookingModal(true)
                      }}
                      className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      Book Tour
                    </button>
                  ) : (
                    <button 
                      onClick={() => {
                        // Create a default tour if none exists
                        const defaultTour = {
                          name: 'Standard Tour',
                          price: '$25',
                          duration: '1 hour',
                          description: 'Guided tour of the distillery'
                        }
                        setSelectedTour(defaultTour)
                        setShowBookingModal(true)
                      }}
                      className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      Book Tour
                    </button>
                  )}
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

      {/* Booking Modal */}
      {showBookingModal && selectedTour && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => {
                setShowBookingModal(false)
                setSelectedTour(null)
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">Book Tour</h2>
            <p className="text-gray-400 mb-2">{selectedTour.name}</p>
            <p className="text-primary-500 font-semibold mb-6">{selectedTour.price} per person</p>

            <form onSubmit={handleBooking} className="space-y-4">
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={bookingForm.customerName}
                  onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={bookingForm.customerEmail}
                  onChange={(e) => setBookingForm({ ...bookingForm, customerEmail: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={bookingForm.customerPhone}
                  onChange={(e) => setBookingForm({ ...bookingForm, customerPhone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date *</label>
                <input
                  type="date"
                  required
                  value={bookingForm.bookingDate}
                  onChange={(e) => setBookingForm({ ...bookingForm, bookingDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                <input
                  type="number"
                  required
                  min="1"
                  max="20"
                  value={bookingForm.numberOfGuests}
                  onChange={(e) => setBookingForm({ ...bookingForm, numberOfGuests: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests</label>
                <textarea
                  value={bookingForm.specialRequests}
                  onChange={(e) => setBookingForm({ ...bookingForm, specialRequests: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Total:</span>
                  <span className="text-2xl font-bold text-primary-500">
                    ${parseInt(selectedTour.price.replace('$', '')) * bookingForm.numberOfGuests}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowBookingModal(false)
                    setSelectedTour(null)
                  }}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
