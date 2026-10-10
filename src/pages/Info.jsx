import React from 'react'
import { Link } from 'react-router-dom'
import './Info.css'

const PAYMENT_METHODS = [
  { icon: '💵', label: 'Cash' },
  { icon: '📱', label: 'Zelle' },
  { icon: '💙', label: 'Venmo' },
  { icon: '💚', label: 'Cash App' },
  { icon: '🍎', label: 'Apple Pay' },
]

export default function Info() {
  return (
    <main className="info page-enter">
      <div className="container">

        {/* Page header */}
        <div className="info__header">
          <span className="info__eyebrow">📋 Good to know</span>
          <h1 className="info__title">Delivery & Info</h1>
          <p className="info__subtitle">
            Everything you need to know before placing your order.
          </p>
        </div>

        <div className="info__grid">

          {/* ── Delivery ─────────────────── */}
          <section className="info-card">
            <div className="info-card__icon-wrap" style={{ background: 'rgba(212,144,10,0.1)' }}>
              <span>🚗</span>
            </div>
            <h2>Delivery Zones</h2>

            <div className="delivery-zones">
              <div className="zone-row zone-row--highlight">
                <div className="zone-row__label">
                  <span className="zone-dot zone-dot--green" />
                  <span>Under 15 miles</span>
                </div>
                <span className="zone-row__price">$20</span>
              </div>
              <div className="zone-row">
                <div className="zone-row__label">
                  <span className="zone-dot zone-dot--yellow" />
                  <span>15 – 30 miles</span>
                </div>
                <span className="zone-row__price">$35</span>
              </div>
              <div className="zone-row zone-row--disabled">
                <div className="zone-row__label">
                  <span className="zone-dot zone-dot--red" />
                  <span>Over 30 miles</span>
                </div>
                <span className="zone-row__unavailable">Not available</span>
              </div>
            </div>

            <div className="info-card__note">
              <span>📍</span>
              <p>
                Distance is calculated from my location. Please share your address
                when ordering so I can confirm the delivery fee.
              </p>
            </div>

            <div className="info-card__note">
              <span>🏠</span>
              <p>
                <strong>Pickup is also available</strong> at no extra charge!
                We'll coordinate the time together on WhatsApp.
              </p>
            </div>
          </section>

          {/* ── Ordering ─────────────────── */}
          <section className="info-card">
            <div className="info-card__icon-wrap" style={{ background: 'rgba(37,211,102,0.1)' }}>
              <span>💬</span>
            </div>
            <h2>How to Order</h2>

            <ol className="order-steps">
              <li>
                <span className="step-num">1</span>
                <div>
                  <strong>Browse the menu</strong>
                  <p>Check out the dishes and pick what you'd like.</p>
                </div>
              </li>
              <li>
                <span className="step-num">2</span>
                <div>
                  <strong>Message me on WhatsApp</strong>
                  <p>Let me know which dishes you want, how many portions, and your delivery date.</p>
                </div>
              </li>
              <li>
                <span className="step-num">3</span>
                <div>
                  <strong>Confirm & pay</strong>
                  <p>I'll confirm availability, the total, and we'll agree on pickup or delivery time.</p>
                </div>
              </li>
              <li>
                <span className="step-num">4</span>
                <div>
                  <strong>Enjoy! 🎉</strong>
                  <p>Your food arrives fresh, packed with care, ready to serve.</p>
                </div>
              </li>
            </ol>

            <div className="info-card__note info-card__note--important">
              <span>⏰</span>
              <p>
                <strong>Please order at least 48 hours in advance.</strong> Each dish
                is made from scratch and takes time to prepare properly.
              </p>
            </div>

            <div className="info-card__note info-card__note--tip">
              <span>💰</span>
              <p>
                <strong>Large orders may require a deposit.</strong> For big gatherings
                or multiple dishes, a partial down payment may be requested upfront to
                cover ingredients. Details will be discussed when confirming your order.
              </p>
            </div>

            <a
              href="https://wa.me/15555555555"
              className="whatsapp-order-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Your Order on WhatsApp
            </a>
          </section>

          {/* ── Payment ──────────────────── */}
          <section className="info-card">
            <div className="info-card__icon-wrap" style={{ background: 'rgba(193,68,14,0.1)' }}>
              <span>💳</span>
            </div>
            <h2>Payment Methods</h2>
            <p className="info-card__intro">I accept the following payment options:</p>

            <div className="payment-grid">
              {PAYMENT_METHODS.map(({ icon, label }) => (
                <div key={label} className="payment-chip">
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="info-card__note">
              <span>ℹ️</span>
              <p>Payment is requested after delivery or pickup. I'll send you the payment details when confirming your order.</p>
            </div>
          </section>

          {/* ── Contact ──────────────────── */}
          <section className="info-card info-card--contact">
            <div className="info-card__icon-wrap" style={{ background: 'rgba(44,24,16,0.08)' }}>
              <span>📞</span>
            </div>
            <h2>Contact</h2>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-item__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/15555555555" target="_blank" rel="noopener noreferrer">
                    +1 (555) 555-5555
                  </a>
                  <small>Preferred contact method</small>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon-wrap">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="22" height="22" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:hello@gulsumskitchen.com">
                    hello@gulsumskitchen.com
                  </a>
                  <small>I'll respond within 24 hours</small>
                </div>
              </div>
            </div>

            <div className="info-card__note info-card__note--tip">
              <span>💡</span>
              <p>
                WhatsApp is the <strong>fastest</strong> way to reach me and get your
                order confirmed. I am typically available between <strong>9am – 8pm</strong>.
              </p>
            </div>
          </section>

        </div>

        {/* Bottom nav */}
        <div className="info__bottom-nav">
          <Link to="/" className="info__nav-link">← Browse the Menu</Link>
          <Link to="/about" className="info__nav-link">About Gülsüm →</Link>
        </div>

      </div>
    </main>
  )
}
