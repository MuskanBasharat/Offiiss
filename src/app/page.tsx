// app/page.tsx
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ForImporters from "./components/ForImporters";
import { ForAgents } from './components/ForAgents';
import ForDrivers from "./components/ForDrivers";
import AppDownload from "./components/AppDownload";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="body">
      <Header/>
      <Navbar />
      <Hero />
      <Features />
      <ForImporters />
      <ForAgents/>
      <ForDrivers />
      <AppDownload />
      <TrustedBy />
      <Footer />
    </div>
  );
}