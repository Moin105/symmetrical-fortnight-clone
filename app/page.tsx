import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import FeaturedBars from '../components/FeaturedBars'
import FeaturedDistilleries from '../components/FeaturedDistilleries'
import FeaturedEvents from '../components/FeaturedEvents'
import FeaturedBlogs from '../components/FeaturedBlogs'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Banner />
        <FeaturedBars />
        <FeaturedDistilleries />
        <FeaturedEvents />
        <FeaturedBlogs />
      </main>
      <Footer />
    </div>
  )
} 