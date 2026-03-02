export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright © {year} <a href="/">dorislawyer.com</a> – Haixia Doris Law PLLC</p>
    </footer>
  )
}
