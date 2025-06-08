"use client";
import Head from "next/head";
const profiles = [
 { name: 'এম. এ জাহাঙ্গীর খান উজ্জ্বল', phone: '০১৯১১-৮৩১৬৩৭', media: 'সমকাল', email: 'example@email.com' },
        { name: 'এম.এ. বকুল', phone: '০১৯১৭-৮৫৩৬৩৬', media: 'দৈনিক বকুলের সময়', email: 'example@email.com' },
        { name: 'আব্দুস রহমান তুষার', phone: '০১৯১৭-৮৫৯৬৩৩', media: 'দৈনিক সংবাদ', email: 'example@email.com' },
        { name: 'মো. আজাদুর রহমান সুমন', phone: '০১৯১৬-৮৫৩৬৩৪', media: 'এটিএন নিউজ ও বাংলাদেশ প্রতিদিন', email: 'example@email.com' },
        { name: 'মো. মশিউর রহমান খান', phone: '০১৯১৫-৮৫২৬৩৩', media: 'দৈনিক মানবজমিন', email: 'example@email.com' },
        { name: 'আলাউদ্দিন ফারুক', phone: '০১৯১৬-৮৫৮৬৩৪', media: 'দৈনিক নয়া দিগন্ত', email: 'example@email.com' },
        { name: 'অসীম কান্তি সরকার', phone: '০১৯১১-৮৫৩৮৩৬', media: 'দৈনিক জনতা', email: 'example@email.com' },
        { name: 'মো. কামরুল হেদায়েত চন্দন', phone: '০১৯১৩-৮৫৩৮৩৭', media: 'দৈনিক জনকন্ঠ', email: 'example@email.com' },
        { name: 'মো. মোহাম্মদ ইমরান সুমন', phone: '০১৯১৫-৮৫৮৩৮৬', media: 'দৈনিক ইনকিলাব', email: 'example@email.com' },
        { name: 'মো. মাসুম হোসেন', phone: '০১৯১৩-৮৫৩৮৪৮', media: 'এনটিভি', email: 'example@email.com' },
        { name: 'মো. রিয়াজুল ইসলাম রিয়াজ', phone: '০১৯১১-৮৫৩৮৪৯', media: 'আজকের ময়মনসিংহ', email: 'example@email.com' },
        { name: 'মো. জহিরুল ইসলাম', phone: '০১৯১৫-৮৫৮৬৮৫', media: 'চ্যানেল টিভি', email: 'example@email.com' },
        { name: 'মো. রশিদুল ইসলাম রশিদ', phone: '০১৯১১-৮৫৩৮৬৮', media: 'আরটিভি ও সমকাল', email: 'example@email.com' },
        { name: 'রুহেল রায়', phone: '০১৯১৬-৮৫৩৮৬৬', media: 'দৈনিক কল্যাণ', email: 'example@email.com' },
        { name: 'শাহ হায়দার আলী', phone: '০১৯১৩-৮৫৩৬৩৬', media: 'দৈনিক আলোকিত বাংলাদেশ', email: 'example@email.com' },
        { name: 'কামরুল হাসান পার্থ কামাল', phone: '০১৯১৩-৫৮৪০৪৮', media: 'দৈনিক ইত্তেফাক', email: 'example@email.com' },
        { name: 'এম.এ. শাজাহান সেলিম', phone: '০১৯১৩-১২৫৮৫৬', media: 'দৈনিক চিঠি', email: 'example@email.com' },
        { name: 'কামরুজ্জামান দানিশ', phone: '০১৯১১-৮৫৮০৩৬', media: 'দৈনিক ইত্তেফাক', email: 'example@email.com' },
        { name: 'সাব্বির রহমান শুভ্র', phone: '০১৯১৭-৮৫৮০৩৭', media: 'বাংলাদেশ সময়', email: 'example@email.com' },
        { name: 'এডভোকেট এস.এম. জামান', phone: '০১৯১৬-৮৫০৫৩৯', media: 'দৈনিক মযলুম সংবাদ', email: 'example@email.com' },
        { name: 'মো. শাহাব উদ্দিন', phone: '০১৯১৯-৮৫০৫৪২', media: 'দৈনিক গফরগাঁও', email: 'example@email.com' },
        { name: 'আবু সাঈদ খুররম', phone: '০১৯১৬-৮৫৮৪১২', media: 'ভোরের কাগজ', email: 'example@email.com' },
        { name: 'আলমগীর হক বিপ্লব', phone: '০১৯১৭-৮৫৩৮৪৪', media: 'বাংলাদেশ সময়', email: 'example@email.com' },
        { name: 'মোহাম্মদ আব্দুল আলী', phone: '০১৯১২-৮৫৮৪৪১', media: 'ঢাকা মুরুল্লিয়া ও এশিয়া চিঠি', email: 'example@email.com' },
        { name: 'মো. রুহুল আমিন খান', phone: '০১৯১৩-৮৫৮৮৪৪', media: 'চ্যানেল ২৪', email: 'example@email.com' },
        { name: 'শফিকুল ইসলাম সুমন', phone: '০১৯১৪-৮৫৩৮৫৫', media: 'দৈনিক মানবজমিন', email: 'example@email.com' },
        { name: 'মো. মনিরুল ইসলাম রবিন', phone: '০১৯১১-৮৫৩৮৫৬', media: 'দৈনিক ঢাকার ডাক', email: 'example@email.com' },
        { name: 'মোহাম্মদ শরিফুল ইসলাম', phone: '০১৯১৩-৮৫৩৬৮৬', media: 'প্রতিদিন সংবাদ ও আওয়াজের রেডিও', email: 'example@email.com' },
        { name: 'আবুল কালাম আজাদ', phone: '০১৯১১-৮৫৩৮৬৩', media: 'দৈনিক আলোর সংবাদ', email: 'example@email.com' },
        { name: 'মো. আহসানুল হক', phone: '০১৯১৩-৮৫৮০৩৪', media: 'বাংলাদেশ সময়', email: 'example@email.com' },
        { name: 'মো. মাহফুজুর রহমান মুনির', phone: '০১৯১৫-৮৫৮৪৫০', media: 'ঢাকা পত্রিকা', email: 'example@email.com' },
        { name: 'মো. আমিরুল ইসলাম রনি', phone: '০১৯১১-৮৫৩৮৬৪', media: 'বাংলাদেশ সংবাদ ও আওয়াজ রেডিও', email: 'example@email.com' },
        { name: 'মো. শরিফুল ইসলাম', phone: '০১৯১৩-৮৫৩৮৬৫', media: 'দৈনিক মানবকণ্ঠ', email: 'example@email.com' },
        { name: 'আবু সাঈদ আনছারী', phone: '০১৯১৪-৮৫৩৮৬৬', media: 'প্রতিদিন সংবাদ', email: 'example@email.com' },
        { name: 'মোহাম্মদ আব্দুর রহমান', phone: '০১৯১১-৮৫৮০৪৩', media: 'এটিএন বাংলা ও আজকের সংবাদ', email: 'example@email.com' },
  // ... আরও প্রোফাইল
];

