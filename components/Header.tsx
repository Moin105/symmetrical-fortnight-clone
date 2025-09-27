'use client'

import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-500">
              ByFoods
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/bars" className="text-white hover:text-primary-500 transition-colors">
              Bars
            </Link>
            <Link href="/distilleries" className="text-white hover:text-primary-500 transition-colors">
              Distilleries
            </Link>
            <Link href="/events" className="text-white hover:text-primary-500 transition-colors">
              Events
            </Link>
            <Link href="/blog" className="text-white hover:text-primary-500 transition-colors">
              Blog
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search bars, distilleries, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden sm:flex items-center text-gray-400">
              <MapPin className="h-5 w-5 mr-1" />
              <span className="text-sm">New York</span>
            </div>

            {/* User */}
            <button className="hidden sm:flex items-center p-2 text-gray-400 hover:text-primary-500 transition-colors">
              <User className="h-6 w-6" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-primary-500 transition-colors"
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
              placeholder="Search bars, distilleries, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-white hover:text-primary-500 transition-colors">
                Home
              </Link>
              <Link href="/bars" className="text-white hover:text-primary-500 transition-colors">
                Bars
              </Link>
              <Link href="/distilleries" className="text-white hover:text-primary-500 transition-colors">
                Distilleries
              </Link>
              <Link href="/events" className="text-white hover:text-primary-500 transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-white hover:text-primary-500 transition-colors">
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 