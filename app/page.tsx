import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedRestaurants from '../components/FeaturedRestaurants'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
} 