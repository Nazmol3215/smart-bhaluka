'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelPage() {
  const manualProfiles = [
    {
      _id: 'm2',
      imageLink: "/images/shad.png",
      imageName: 'হোটেল স্বাদ, ভালুকা',
      phone: '01700000002',
      address: 'ভালুকা ',
    },
    {
      _id: 'm3',
      imageLink: "/images/seven.png",
      imageName: 'হোটেল সেভেন স্টার, ভালুকা',
      phone: '০১৭৪৬-১২৬৫৬৩',
      address: 'ভালুকা বাজার রোড, ভালুকা',
    },
    {
      _id: 'm4',
      imageLink: "/images/sarabala.png",
      imageName: 'সারাবেলা ফুড গার্ডেন, ফাস্ট ফুড',
      phone: '01700000002',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },
    {
      _id: 'm5',
      imageLink: "/images/sapnabilas.png",
      imageName: 'স্বপ্ন বিলাস রেস্টুরেন্ট',
      phone: '01700000002',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্ব পাশে, ভালুকা',
    },
    {
      _id: 'm6',
      imageLink: "/images/matirhotel.png",
      imageName: 'মাটির হোটেল',
      phone: '01708-457116',
      address: 'সালাউদ্দিন প্লাজা মোহাম্মদিয়া হাসপাতাল সংলগ্ন, ভালুকা',
    },
    {
      _id: 'm7',
      imageLink: "/images/kafa.png",
      imageName: 'ডক্টরস ক্যাফে',
      phone: '09022 56120',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্বে, ভালুকা',
    },
    {
      _id: 'm8',
      imageLink: "/images/foodpara.png",
      imageName: 'ফুড প্যারাডাইস রেস্টুরেন্ট এন্ড বিরিয়ানি হাউস',
      phone: '01737-728778',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },
    {
      _id: 'm9',
      imageLink: "/images/rajdani.png",
      imageName: 'তানভীর গেস্ট হাউস, আবাসিক হোটেল',
      phone: '0170********2',
      address: 'সেভেন স্টারের পাশে, ভালুকা',
    },
    {
      _id: 'm1',
      imageLink: "/images/rajdani.png",
      imageName: 'হোটেল রাজধানী, ভালুকা',
      phone: '01708-160168',
      address: 'ভালুকা হৃদয় সুপার মার্কেট, ভালুকা',
    },
    {
      _id: 'm10',
      imageName: 'সারাবেলা আবাসিক হোটেল',
      phone: '018550240095',
      address: 'নতুন বাসস্ট্যান্ড, ভালুকা',
    },
    {
      _id: 'm11',
      imageName: 'হোটেল নিরব',
      phone: '01700000002',
      address: 'সারাবেলা হক মার্কেট, ভালুকা',
    },
    {
      _id: 'm12',
      imageName: 'হোটেল উত্তরা',
      phone: '০১৭১১-১৮৯৯০৯',
      address: 'ভালুকা বাসস্ট্যান্ডের পশ্চিম পাশে, ভালুকা',
    },
    {
      _id: 'm13',
      imageName: 'হোটেল নদী বাংলা',
      phone: '০১৭১৬-৭৭২১৪৬',
      address: 'ভালুকা পাচ রাস্তার মোড় ব্রীজ সংলগ্ন',
    },
  ];

  const [data, setData] = useState(manualProfiles);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.imageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>ভালুকার হোটেল ও আবাসিক হোটেল | SmartBhaluka</title>
        <meta name="description" content="ভালুকা উপজেলার সকল হোটেল, রেস্টুরেন্ট ও আবাসিক হোটেলের নাম, ঠিকানা ও ফোন নম্বরসহ বিস্তারিত তথ্য। পর্যটক ও ভ্রমণকারীদের জন্য প্রয়োজনীয় তথ্যভান্ডার।" />
        <meta name="keywords" content="ভালুকা হোটেল, ভালুকা আবাসিক হোটেল, রেস্টুরেন্ট, গেস্ট হাউস, হোটেল তালিকা, ভালুকা রেস্টুরেন্ট, SmartBhaluka" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ padding: '20px', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '10px' }}>ভালুকা উপজেলার হোটেল ও আবাসিক হোটেল</h1>
          <p style={{ fontSize: '16px', maxWidth: '700px', margin: '0 auto', color: '#555' }}>
            এই পেইজে ভালুকা উপজেলার সকল হোটেল, রেস্টুরেন্ট এবং আবাসিক হোটেলের তথ্য প্রদান করা হয়েছে। যারা ভালুকা ভ্রমণ করছেন বা থাকছেন, তারা সহজেই এই তথ্য ব্যবহার করে পছন্দের খাবার বা আবাসনের ব্যবস্থা নিতে পারবেন।
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          যদি আপনি নতুন কোনো হোটেল বা আবাসিক হোটেল যুক্ত করতে চান,<br />
          <Link href="/HotelForm" style={{
            fontSize: '16px',
            color: '#007bff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            এখানে ক্লিক করুন
          </Link>
        </div>

        <input
          type="text"
          placeholder="হোটেল বা ঠিকানা লিখে খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            display: 'block',
            margin: '0 auto 30px auto',
            padding: '10px 15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {filteredData.map(item => (
            <div key={item._id} style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}>
              {item.imageLink &&
                <Image
                  src={item.imageLink}
                  alt={item.imageName}
                  width={300}
                  height={200}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
              }
              <h3 style={{ margin: '15px 0 10px', color: '#2c3e50' }}>{item.imageName}</h3>
              <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>ফোন:</strong> {item.phone}</p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>ঠিকানা:</strong> {item.address}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}