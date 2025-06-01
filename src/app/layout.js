import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

// ✅ Metadata with Google verification
export const metadata = {
  title: "Smart Bhaluka - স্মার্ট ভালুকা",
  description: "ভালুকা উপজেলার সকল তথ্য, সেবা ও যোগাযোগ এক প্ল্যাটফর্মে। আবাসন, রক্তদাতা, শ্রমিক ও স্থানীয় সেবা সহজে খুঁজুন।",
  other: {
    'google-site-verification': 'Y25R2H8ZXaJDHU82-W_6dguROUmmpVZjRkzCJND7BSs',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        {/* Google Search Console fallback meta tag */}
        <meta name="google-site-verification" content="Y25R2H8ZXaJDHU82-W_6dguROUmmpVZjRkzCJND7BSs" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
