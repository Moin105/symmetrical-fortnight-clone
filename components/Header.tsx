'use client'

import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              ByFoods
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-primary-500 transition-colors">
              Order Now
            </Link>
            <Link href="/restaurants" className="text-gray-700 hover:text-primary-500 transition-colors">
              Restaurants
            </Link>
            {/* <Link href="/product/1" className="text-gray-700 hover:text-primary-500 transition-colors">
              Menu Items
            </Link> */}
            <Link href="/collections" className="text-gray-700 hover:text-primary-500 transition-colors">
              Collections
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-500 transition-colors">
              Blog
            </Link>
            {/* <Link href="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
              About
            </Link> */}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden sm:flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-1" />
              <span className="text-sm">New York</span>
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* User */}
            <button className="hidden sm:flex items-center p-2 text-gray-600 hover:text-primary-500 transition-colors">
              <User className="h-6 w-6" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for restaurants, cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
                Home
              </Link>
              <Link href="/order" className="text-gray-700 hover:text-primary-500 transition-colors">
                Order Now
              </Link>
              <Link href="/restaurants" className="text-gray-700 hover:text-primary-500 transition-colors">
                Restaurants
              </Link>
              <Link href="/product/1" className="text-gray-700 hover:text-primary-500 transition-colors">
                Menu Items
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-primary-500 transition-colors">
                Collections
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-500 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-primary-500 transition-colors">
                Cart
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 