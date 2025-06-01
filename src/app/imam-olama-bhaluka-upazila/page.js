"use client";
import Head from "next/head";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

const manualProfiles = [
  { image: "/assets/Images/734-268284.png", name: 'মুফতি আব্দুল মালেক', phone: '০১৭৩৪ ২৬৮২৮৪', profession: 'সভাপতি', address: 'মল্লিকবাড়ী' },
  { name: 'মাওলানা মশিউর রহমান', phone: '0110901010', profession: 'সহ', address: 'মল্লিকবাড়ী' },
  { name: 'হাঃ মাও: আব্দুর রহমান', phone: '00101010111', profession: 'সহ: সভাপতি', address: 'মল্লিকবাড়ী' },
  { image: "/assets/Images/722-575152.png", name: 'ক্বারী রফিকুল ইসলাম', phone: '০১৭২২৫৭৫১৫২', profession: 'সহ সভাপতি', address: 'ভালুকা' },
  { name: 'মাওলানা আনোয়ার হুসাইন মাহমুদী', phone: '০১৭১৬৫১৫৮৯০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'মুফতি আতিকুল ইসলাম', phone: '০১৬৮০২৮৯১৬০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'ডা. মাও: নাসির উদ্দিন', phone: '001010101', profession: 'সহ: সভাপতি', address: 'ভালুকা' },
  { image: "/assets/Images/711-988159.png", name: 'মুফতি সালাহ্ উদ্দিন জাহাঙ্গীর', phone: '০১৭১১-৯৮৮১৫৯', profession: 'সাধারণ সম্পাদক', address: 'ধামশুর' },
  { name: 'মুফতি মাসউদুর রহমান', phone: '০১৮৪০ ৩৩৭৭৭৩', profession: 'গোবুদিয়া', address: 'ভালুকা' },
  { name: 'মাওলানা আজিজুল হক', phone: '০১৬২৬৩৪১৬৯১', profession: 'সহ: সাধারণ সম্পাদক', address: 'অয়াবহ' },
  { name: 'মুফতি ইব্রহীম খলীল', phone: '০১৭১৬১৩৮৮৭০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'নয়নপুর' },
  { name: 'মুফতি ওমর ফারুক', phone: '017০০০56০০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'গাদুমিয়া' },
  { name: 'হাঃ মাও। মনিরুজ্জামান', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'নয়নপুর' },
  { name: 'মুফতি ফুরকার আহমেদ', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'ভায়াবহ' },
  { image: "/assets/Images/naz.png", name: 'মাওলানা নাজমুল হুদা', phone: '০১৮৯৩৭১৭৮৭৫', profession: 'সহদফতর সম্পাদক', address: 'নয়নপুর' },
  { name: 'মাওলানা রফিকুল ইসলাম', phone: '001010101', profession: 'সহ দফতর সম্পাদক', address: 'ভায়াবহ' },
  { name: 'মুফতি হারুনুর রশিদ', phone: '0101010110', profession: 'প্রচার সম্পাদক', address: 'মল্লিকবাড়ী' },
  { image: "/assets/Images/609-831188.png", name: 'হাঃ মাও। আবু বকর', phone: '০১৬০৯৮৩১১৮', profession: 'সহ প্রচার সম্পাদক', address: 'ভালুকা' },
  { name: 'রফিকুল ইসলাম', phone: '01709158834', profession: 'কোষাদক্ষ', address: 'মল্লিকবাড়ী' },
  { image: "/assets/Images/771-907130.png", name: 'মোঃ শাহ আলী', phone: '০১৭৭১৯০৭১৩০', profession: 'সহকোষাদক্ষ', address: 'মল্লিকবাড়ী' },
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
      src={profile.image || "/images/foodpara.png"}
      className="card-img-top rounded-circle mx-auto mt-3"
      width={100}
      height={100}
      style={{ objectFit: "cover", border: "3px solid #007bff" }}
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

      <div className="container py-4">
        <h2 className="text-center mb-4">ভালুকা ইমাম-ওলামা পরিষদ</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {manualProfiles.map((profile, index) => (
            <div className="col" key={index}>
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
