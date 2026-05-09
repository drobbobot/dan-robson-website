import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Robson Studio',
  description: 'Terms of service governing use of the Robson Studio website and any applications operated under the Robson Studio name.',
  alternates: { canonical: 'https://robson.studio/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
      <Nav />
      <main>
        <section className="relative" style={{ padding: '10rem 1.5rem 4rem' }}>
          <div className="w-full md:pl-[calc(25%-5rem)]" style={{ maxWidth: '90rem', margin: '0 auto' }}>
            <article style={{ maxWidth: '42.5rem' }}>
              <h1
                className="leading-[1.1]"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  letterSpacing: '-0.06rem',
                  marginBottom: '1rem',
                }}
              >
                Terms of Service
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-hero-serif)',
                  color: '#241013',
                  fontSize: '1.25rem',
                  lineHeight: 1.4,
                  marginBottom: '3rem',
                }}
              >
                The terms under which you may use the Robson Studio website and any
                applications operated under the Robson Studio name.
              </p>

              <div
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  color: 'rgba(36,16,19,0.85)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                <Meta>Last updated: 10 May 2026</Meta>

                <H2>1. Acceptance of terms</H2>
                <P>
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
                  the website at <strong>robson.studio</strong> and any applications,
                  software, or services operated by Robson Studio (collectively, the
                  &ldquo;Services&rdquo;). By using the Services, you agree to these Terms. If
                  you do not agree, do not use the Services.
                </P>

                <H2>2. Who we are</H2>
                <P>
                  The Services are operated by Robson Studio, a sole-operator design studio
                  run by Dan Robson, based in Newcastle, New South Wales, Australia. You can
                  contact us at <A href="mailto:dan@robson.studio">dan@robson.studio</A>.
                </P>

                <H2>3. Eligibility</H2>
                <P>
                  You must be at least 13 years old to use the Services. By using the Services
                  you represent that you meet this requirement and that you have the legal
                  capacity to enter into these Terms.
                </P>

                <H2>4. Accounts and authentication</H2>
                <P>
                  Some features require you to authenticate, including via third-party
                  identity providers such as Google. You are responsible for maintaining the
                  confidentiality of your credentials and for all activity that occurs under
                  your account. Notify us promptly at{' '}
                  <A href="mailto:dan@robson.studio">dan@robson.studio</A> if you suspect
                  unauthorised use of your account.
                </P>

                <H2>5. Acceptable use</H2>
                <P>You agree not to:</P>
                <Ul>
                  <li>use the Services in violation of any applicable law or regulation;</li>
                  <li>attempt to gain unauthorised access to the Services or other users&rsquo; accounts or data;</li>
                  <li>interfere with, disrupt, or impose an unreasonable load on the Services or their underlying infrastructure;</li>
                  <li>reverse engineer, decompile, or disassemble any part of the Services except where permitted by law;</li>
                  <li>use the Services to transmit unlawful, harmful, harassing, or infringing content; or</li>
                  <li>misrepresent your identity or affiliation with any person or entity.</li>
                </Ul>

                <H2>6. Your content and data</H2>
                <P>
                  You retain ownership of any content you provide to the Services. You grant
                  Robson Studio a limited, non-exclusive, royalty-free licence to host, store,
                  and process your content solely as needed to provide the Services to you.
                </P>
                <P>
                  Where the Services access data from third-party providers on your behalf
                  (for example, via Google APIs), our handling of that data is described in
                  our <A href="/privacy-policy">Privacy Policy</A>.
                </P>

                <H2>7. Third-party services</H2>
                <P>
                  The Services may interoperate with third-party services such as Google. Your
                  use of those services is governed by their own terms and policies, and we
                  are not responsible for them. You are responsible for ensuring your use of
                  third-party services through the Services complies with the terms of those
                  providers.
                </P>

                <H2>8. Intellectual property</H2>
                <P>
                  The Services, including their design, code, text, graphics, and trademarks,
                  are owned by Robson Studio or its licensors and are protected by intellectual
                  property laws. Except for the limited rights expressly granted in these
                  Terms, no rights are granted to you.
                </P>

                <H2>9. Fees</H2>
                <P>
                  Unless stated otherwise at the point of sign-up, the Services are provided
                  free of charge. If a paid feature is introduced, applicable fees and billing
                  terms will be presented to you before purchase.
                </P>

                <H2>10. Termination</H2>
                <P>
                  You may stop using the Services at any time. We may suspend or terminate
                  your access to the Services at any time, with or without notice, including
                  if we believe you have breached these Terms or if continued provision is no
                  longer commercially or technically viable. Sections that by their nature
                  should survive termination will survive.
                </P>

                <H2>11. Disclaimers</H2>
                <P>
                  The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
                  without warranties of any kind, whether express or implied, including
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement. We do not warrant that the Services will be uninterrupted,
                  error-free, or free of harmful components.
                </P>

                <H2>12. Limitation of liability</H2>
                <P>
                  To the fullest extent permitted by law, Robson Studio will not be liable for
                  any indirect, incidental, special, consequential, or punitive damages, or
                  any loss of profits, data, or goodwill, arising out of or related to your
                  use of the Services. Our total liability for any claim arising out of or
                  related to the Services will not exceed AUD $100.
                </P>

                <H2>13. Indemnity</H2>
                <P>
                  You agree to indemnify and hold harmless Robson Studio from and against any
                  claims, liabilities, damages, losses, and expenses arising out of your use
                  of the Services or your breach of these Terms.
                </P>

                <H2>14. Governing law</H2>
                <P>
                  These Terms are governed by the laws of New South Wales, Australia. Any
                  dispute arising out of or in connection with these Terms or the Services is
                  subject to the exclusive jurisdiction of the courts of New South Wales.
                </P>

                <H2>15. Changes to these terms</H2>
                <P>
                  We may update these Terms from time to time. Material changes will be
                  reflected by an updated &ldquo;Last updated&rdquo; date at the top of this
                  page. Continued use of the Services after changes take effect constitutes
                  acceptance of the revised Terms.
                </P>

                <H2>16. Contact</H2>
                <P>
                  Questions about these Terms can be sent to{' '}
                  <A href="mailto:dan@robson.studio">dan@robson.studio</A>.
                </P>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontWeight: 400,
        fontSize: '1.5rem',
        letterSpacing: '-0.02rem',
        marginTop: '2.5rem',
        marginBottom: '0.75rem',
        color: '#241013',
      }}
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: '1rem' }}>{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        listStyle: 'disc',
        paddingLeft: '1.25rem',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      {children}
    </ul>
  );
}

function A({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        color: '#FF3C1A',
        textDecoration: 'underline',
        textUnderlineOffset: '0.1875rem',
        textDecorationThickness: '0.0625rem',
      }}
    >
      {children}
    </a>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        fontStyle: 'italic',
        color: 'rgba(36,16,19,0.5)',
        fontSize: '0.875rem',
        marginBottom: '1.5rem',
      }}
    >
      {children}
    </p>
  );
}
