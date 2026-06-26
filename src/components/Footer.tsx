export function Footer() {
  return (
    <footer
      className="flex flex-col"
      style={{
        padding: '2rem 1.5rem 2.5rem',
        fontFamily: 'var(--font-sans)',
        color: 'var(--muted-foreground)',
        gap: '1.25rem',
        maxWidth: '90rem',
        margin: '0 auto',
      }}
    >
      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between"
        style={{ fontSize: '0.875rem', gap: '0.75rem' }}
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
      </div>

      {/* Tiny conflict/confidentiality note; full statement lives in the Terms */}
      <p style={{ fontSize: '0.75rem', lineHeight: 1.5, opacity: 0.85, maxWidth: '44rem' }}>
        Outside work is only considered where there&rsquo;s no conflict with my employment or
        client obligations. See the{' '}
        <a href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.15rem' }}>
          Terms
        </a>
        .
      </p>
    </footer>
  );
}
