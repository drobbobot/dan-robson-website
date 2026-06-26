export function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row md:items-center md:justify-between"
      style={{
        padding: '2rem 1.5rem',
        fontSize: '0.875rem',
        color: 'var(--muted-foreground)',
        fontFamily: 'var(--font-sans)',
        gap: '0.75rem',
        maxWidth: '90rem',
        margin: '0 auto',
      }}
    >
      <span>&copy; 2026 Dan Robson</span>
      <span style={{ display: 'inline-flex', gap: '1.5rem' }}>
        <a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:underline">
          Terms of Service
        </a>
      </span>
    </footer>
  );
}
