import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About – Haixia Doris Law PLLC',
}

export default function About() {
  return (
    <>
      <div className="page-banner">
        <h1>About</h1>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">JD Doris</h2>
          <p style={{ marginTop: '1.5rem', lineHeight: 1.9, color: '#555' }}>
            JD Doris is Juris Doctor from Law School of West Virginia University,
            Master from Law School of University of Southern California; and EMBA from
            Huifeng Business School of PKU, EMBA from Shenzhen School of Tsinghua University.
          </p>
          <p style={{ marginTop: '1.5rem', lineHeight: 1.9, color: '#555' }}>
            With a distinguished academic background spanning two continents, Doris brings
            a unique perspective to legal practice—combining rigorous American legal training
            with deep understanding of international business and Chinese law.
          </p>
        </div>
      </section>
    </>
  )
}
