'use client';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const services = [
    { name: '🩸 ব্লাড ডোনার', link: '/bhaluka-blood-donor', desc: 'রক্তদাতার তালিকা' },
    { name: '🩸 ইমাম ওলামা ', link: '/imam-olama-bhaluka-upazila', desc: 'ভালুকা উপজেলা' },
    { name: '🩸 দক্ষ মিস্ত্রীগণ ', link: '/imam-olama-bhaluka-upazila', desc: 'মিস্ত্রীদের তালিকা' },
    { name: '🩸 সাংবাদিকগন ', link: '/bhaluka-journalists', desc: 'ভালুকা উপজেলা' },


  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>SmartBD - স্মার্ট ভালুকা</title>
        <meta name="description" content="স্মার্ট ভালুকা: একটি প্ল্যাটফর্ম যেখানে ভালুকা উপজেলার সকল তথ্য একত্রে পাওয়া যাবে।" />
        <meta name="keywords" content="ভালুকা, Smart Bhaluka, স্মার্ট ভালুকা, উপজেলা তথ্য, রক্তদাতা, , হাসপাতাল, ব্যাংক, ডাক্তার, বাসা ভাড়া, মিস্ত্রী, ক্লিনিং স্টাফ ও আরও অনেক কিছু।" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        className="container mt-4"
        style={{
          backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
          minHeight: '100vh',
          transition: 'all 0.3s ease',
          padding: '1px',
        }}
      >
        <div
          className="text-center mb-4 p-4"
          style={{
            borderRadius: '20px',
            background: darkMode
              ? 'linear-gradient(to right, #222, #333)'
              : 'linear-gradient(to right, #d4fc79, #96e6a1)',
            color: darkMode ? '#fff' : '#000',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s ease-in',
          }}
        >
          <h2 style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '10px' }}>
            স্মার্ট ভালুকায় স্বাগতম 🌟
          </h2>
          <input
            type="text"
            placeholder="সেবা অনুসন্ধান করুন..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              width: '80%',
              maxWidth: '500px',
              padding: '10px 20px',
              borderRadius: '25px',
              border: '2px solid green',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              backgroundColor: darkMode ? '#333' : '#fff',
              color: darkMode ? '#fff' : '#000',
              marginBottom: '1px',
            }}
          />
        </div>

        <div className="text-end mb-3">
          <button
            className="btn btn-sm"
            style={{
              backgroundColor: darkMode ? '#444' : '#e0ffe0',
              color: darkMode ? '#fff' : '#000',
              borderRadius: '20px',
              padding: '5px 15px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ লাইট মোড' : '🌙 ডার্ক মোড'}
          </button>
           {/* মোট সংখ্যা */}
       <p className="text-center mb-4" style={{ color: darkMode ? '#ccc' : '#333' }}>
       মোট সেবা:  <strong>{filteredServices.length}</strong>
      </p> 
        </div>

        <div className="row">
          {filteredServices.length > 0 ? (
            filteredServices.map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3 mb-4"
                style={{
                  animation: 'fadeIn 0.6s ease both',
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <Link href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div
                    className="card text-center position-relative"
                    style={{
                      border: '2px solid green',
                      borderRadius: '20px',
                      background: darkMode
                        ? 'linear-gradient(135deg, #333, #444)'
                        : 'linear-gradient(135deg, #e0ffe0, #ffffff)',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      padding: '1px',
                      color: darkMode ? '#fff' : '#000',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 128, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    {index < 3 && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-2px',
                          right: '3px',
                          backgroundColor: '#28a745',
                          color: '#fff',
                          fontSize: '10px',
                          padding: '2px 8px',
                          borderRadius: '12px',
                        }}
                      >
                        NEW
                      </span>
                    )}
                    <div className="p-2">
                      <h6 style={{ fontWeight: 'bold' }}>{item.name}</h6>
                      <p style={{ fontSize: '12px', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">কোনো সেবা পাওয়া যায়নি।</p>
          )}
        </div>
      </div>
    </>
  );
}

