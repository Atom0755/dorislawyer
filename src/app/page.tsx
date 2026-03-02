import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Haixia Doris Law PLLC</h1>
        <p>
          Each of our practice areas is highly regarded, and our lawyers are recognized for their
          commitment to the representation of our clients&apos; interests. Throughout our history, we have
          played a central role in developing how law is practiced, how lawyers are trained and how
          business risk is managed. We are not, and do not strive to be the largest law firm measured
          by number of offices or lawyers. Our goal is to be the firm of choice for clients with
          respect to their most challenging legal issues, most significant business and transactions
          and most critical disputes.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          background: 'transparent',
          border: '1px solid rgba(184,150,90,0.6)',
          color: '#d4af7a',
          padding: '0.75rem 2rem',
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          transition: 'all 0.2s',
        }}>
          Contact Us
        </Link>
      </section>

      {/* About preview */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title">Haixia Doris Law PLLC</h2>
              <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.9 }}>
                We are a dedicated law firm committed to providing exceptional legal services.
                Our attorneys bring deep expertise and personal attention to every case.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div className="contact-item">
                  <strong>Location</strong>
                  <span>405 Park St #1, Frostburg, MD 21532, USA</span>
                </div>
                <div className="contact-item">
                  <strong>Email</strong>
                  <span><a href="mailto:Doris@DorisLawyer.com" style={{ color: '#b8965a' }}>Doris@DorisLawyer.com</a></span>
                </div>
                <div className="contact-item">
                  <strong>Phone</strong>
                  <span><a href="tel:+13109903853" style={{ color: '#b8965a' }}>+1-310-990-3853</a></span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://dorislawyer.com/wp-content/uploads/2025/04/Doris-1-1024x1024.jpg"
                alt="JD Doris"
                width={320}
                height={320}
                className="profile-img"
                style={{ objectFit: 'cover', width: '280px', height: '280px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
