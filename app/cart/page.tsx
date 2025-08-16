import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const cartItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: 18.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
    size: 'Medium',
    extras: ['Extra Cheese', 'Mushrooms']
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    restaurant: 'Pizza Palace',
    price: 16.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop',
    size: 'Regular',
    extras: []
  },
  {
    id: 3,
    name: 'Caesar Salad',
    restaurant: 'Fresh Greens',
    price: 12.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
    size: 'Regular',
    extras: ['Extra Dressing']
  }
]

const deliveryFee = 2.99
const serviceFee = 1.99

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal + deliveryFee + serviceFee

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Cart</h1>
            <p className="text-gray-600">Review your items and proceed to checkout</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex gap-4">
                        {/* Item Image */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.restaurant}</p>
                              <p className="text-sm text-gray-500">Size: {item.size}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-900">${item.price}</p>
                            </div>
                          </div>

                          {/* Extras */}
                          {item.extras.length > 0 && (
                            <div className="mb-3">
                              <p className="text-sm text-gray-600">Extras:</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.extras.map((extra, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                    {extra}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button className="px-3 py-1 hover:bg-gray-100 text-gray-600">-</button>
                              <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                              <button className="px-3 py-1 hover:bg-gray-100 text-gray-600">+</button>
                            </div>
                            <button className="text-red-500 hover:text-red-700 text-sm font-medium">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Empty Cart State */}
                {cartItems.length === 0 && (
                  <div className="p-12 text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
                    <a href="/restaurants" className="btn-primary">
                      Browse Restaurants
                    </a>
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="bg-white rounded-xl shadow-sm mt-6 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Promo Code</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="btn-secondary whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                {/* Restaurant Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Restaurants</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pizza Palace</span>
                      <span className="text-gray-900">2 items</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fresh Greens</span>
                      <span className="text-gray-900">1 item</span>
                    </div>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Service Fee</span>
                    <span>${serviceFee}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Delivery Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      <span>123 Main St, New York, NY 10001</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">🕒</span>
                      <span>Estimated delivery: 25-35 min</span>
                    </div>
                  </div>
                  <button className="text-primary-600 text-sm font-medium mt-2 hover:text-primary-700">
                    Change address
                  </button>
                </div>

                {/* Checkout Button */}
                <div className="mt-6">
                  <Link 
                    href="/checkout"
                    className="w-full btn-primary text-center block py-3 text-lg font-semibold"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

                {/* Payment Methods */}
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">We accept</p>
                  <div className="flex justify-center space-x-2">
                    <span className="text-2xl">💳</span>
                    <span className="text-2xl">📱</span>
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Items */}
          {cartItems.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-32 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Recommended Item {item}</h3>
                      <p className="text-sm text-gray-600 mb-3">Delicious food description</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary-600">$12.99</span>
                        <button className="btn-primary text-sm px-3 py-1">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
} 