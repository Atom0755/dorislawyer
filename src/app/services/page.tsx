import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services – Haixia Doris Law PLLC',
}

const services = [
  'Immigration',
  'Asylum',
  'Marriage & Family Law',
  'Corporate Counseling',
  'Debt Disputes',
  'Business Transactions',
]

export default function Services() {
  return (
    <>
      <div className="page-banner">
        <h1>Services</h1>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p style={{ marginTop: '1rem', color: '#555', maxWidth: '650px' }}>
            We undertake these legal cases: immigration, asylum, marriage, corporate counseling,
            debt disputes, and more. Our team is dedicated to providing personalized, high-quality
            legal representation for each client.
          </p>
          <ul className="services-list">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
