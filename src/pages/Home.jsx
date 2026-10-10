import React from 'react'
import { Link } from 'react-router-dom'
import { meals } from '../data/meals'
import MealCard from '../components/MealCard'
import './Home.css'

export default function Home() {
  const mains    = meals.filter((m) => m.category === 'Main Course')
  const sides    = meals.filter((m) => m.category === 'Side Dish' || m.category === 'Appetizer / Snack')
  const desserts = meals.filter((m) => m.category === 'Dessert')

  return (
    <main className="home page-enter">
      {/* ── Hero ─────────────────────────────── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="hero__eyebrow">🌿 Authentic · Homemade · Turkish</span>
            <h1 className="hero__title">
              A taste of Turkey,<br />
              <span>made with love.</span>
            </h1>
            <p className="hero__subtitle">
              Fresh, home-cooked Turkish meals prepared by Gülsüm and delivered
              right to your door. Every dish is made from scratch using traditional
              family recipes and the finest ingredients.
            </p>
            <div className="hero__actions">
              <a href="#menu" className="btn btn--primary">
                Browse the Menu ↓
              </a>
              <Link to="/info" className="btn btn--ghost">
                Delivery & Info
              </Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__badge">
              <span className="hero__badge-icon">🫙</span>
              <span>Est. in your kitchen<br />with love</span>
            </div>
            <div className="hero__pattern">
              <span>🌿</span><span>🍋</span><span>🌶️</span>
              <span>🧅</span><span>🫒</span><span>🍅</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights strip ─────────────────── */}
      <section className="highlights">
        <div className="container highlights__grid">
          {[
            { icon: '🍳', title: 'Made from Scratch', desc: 'Every dish prepared fresh to order' },
            { icon: '🌿', title: 'Authentic Recipes',  desc: 'Traditional Turkish family recipes'  },
            { icon: '🚗', title: 'Home Delivery',      desc: 'Delivered up to 30 miles away'       },
            { icon: '💬', title: 'Order via WhatsApp', desc: 'Easy ordering, personal service'     },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="highlight-item">
              <span className="highlight-item__icon">{icon}</span>
              <strong>{title}</strong>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Menu ─────────────────────────────── */}
      <section className="menu-section" id="menu">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Main Courses</h2>
            <p className="section-sub">Hearty, slow-cooked dishes that feed 4–6 people</p>
          </div>
          <div className="meal-grid">
            {mains.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>

          {sides.length > 0 && (
            <>
              <div className="section-header" style={{ marginTop: '3rem' }}>
                <h2 className="section-title">Sides & Appetizers</h2>
                <p className="section-sub">Perfect accompaniments to round out your meal</p>
              </div>
              <div className="meal-grid meal-grid--sides">
                {sides.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </>
          )}

          {desserts.length > 0 && (
            <>
              <div className="section-header" style={{ marginTop: '3rem' }}>
                <h2 className="section-title">Desserts 🍮</h2>
                <p className="section-sub">Traditional Turkish sweets to end your meal on a high note</p>
              </div>
              <div className="meal-grid meal-grid--sides">
                {desserts.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to order?</h2>
            <p>Get in touch on WhatsApp to place your order. Minimum 48h notice appreciated.</p>
          </div>
          <a
            href="https://wa.me/15555555555"
            className="btn btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
