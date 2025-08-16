import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const product = {
  id: 1,
  name: 'Margherita Pizza',
  restaurant: 'Pizza Palace',
  price: 18.99,
  originalPrice: 22.99,
  rating: 4.8,
  reviews: 1247,
  description: 'A classic Italian pizza topped with fresh mozzarella cheese, tomato sauce, and fresh basil leaves. Made with our signature hand-tossed dough and baked in a traditional wood-fired oven.',
  ingredients: ['Fresh mozzarella', 'Tomato sauce', 'Fresh basil', 'Hand-tossed dough', 'Olive oil'],
  allergens: ['Gluten', 'Dairy'],
  nutrition: {
    calories: 285,
    protein: 12,
    carbs: 35,
    fat: 11,
    fiber: 2
  },
  images: [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop'
  ],
  sizes: [
    { name: 'Small', price: 14.99, size: '10"' },
    { name: 'Medium', price: 18.99, size: '12"', popular: true },
    { name: 'Large', price: 22.99, size: '14"' }
  ],
  extras: [
    { name: 'Extra Cheese', price: 2.99 },
    { name: 'Pepperoni', price: 3.99 },
    { name: 'Mushrooms', price: 2.49 },
    { name: 'Bell Peppers', price: 1.99 },
    { name: 'Olives', price: 2.49 },
    { name: 'Sausage', price: 3.99 }
  ],
  deliveryTime: '25-35 min',
  deliveryFee: '$2.99'
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-primary-500">Home</a></li>
              <li>/</li>
              <li><a href="/restaurants" className="hover:text-primary-500">Restaurants</a></li>
              <li>/</li>
              <li><a href="#" className="hover:text-primary-500">{product.restaurant}</a></li>
              <li>/</li>
              <li className="text-gray-900">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-24 object-cover cursor-pointer hover:opacity-75 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-4">from {product.restaurant}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="ml-1 font-semibold">{product.rating}</span>
                    <span className="ml-1 text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">🕒</span>
                    {product.deliveryTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">🚚</span>
                    {product.deliveryFee}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-primary-600">${product.price}</span>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        size.popular 
                          ? 'border-primary-500 bg-primary-50 text-primary-700' 
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold">{size.name}</div>
                      <div className="text-sm text-gray-600">{size.size}</div>
                      <div className="font-bold">${size.price}</div>
                      {size.popular && (
                        <span className="text-xs bg-primary-500 text-white px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Add Extras</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.extras.map((extra) => (
                    <label key={extra.name} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-300 cursor-pointer">
                      <input type="checkbox" className="mr-3 text-primary-500" />
                      <div className="flex-1">
                        <div className="font-medium">{extra.name}</div>
                        <div className="text-sm text-gray-600">+${extra.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-semibold">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="px-3 py-2 hover:bg-gray-100">-</button>
                    <span className="px-4 py-2 border-x border-gray-300">1</span>
                    <button className="px-3 py-2 hover:bg-gray-100">+</button>
                  </div>
                </div>
                
                <button className="w-full btn-primary text-lg py-4">
                  Add to Cart - ${product.price}
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient) => (
                      <span key={ingredient} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Allergens</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen) => (
                      <span key={allergen} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nutrition (per serving)</h4>
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{product.nutrition.calories}</div>
                      <div className="text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{product.nutrition.protein}g</div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{product.nutrition.carbs}g</div>
                      <div className="text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{product.nutrition.fat}g</div>
                      <div className="text-gray-600">Fat</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{product.nutrition.fiber}g</div>
                      <div className="text-gray-600">Fiber</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 