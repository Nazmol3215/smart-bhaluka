'use client';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '2px solid #444',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#ffffff',
        backdropFilter: 'blur(10px)',
        padding: '40px 20px',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>🧭 SmartBhaluka</h2>

        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '30px',
            color: '#dddddd',
          }}
        >
          আমরা ভালুকার তথ্যভিত্তিক ডিজিটাল প্ল্যাটফর্ম, যেখানে স্থানীয় বাসিন্দা ও
          ভ্রমণকারীরা প্রয়োজনীয় সেবা ও তথ্য খুঁজতে পারেন।
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '25px',
          }}
        >
          <FooterLink href="/about" text="About" />
          <FooterLink href="/services" text="Services" />
          <FooterLink href="/contact" text="Contact" />
          <FooterLink href="/privacy" text="Privacy" />
        </div>

        <p style={{ fontSize: '14px', color: '#999999' }}>
          &copy; {new Date().getFullYear()} SmartBhaluka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <Link
      href={href}
      style={{
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s',
      }}
      onMouseOver={(e) => (e.target.style.color = '#00ffd5')}
      onMouseOut={(e) => (e.target.style.color = '#ffffff')}
    >
      {text}
    </Link>
  );
}
