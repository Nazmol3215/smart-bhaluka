'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function OffcanvasNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{
            background: darkMode
              ? 'linear-gradient(to right , #222, #333)'
              : 'linear-gradient(to left, #d4fc79, #96e6a1)',
            color: darkMode ? '#fff' : '#000',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s ease-in',
            borderRadius: '0 0 3px 2px',
            marginBottom: '1rem',
          }}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h1 style={{ fontSize: '1.2rem', color: '#333', margin: '10px', padding: '5px' }}>
                  ভালুকা
                </h1>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{ paddingRight: '.9rem' }}>
                  {/* Nav Links */}
                  {[
                    { href: '/home', label: 'হোম' },
                    { href: '/JournalistsList', label: 'গাড়ি ভাড়া' },
                    { href: '/Mestiri_1', label: 'সকল মিস্ত্রী' },
                    { href: '/House_rental_1', label: 'বাসা ভাড়া' },
                    { href: '/Cook_butcher_1', label: 'কসাই বাবুর্চি' },
                    { href: '/attractions', label: 'ক্লিনিং স্টাফ' },
                    { href: '/restaurants', label: 'রেস্টুরেন্ট' },
                    { href: '/hotels', label: 'আবাসিক হোটেল' },
                    { href: '/cleaners', label: 'পরিচ্ছন্ন কর্মী' },
                    { href: '/internet-service', label: 'ইন্টারনেট সার্ভিস' },
                    { href: '/famous-people', label: 'প্রসিদ্ধ ব্যক্তি' },
                    { href: '/about-valuka', label: 'ভালুকার পরিচিতি' },
                    { href: '/municipality', label: 'পৌরসভা' },
                    { href: '/unions', label: 'ইউনিয়ন' },
                    { href: '/police', label: 'থানা পুলিশ' },
                    { href: '/fire-service', label: 'ফায়ার সার্ভিস' },
                    { href: '/upazila-administration', label: 'উপজেলা প্রশাসন' },
                    { href: '/hospital', label: 'ভালুকার হাসপাতাল' },
                    { href: '/Ambulance_1', label: 'এম্বুলেন্স' },
                    { href: '/doctors', label: 'ডাক্তার' },
                    { href: '/banks', label: 'ব্যাংক সমূহ' },
                    { href: '/car-rental', label: 'বিউটি পার্লার' },
                    { href: '/entrepreneurs', label: 'উদ্যোক্তা' },
                    { href: '/marketplaces', label: 'হাট বাজার' },
                    { href: '/complaints', label: 'অভিযোগ' },
                    { href: '/emergency-electricity', label: 'জরুরি বিদ্যুৎ' },
                    { href: '/marriage-registry', label: 'কাজী অফিস' },
                    { href: '/courier-service', label: 'কুরিয়ার সার্ভিস' },
                    { href: '/AdminDashboard', label: 'লগইন' }
                  ].map(({ href, label }) => (
                    <Nav.Link key={href} as={Link} href={href} style={{ fontSize: '.9rem', color: '#007bff' }}>
                      {label}
                    </Nav.Link>
                  ))}

                  {/* Dropdown: পার্লার */}
                  <NavDropdown
                    title="পার্লার"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ color: '#007bff' }}
                  >
                    <NavDropdown.Item as={Link} href="/JournalistsList" style={{ fontSize: '.9rem', color: '#007bff' }}>
                      বিউটি পার্লার
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/JournalistsList" style={{ fontSize: '.9rem', color: '#007bff' }}>
                      জেন্টস পার্লার
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* Dropdown: Service */}
                  <NavDropdown
                    title="Service"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ color: '#007bff' }}
                  >
                    <NavDropdown.Item href="#action3">Website</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Facebook Pixel</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Facebook Ads</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}