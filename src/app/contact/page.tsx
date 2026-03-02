import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact – Haixia Doris Law PLLC',
}

export default function Contact() {
  return (
    <>
      <div className="page-banner">
        <h1>Contact</h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div className="contact-block">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <Image
                    src="https://dorislawyer.com/wp-content/uploads/2025/04/Doris-1024x1024.jpg"
                    alt="JD Doris"
                    width={80}
                    height={80}
                    className="profile-img"
                    style={{ objectFit: 'cover', width: '80px', height: '80px', borderRadius: '50%' }}
                  />
                  <div>
                    <h3 style={{ margin: 0 }}>JD Doris</h3>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.25rem' }}>Haixia Doris Law PLLC</p>
                  </div>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <a href="mailto:Doris@DorisLawyer.com" style={{ color: '#b8965a' }}>
                    Doris@DorisLawyer.com
                  </a>
                </div>
                <div className="contact-item">
                  <strong>Address</strong>
                  <span>405 Park St #1, Frostburg, MD 21532, USA</span>
                </div>
                <div className="contact-item">
                  <strong>Phone</strong>
                  <a href="tel:+13109903853" style={{ color: '#b8965a' }}>
                    +1-310-990-3853
                  </a>
                </div>
              </div>
            </div>
            <div style={{ color: '#555', lineHeight: 1.9 }}>
              <h2 className="section-title">Get In Touch</h2>
              <p style={{ marginTop: '1rem' }}>
                We welcome inquiries about our legal services. Please reach out by phone
                or email and we will respond promptly.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Our firm handles matters in immigration, asylum, marriage law, corporate
                counseling, and debt disputes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
