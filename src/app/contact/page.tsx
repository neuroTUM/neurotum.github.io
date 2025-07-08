import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'var(--font-dm-serif)' }}>
      <section style={{
        width: '100%',
        maxWidth: 500,
        margin: '4rem 0',
        textAlign: 'left',
        padding: '0 1rem',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.04em' }}>Get in touch</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--foreground)' }}>
          We look forward to hearing from you!
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.2rem', lineHeight: 2 }}>
          <li><strong>Email:</strong> <a href="mailto:team@neurotum.com" style={{ color: '#0a0a3c', fontWeight: 700, textDecoration: 'none' }}>team@neurotum.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+4917634396551" style={{ color: '#0a0a3c', fontWeight: 700, textDecoration: 'none' }}>+49 176 34396551</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/neurotum/" target="_blank" rel="noopener noreferrer" style={{ color: '#0a0a3c', fontWeight: 700, textDecoration: 'none' }}>neurotum</a></li>
          <li style={{ marginTop: '1.5rem' }}><strong>Address:</strong><br />Technische Universität München<br />Boltzmannstraße 11<br />85748 Garching bei München</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
} 