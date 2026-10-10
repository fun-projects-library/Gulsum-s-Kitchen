import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MealCard.css'

const TAG_ICONS = {
  vegetarian:      '🌿',
  'crowd-pleaser': '🎉',
  popular:         '⭐',
  meat:            '🥩',
  'street-food':   '🌯',
  appetizer:       '🫙',
  side:            '🍚',
  special:         '👑',
  ottoman:         '🏺',
  stew:            '🫕',
  hearty:          '💪',
  chicken:         '🍗',
  'family-friendly': '👨‍👩‍👧',
  fried:           '🍳',
}

export default function MealCard({ meal }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link to={`/meals/${meal.id}`} className="meal-card" aria-label={`View details for ${meal.name}`}>
      <div className="meal-card__img-wrap">
        {!imgError ? (
          <img
            src={meal.image}
            alt={meal.name}
            className="meal-card__img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="meal-card__img-placeholder" aria-hidden="true">
            🍽️
          </div>
        )}
        <span className="meal-card__category">{meal.category}</span>
      </div>

      <div className="meal-card__body">
        <div className="meal-card__title-row">
          <h3 className="meal-card__name">{meal.name}</h3>
          <span className="meal-card__price">${meal.price}</span>
        </div>
        <p className="meal-card__name-en">{meal.nameEn}</p>
        <p className="meal-card__desc">{meal.shortDesc}</p>

        <div className="meal-card__footer">
          <span className="meal-card__serves">👥 {meal.serves}</span>
          <div className="meal-card__tags">
            {meal.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="meal-card__tag">
                {TAG_ICONS[tag] || '•'} {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="meal-card__cta">
        See Details <span aria-hidden="true">→</span>
      </div>
    </Link>
  )
}
