import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const collections = [
  {
    id: 1,
    name: 'Weekend Specials',
    description: 'Exclusive deals and special menus for your weekend cravings',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
    itemCount: 24,
    discount: '20% OFF',
    featured: true
  },
  {
    id: 2,
    name: 'Healthy Choices',
    description: 'Nutritious and delicious meals for health-conscious foodies',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    itemCount: 18,
    discount: '15% OFF',
    featured: false
  },
  {
    id: 3,
    name: 'Quick Bites',
    description: 'Fast and tasty options for when you\'re on the go',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
    itemCount: 32,
    discount: '10% OFF',
    featured: false
  },
  {
    id: 4,
    name: 'Family Favorites',
    description: 'Perfect meals for the whole family to enjoy together',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    itemCount: 28,
    discount: '25% OFF',
    featured: false
  },
  {
    id: 5,
    name: 'Sweet Treats',
    description: 'Indulge in delicious desserts and sweet delights',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
    itemCount: 15,
    discount: '12% OFF',
    featured: false
  },
  {
    id: 6,
    name: 'International Cuisine',
    description: 'Explore flavors from around the world',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
    itemCount: 42,
    discount: '18% OFF',
    featured: false
  }
]

const featuredItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    restaurant: 'Pizza Palace',
    price: 18.99,
    originalPrice: 22.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: 'Caesar Salad',
    restaurant: 'Fresh Greens',
    price: 12.99,
    originalPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop',
    rating: 4.7,
    reviews: 634
  },
  {
    id: 3,
    name: 'Sushi Roll Combo',
    restaurant: 'Sushi Master',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop',
    rating: 4.9,
    reviews: 1563
  },
  {
    id: 4,
    name: 'Burger Deluxe',
    restaurant: 'Burger House',
    price: 16.99,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
    rating: 4.6,
    reviews: 892
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Food Collections
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Discover curated collections of delicious meals, special offers, and exclusive deals
              </p>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-96">
                <img 
                  src={collections[0].image} 
                  alt={collections[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl mx-auto px-6 text-white">
                    <div className="mb-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {collections[0].discount}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {collections[0].name}
                    </h2>
                    <p className="text-lg text-gray-200 mb-6">
                      {collections[0].description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-300">
                        {collections[0].itemCount} items available
                      </span>
                      <button className="btn-primary">
                        Explore Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Collections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our carefully curated collections to find the perfect meal for any occasion
              </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.filter(c => !c.featured).map((collection) => (
                <Link 
                  key={collection.id} 
                  href={`/collections/${collection.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${collection.image})` }}
                      />
                      {collection.discount && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {collection.discount}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {collection.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {collection.itemCount} items
                        </span>
                        <span className="text-primary-600 font-semibold">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Items
              </h2>
              <p className="text-lg text-gray-600">
                Handpicked dishes from our best restaurants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/product/${item.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <span className="text-yellow-500 text-sm font-bold">★</span>
                          <span className="text-gray-900 text-sm font-semibold ml-1">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.restaurant}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-primary-600">${item.price}</span>
                          <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                        </div>
                        <span className="text-primary-600 font-semibold">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Limited Time Offers
                </h2>
                <p className="text-lg text-accent-100 mb-8 max-w-2xl mx-auto">
                  Don't miss out on these exclusive deals and discounts. Order now and save big!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-accent-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                    View All Offers
                  </button>
                  <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-accent-600 transition-colors">
                    Download App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive offers and new collection updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 