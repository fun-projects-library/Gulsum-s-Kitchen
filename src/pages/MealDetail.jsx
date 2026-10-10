import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getMealById, meals } from '../data/meals'
import MealCard from '../components/MealCard'
import './MealDetail.css'

export default function MealDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const meal = getMealById(id)
  const [imgError, setImgError] = useState(false)

  if (!meal) {
    return (
      <main className="not-found page-enter">
        <div className="container">
          <h1>Meal not found 🍽️</h1>
          <p>We couldn't find that dish. Head back to the menu!</p>
          <Link to="/" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
            ← Back to Menu
          </Link>
        </div>
      </main>
    )
  }

  // Related meals (same category, excluding current)
  const related = meals
    .filter((m) => m.id !== meal.id && m.category === meal.category)
    .slice(0, 3)

  return (
    <main className="meal-detail page-enter">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Menu</Link>
          <span aria-hidden="true">›</span>
          <span>{meal.name}</span>
        </nav>

        {/* Back button (mobile) */}
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          ← Back
        </button>

        {/* Main layout */}
        <div className="meal-detail__layout">
          {/* Image */}
          <div className="meal-detail__img-wrap">
            {!imgError ? (
              <img
                src={meal.image}
                alt={meal.name}
                className="meal-detail__img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="meal-detail__img-placeholder" aria-hidden="true">🍽️</div>
            )}
          </div>

          {/* Info panel */}
          <div className="meal-detail__info">
            <span className="meal-detail__category">{meal.category}</span>
            <h1 className="meal-detail__name">{meal.name}</h1>
            <p className="meal-detail__name-en">{meal.nameEn}</p>

            <div className="meal-detail__meta">
              <div className="meta-chip">
                <span>💵</span>
                <div>
                  <strong>${meal.price}</strong>
                  <small>per order</small>
                </div>
              </div>
              <div className="meta-chip">
                <span>👥</span>
                <div>
                  <strong>{meal.serves}</strong>
                  <small>serving size</small>
                </div>
              </div>
            </div>

            <p className="meal-detail__description">{meal.description}</p>

            {/* Ingredients */}
            <div className="meal-detail__ingredients">
              <h3>Key Ingredients</h3>
              <ul>
                {meal.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            {meal.tags.length > 0 && (
              <div className="meal-detail__tags">
                {meal.tags.map((tag) => (
                  <span key={tag} className="detail-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Order CTA */}
            <div className="meal-detail__cta-box">
              <p>
                <strong>Interested in this dish?</strong><br />
                Message Gülsüm on WhatsApp to check availability and place your order.
                Please allow at least 48 hours notice.
              </p>
              <a
                href={`https://wa.me/15555555555?text=Hi%20G%C3%BCls%C3%BCm!%20I%20would%20like%20to%20order%20${encodeURIComponent(meal.name)}.`}
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order {meal.name}
              </a>
            </div>
          </div>
        </div>

        {/* Related meals */}
        {related.length > 0 && (
          <section className="related-meals">
            <h2>You might also like</h2>
            <div className="meal-grid-related">
              {related.map((m) => (
                <MealCard key={m.id} meal={m} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