// ফোনে কল করার ফাংশন
const callPhone = (phone) => {
  window.location.href = `tel:${phone}`;
};

// প্রোফাইল কার্ড কম্পোনেন্ট
const ProfileCard = ({ profile }) => {
  return (
    <div className="card text-center shadow-sm w-100" style={{ borderRadius: "15px", padding: "1px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
      <img
        src={profile.image || "https://via.placeholder.com/100"}
        className="card-img-top rounded-circle mx-auto mt-3"
        style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #007bff" }}
        alt="Profile"
      />
      <div style={{ padding: "1px 2px", margin: "4px" }} className="card-body">
        <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{profile.name}</h5>
        <table className="table table-bordered" style={{ fontSize: "0.9rem", backgroundColor: "#fff" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>নাম্বার</td>
              <td>
                {profile.phone}
                <button
                  className="btn btn-sm btn-outline-success ms-2"
                  onClick={() => callPhone(profile.phone)}
                  style={{ padding: "1px 5px", fontSize: "0.8rem", fontWeight: "bold" }}
                >
                  <i >📞</i>
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ধরন</td>
              <td>{profile.media}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ইমেল</td>
              <td>{profile.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// মূল কম্পোনেন্ট
const JournalistsList = () => {
  // সরাসরি রানটাইমে প্রোফাইল এলোমেলো করুন
  const shuffledProfiles = [...profiles].sort(() => 0.5 - Math.random());

  return (
    <>
      <Head>
        <title>সাংবাদিকদের তালিকা | স্মার্ট ভালুকা</title>
        <meta name="description" content="ভালুকা উপজেলার সাংবাদিকদের তালিকা, ফোন নাম্বার, মিডিয়া ও যোগাযোগের তথ্য।" />
        <meta name="keywords" content="ভালুকা সাংবাদিক, ভালুকা মিডিয়া, ভালুকা উপজেলা, সাংবাদিকদের ফোন নাম্বার, Bhaluka journalists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container py-4">
        {/* ইউজার বুঝতে পারবে এমন টেক্সট */}
        <div className="alert alert-info text-center fs-5 fw-bold mb-4" role="alert" style={{ borderRadius: "10px" }}>
          নিচে ভালুকা উপজেলার সাংবাদিকদের প্রোফাইল, ফোন নাম্বার ও মিডিয়া সম্পর্কিত তথ্য দেওয়া হলো।
        </div>

        <h2 className="text-center mb-4">ভালুকা উপজেলার সাংবাদিকদের তালিকা</h2>

        {/* প্রোফাইল কার্ড */}
        <div className="row g-3">
          {shuffledProfiles.map((profile, idx) => (
            <div key={idx} className="col-md-4">
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JournalistsList;
