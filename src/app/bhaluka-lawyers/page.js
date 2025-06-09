// pages/lawyer.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const ProfileDetails = ({ name, mobile, designation }) => {
  const headingStyle = {
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    fontFamily: '"Galada", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
  };

  const textStyle = {
    fontSize: '1em',
    color: '#666',
    marginBottom: '8px',
    fontFamily: '"Galada", cursive',
    fontWeight: 400,
    fontStyle: 'normal',
  };

  const cleanMobile = mobile.replace(/[^0-9+]/g, '');

  return (
    <>
      <div style={headingStyle}>{name}</div>
      <div style={textStyle}>
        Mobile:{' '}
        <a href={`tel:${cleanMobile}`} style={{ color: '#007BFF', textDecoration: 'none' }}>
          {mobile}
        </a>
      </div>
      <div style={textStyle}>পদবী: {designation}</div>
    </>
  );
};

const ProfileCard = ({ name, mobile, designation }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
    margin: '10px',
  };

  return (
    <div style={cardStyle}>
      <ProfileDetails name={name} mobile={mobile} designation={designation} />
    </div>
  );
};

const LawyerPage = () => {
  const staticProfiles = [
    { name: 'এডভোকেট আশরাফুল হক জর্জ', mobile: '+880 1552-437912,', designation: 'সাবেক এটর্নি জেনারেল, সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট রহিম মিয়া', mobile: '+880 1725-004240,', designation: 'এপিপি, সুপ্রিমকোর্ট।।' },
    { name: 'এডভোকেট রাখাল উকিল', mobile: '+880 1552-437912,', designation: 'সাবেক এটর্নি জেনারেল, সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট আনোয়ার টুটু', mobile: '01711-115055', designation: 'জজ কোর্ট, ময়মনসিংহ' },
    { name: 'এডভোকেট তপু গোপাল', mobile: '+8801715-992955,', designation: 'সুপ্রিমকোর্ট।' },
    { name: 'এডভোকেট পলাশ', mobile: '+8801711-354366,', designation: 'জজ কোর্ট, ময়মনসিংহ।' },
    { name: 'এডভোকেট কামরুল ইসলাম', mobile: '+880 1745-538533,', designation: 'জজ কোর্ট, ময়মনসিংহ।' },
    { name: 'এডভোকেট অন্তর', mobile: '+880 1722-259640,', designation: 'জজ কোর্ট, ময়মনসিংহ' },
    { name: 'এডভোকেট নাজমুল হক হিমেল', mobile: '+8801716-321592,', designation: 'জজ কোর্ট, ময়মনসিংহ' },
  ];

  const [dbProfiles, setDbProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get('https://bdback-5ofz.onrender.com/api/members/all');
        const formatted = res.data.map(member => ({
          name: member.imageName,
          mobile: member.phone,
          designation: member.designation,
        }));
        setDbProfiles(formatted);
      } catch (error) {
        console.error('ডেটা লোড করতে সমস্যা হয়েছে:', error);
      }
    };

    fetchProfiles();
  }, []);

  const combinedProfiles = [...staticProfiles, ...dbProfiles];

  return (
    <>
      <Head>
        <title>ময়মনসিংহ জেলার অভিজ্ঞ আইনজীবীগণ</title>
        <meta name="description" content="ময়মনসিংহ জেলার সুপ্রিম কোর্ট ও জজ কোর্টের অভিজ্ঞ আইনজীবীদের তালিকা। যোগাযোগের জন্য ফোন নম্বরসহ বিস্তারিত তথ্য।" />
        <meta name="keywords" content="ময়মনসিংহ, আইনজীবী, সুপ্রিম কোর্ট, জজ কোর্ট, এডভোকেট, আইন" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {combinedProfiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            mobile={profile.mobile}
            designation={profile.designation}
          />
        ))}
      </div>
    </>
  );
};

export default LawyerPage;