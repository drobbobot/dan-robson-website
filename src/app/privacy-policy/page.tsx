import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Robson Studio',
  description: 'Privacy policy for Robson Studio, including disclosures for applications that access Google user data via Google APIs.',
  alternates: { canonical: 'https://robson.studio/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
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
                Privacy Policy
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
                How Robson Studio handles personal information across this website and any
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

                <H2>Who we are</H2>
                <P>
                  Robson Studio (&ldquo;Robson Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
                  is a sole-operator design studio run by Dan Robson, based in Newcastle,
                  Australia. You can reach us at{' '}
                  <A href="mailto:dan@robson.studio">dan@robson.studio</A>.
                </P>

                <H2>Scope</H2>
                <P>
                  This policy covers personal information collected through the website at{' '}
                  <strong>robson.studio</strong> and through any web or desktop applications
                  operated by Robson Studio that link to this policy, including applications
                  that authenticate users via Google.
                </P>

                <H2>Information we collect</H2>
                <P>We may collect the following categories of information:</P>
                <Ul>
                  <li>
                    <strong>Information you provide directly</strong> &mdash; such as your name,
                    email address, and the content of any messages you send us.
                  </li>
                  <li>
                    <strong>Account and authentication data</strong> &mdash; if you sign in to
                    one of our applications, we receive the basic profile information returned
                    by the identity provider (for example, your name, email, and profile image
                    from Google).
                  </li>
                  <li>
                    <strong>User content</strong> &mdash; data you authorise an application to
                    read, create, or modify on your behalf (for example, files, calendar events,
                    or messages from connected services).
                  </li>
                  <li>
                    <strong>Technical data</strong> &mdash; standard server logs including IP
                    address, browser type, and pages visited, used to operate and secure the
                    service.
                  </li>
                </Ul>

                <H2>How we use information</H2>
                <P>We use the information we collect to:</P>
                <Ul>
                  <li>operate, maintain, and improve our website and applications;</li>
                  <li>authenticate you and keep your account secure;</li>
                  <li>provide the features you request, such as reading or modifying data in
                    services you have connected;</li>
                  <li>respond to enquiries you send us; and</li>
                  <li>comply with our legal obligations.</li>
                </Ul>

                <H2>Google API user data</H2>
                <P>
                  Where one of our applications uses Google APIs, our use and transfer of
                  information received from Google APIs adheres to the{' '}
                  <A
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google API Services User Data Policy
                  </A>
                  , including the Limited Use requirements.
                </P>
                <P>Specifically, we:</P>
                <Ul>
                  <li>only request the OAuth scopes required to provide features you have
                    asked for;</li>
                  <li>use Google user data solely to provide and improve user-facing features
                    of the application that requested the data;</li>
                  <li>do not transfer Google user data to third parties except as needed to
                    provide or improve those features, to comply with applicable law, or as
                    part of a merger or acquisition with appropriate notice;</li>
                  <li>do not use Google user data for serving advertisements;</li>
                  <li>do not allow humans to read Google user data unless we have your
                    affirmative consent for specific data, it is necessary for security, to
                    comply with applicable law, or the data is aggregated and used for
                    internal operations in accordance with applicable rules; and</li>
                  <li>do not use Google user data to train, fine-tune, or improve generalised
                    AI or machine-learning models.</li>
                </Ul>

                <H2>How we share information</H2>
                <P>We do not sell personal information. We share information only with:</P>
                <Ul>
                  <li>
                    <strong>Service providers</strong> that host or operate parts of the
                    service (for example, our hosting provider Vercel) under contractual
                    confidentiality obligations;
                  </li>
                  <li>
                    <strong>Legal and safety</strong> recipients when required by law, legal
                    process, or to protect the rights, property, or safety of our users or
                    others; and
                  </li>
                  <li>
                    <strong>Successors</strong> in the event of a business transfer, with
                    notice to affected users.
                  </li>
                </Ul>

                <H2>Data retention</H2>
                <P>
                  We retain personal information only for as long as needed to provide the
                  service or comply with our legal obligations. You can ask us to delete your
                  account and associated data by contacting{' '}
                  <A href="mailto:dan@robson.studio">dan@robson.studio</A>.
                </P>

                <H2>Your choices</H2>
                <P>
                  You can revoke an application&rsquo;s access to your Google Account at any
                  time at{' '}
                  <A
                    href="https://myaccount.google.com/permissions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    myaccount.google.com/permissions
                  </A>
                  . Depending on where you live, you may also have rights to access, correct,
                  or delete personal information we hold about you. To exercise any of these
                  rights, contact us at the address below.
                </P>

                <H2>Security</H2>
                <P>
                  We use reasonable technical and organisational measures to protect personal
                  information, including encryption in transit and access controls. No system
                  is perfectly secure, however, and we cannot guarantee the absolute security
                  of information transmitted over the internet.
                </P>

                <H2>Children</H2>
                <P>
                  Our website and applications are not directed to children under 13, and we do
                  not knowingly collect personal information from them.
                </P>

                <H2>Changes to this policy</H2>
                <P>
                  We may update this policy from time to time. Material changes will be
                  reflected by an updated &ldquo;Last updated&rdquo; date at the top of this
                  page. Continued use of our services after changes take effect constitutes
                  acceptance of the revised policy.
                </P>

                <H2>Contact</H2>
                <P>
                  Questions about this policy can be sent to{' '}
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
