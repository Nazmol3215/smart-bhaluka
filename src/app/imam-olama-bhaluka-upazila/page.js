"use client";
import Head from "next/head";
import Image from "next/image";

const manualProfiles = [
  { image: "/Images/abdulmalek.png", name: 'মুফতি আব্দুল মালেক', phone: '০১৭৩৪ ২৬৮২৮৪', profession: 'সভাপতি', address: 'মল্লিকবাড়ী' },
  { image: "/Images/mamonur.png", name: 'মাওলানা মামুনুুর রশিদ', phone: '01713578093', profession: 'সাধারণ সম্পাদক', address: 'মল্লিকবাড়ী' },
  { name: 'মাওলানা মশিউর রহমান', phone: '0110901010', profession: 'সহ', address: 'মল্লিকবাড়ী' },
  { name: 'হাঃ মাও: আব্দুর রহমান', phone: '00101010111', profession: 'সহ: সভাপতি', address: 'মল্লিকবাড়ী' },
  { image: "/Images/rofiq.png", name: 'ক্বারী রফিকুল ইসলাম', phone: '০১৭২২৫৭৫১৫২', profession: 'সহ সভাপতি', address: 'ভালুকা' },
  { name: 'মাওলানা আনোয়ার হুসাইন মাহমুদী', phone: '০১৭১৬৫১৫৮৯০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'মুফতি আতিকুল ইসলাম', phone: '০১৬৮০২৮৯১৬০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'ডা. মাও: নাসির উদ্দিন', phone: '001010101', profession: 'সহ: সভাপতি', address: 'ভালুকা' },
  { image: "/Images/Jahangir.png", name: 'মুফতি সালাহ্ উদ্দিন জাহাঙ্গীর', phone: '০১৭১১-৯৮৮১৫৯', profession: 'সাধারণ সম্পাদক', address: 'ধামশুর' },
  { name: 'মুফতি মাসউদুর রহমান', phone: '০১৮৪০ ৩৩৭৭৭৩', profession: 'গোবুদিয়া', address: 'ভালুকা' },
  { name: 'মাওলানা আজিজুল হক', phone: '০১৬২৬৩৪১৬৯১', profession: 'সহ: সাধারণ সম্পাদক', address: 'অয়াবহ' },
  { image: "/Images/ibrahim.png", name: 'মুফতি ইব্রহীম খলীল', phone: '০১৭১৬১৩৮৮৭০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'নয়নপুর' },
  { name: 'মুফতি ওমর ফারুক', phone: '017০০০56০০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'গাদুমিয়া' },
  { name: 'হাঃ মাও। মনিরুজ্জামান', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'নয়নপুর' },
  { image: "/Images/fourkan.png", name: 'মুফতি ফুরকার আহমেদ', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'ভায়াবহ' },
  { image: "/Images/hodanazmol.png", name: 'মাওলানা নাজমুল হুদা', phone: '০১৮৯৩৭১৭৮৭৫', profession: 'সহদফতর সম্পাদক', address: 'নয়নপুর' },
  { name: 'মাওলানা রফিকুল ইসলাম', phone: '001010101', profession: 'সহ দফতর সম্পাদক', address: 'ভায়াবহ' },
  { name: 'মুফতি হারুনুর রশিদ', phone: '0101010110', profession: 'প্রচার সম্পাদক', address: 'মল্লিকবাড়ী' },
  { name: 'হাঃ মাও। আবু বকর', phone: '০১৬০৯৮৩১১৮', profession: 'সহ প্রচার সম্পাদক', address: 'ভালুকা' },
  { name: 'রফিকুল ইসলাম', phone: '01709158834', profession: 'কোষাদক্ষ', address: 'মল্লিকবাড়ী' },
  { name: 'মোঃ শাহ আলী', phone: '০১৭৭১৯০৭১৩০', profession: 'সহকোষাদক্ষ', address: 'মল্লিকবাড়ী' },
  { name: 'রফিকুল ইসলাম মুন্সী', phone: '০১৭০৭৫৭৪৮৬৪', profession: 'দা ও তা বিষঃ সম্পঃ', address: 'ধামশুর' },
  { name: 'মাও: মাহফুজুল হক', phone: '০১৮৮৯৩৬৯৯৯৪', profession: 'দাওয়াহ ও তালীম বিষঃ সম্পঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি আবু বকর', phone: '০১৭২২৫৭৫১৫২', profession: 'দওয়াহ ও  প্রশিক্ষণ বিষঃ সম্পাঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি নাজমুল হাসান', phone: '01709158834', profession: 'সহ দওয়াহ ও  প্রশিক্ষণ সম্পাঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি শমছুজ্জামান', phone: '01709158834', profession: 'সমাজ কল্যাণ সম্পাদক', address: 'মামারিশপুর' },
  { name: 'মুফতি আফজাল হুসাইন', phone: '01709158834', profession: 'সহ সমাজ কল্যাণ', address: 'সাতেঙ্গা' },
  { name: 'মুফতি বুরহান উদ্দিন', phone: '০১৬১৮৩৪০৫৩২', profession: 'সম্মানিত সদস্য', address: 'নয়নপুর' },
  { name: 'মাওলানা রাকিবুল হাসান', phone: '01709158834', profession: 'সম্মানিত সদস্য', address: 'মল্লিকবাড়ী' },
  { name: 'মাওলানা মাহমুদুল হাসান', phone: '01709158834', profession: 'সম্মানিত সদস্য', address: 'মল্লিকবাড়ী' },
 // ... বাকিগুলো আগের মতোই থাকবে ...
];

const callPhone = (phone) => {
  window.location.href = `tel:${phone}`;
};

const ProfileCard = ({ profile }) => (
  <div className="card text-center shadow-sm w-100" style={{ borderRadius: "15px", padding: "1px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", margin: "10px 0" }}>
   <Image
  src={profile.image || "/images/ra.png"}
  className="card-img-top mx-auto mt-3"
  width={200}
  height={200}
  style={{
    objectFit: "cover",
    border: "3px solid #007bff",
    borderRadius: "50%", // একেবারে গোল করার জন্য
    width: "200px",
    height: "200px"
  }}
  alt="Profile"
/>

    <div className="card-body">
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
                📞
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ধরন</td>
            <td>{profile.profession}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ঠিকানা</td>
            <td>{profile.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default function ImamOlama() {
  return (
    <>
      <Head>
        <title>ইমাম-ওলামা পরিষদ | ভালুকা উপজেলা শাখা</title>
        <meta name="description" content="ভালুকা উপজেলার সম্মানিত ইমাম-ওলামা পরিষদের সদস্যবৃন্দের নাম, যোগাযোগ নম্বর ও অন্যান্য তথ্যাবলি।" />
        <meta name="keywords" content="ইমাম, ওলামা, ভালুকা, মসজিদ, ইসলামিক পরিষদ, ধর্মীয় নেতৃবৃন্দ" />
        <meta property="og:url" content="https://example.com/imam-olama-bhaluka-upazila" />
      </Head>

      <div
        className="container py-4"
        style={{
          background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
          borderRadius: "18px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
          padding: "32px 18px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            color: "#1a237e",
            letterSpacing: "1px",
            textShadow: "0 2px 8px #b3c6ff",
          }}
        >
          ভালুকা ইমাম-ওলামা পরিষদ
        </h2>
        <p
          className="text-center mb-4"
          style={{
            fontSize: "1.15rem",
            color: "#333",
            background: "#f5f7fa",
            borderRadius: "10px",
            padding: "16px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            border: "1px solid #e3e6f0",
            marginBottom: "30px",
          }}
        >
          ইমাম-উলামা পরিষদ মল্লিক বাড়ি শাখা কমিটির সকল সদস্যবৃন্দের পরিচিতি এখানে তুলে ধরা হয়েছে। 
          এই কমিটির সদস্যরা ধর্মীয়, সামাজিক ও নৈতিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করে থাকেন। 
          তাদের নাম, পদবী, যোগাযোগ নম্বর ও ঠিকানা নিচে তালিকাভুক্ত করা হয়েছে, যাতে সহজেই যোগাযোগ করা যায়।
        </p>

        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"
          style={{ marginBottom: "30px" }}
        >
          {manualProfiles.map((profile, index) => (
            <div className="col" key={index}>
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>

        <div
          className="mt-5"
          style={{
            background: "#f0f4ff",
            borderRadius: "12px",
            padding: "22px 18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            border: "1px solid #dbeafe",
          }}
        >
          <h4
            className="mb-3"
            style={{
              color: "#0d47a1",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              marginBottom: "18px",
            }}
          >
            কমিটির উদ্দেশ্য ও কার্যক্রম
          </h4>
          <ul style={{ fontSize: "1.08rem", color: "#444", marginLeft: "18px", lineHeight: "2" }}>
            <li>স্থানীয় মসজিদ ও মাদ্রাসার উন্নয়নমূলক কাজে অংশগ্রহণ।</li>
            <li>ধর্মীয় শিক্ষা ও সমাজকল্যাণমূলক কার্যক্রম পরিচালনা।</li>
            <li>ইসলামিক মূল্যবোধ প্রচার ও সম্প্রসারণ।</li>
            <li>সদস্যদের মধ্যে পারস্পরিক সহযোগিতা ও সৌহার্দ্য বৃদ্ধি।</li>
            <li>প্রয়োজনে স্থানীয় জনগণের পাশে দাঁড়ানো ও সহায়তা প্রদান।</li>
          </ul>
        </div>
      </div>
    </>
  );
}
