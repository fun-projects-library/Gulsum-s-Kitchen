import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import MealDetail from './pages/MealDetail'
import About from './pages/About'
import Info from './pages/Info'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"            element={<Home />}       />
        <Route path="/meals/:id"   element={<MealDetail />} />
        <Route path="/about"       element={<About />}      />
        <Route path="/info"        element={<Info />}       />
        {/* Catch-all → Home */}
        <Route path="*"            element={<Home />}       />
      </Routes>
      <Footer />
    </>
  )
}
