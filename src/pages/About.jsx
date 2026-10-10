import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <main className="about page-enter">
      <div className="container">

        {/* Hero section */}
        <section className="about__hero">
          <div className="about__photo-wrap" aria-label="Gülsüm's photo placeholder">
            <div className="about__photo-placeholder">
              {/* Replace the div below with an <img> tag when you have a real photo */}
              <span>👩‍🍳</span>
              <p>Gülsüm's photo</p>
            </div>
            <div className="about__photo-badge">
              <span>🫙</span>
              <span>Made with love</span>
            </div>
          </div>

          <div className="about__intro">
            <span className="about__eyebrow">🌿 Meet the Chef</span>
            <h1 className="about__title">Hi, I'm Gülsüm!</h1>
            <p className="about__lead">
              A home cook, a mom, and a lifelong lover of Turkish food — I am so
              happy to share the flavors of my homeland with you.
            </p>

            <a
              href="https://wa.me/15555555555"
              className="about__cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Say Hello on WhatsApp
            </a>
          </div>
        </section>

        {/* Story section */}
        <section className="about__story">
          <div className="about__story-text">
            <h2>My Story</h2>

            <p>
              I was born and raised in Turkey, where food is not just sustenance — it is
              love, culture, and community all wrapped into one. From a very young age,
              I spent my days in the kitchen alongside my mother and grandmother, learning
              the secrets behind our family's most treasured recipes. The patience required
              to hand-roll hundreds of sarma leaves. The technique of getting pilav just right.
              The magic of turning humble ingredients into something extraordinary.
            </p>

            <p>
              When I moved to the United States, one thing I missed most was the food from home.
              Not just the taste, but the warmth it carried — the memory of slow Sunday
              mornings, family gatherings, the smell of something always simmering on the stove.
              So I started cooking, first just for my family, then for friends, and eventually
              for neighbors who kept asking, "Gülsüm, can I get some of what you made?"
            </p>

            <p>
              That's how <strong>Gülsüm's Kitchen</strong> was born. Every dish I prepare
              is made entirely from scratch, using quality ingredients, no shortcuts, and
              plenty of heart. I believe that food made with care tastes different — and
              I want every bite you take to remind you that someone put real love into it.
            </p>

            <p>
              Whether you're a fellow Turkish expat craving a taste of home, or someone
              curious about exploring Turkish cuisine for the first time — I am so glad
              you're here. Welcome to my kitchen. 🫙
            </p>
          </div>

          <aside className="about__values">
            {[
              { icon: '🌿', title: 'Scratch-made always', desc: 'No mixes, no shortcuts. Every dish cooked from raw ingredients the traditional way.' },
              { icon: '🫒', title: 'Quality ingredients',  desc: 'I source the best I can find — olive oil, spices, fresh produce and meats.' },
              { icon: '❤️', title: 'Made with love',       desc: 'Each order is treated like I\'m cooking for my own family.' },
              { icon: '🕐', title: 'Please plan ahead',    desc: 'I ask for at least 48 hours notice so every dish gets the time it deserves.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="value-card">
                <span className="value-card__icon">{icon}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </aside>
        </section>

        {/* Bottom nav */}
        <div className="about__bottom-nav">
          <Link to="/" className="about__nav-link">
            ← Browse the Menu
          </Link>
          <Link to="/info" className="about__nav-link about__nav-link--accent">
            Delivery & Info →
          </Link>
        </div>

      </div>
    </main>
  )
}
