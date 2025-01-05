// src/pages/RootPage.jsx
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function RootPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "75vh" }}>
        <p>Here we go!</p>
      </main>
      <Footer />
    </>
  );
}

