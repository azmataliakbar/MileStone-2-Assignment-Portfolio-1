// src/app/contact/page.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="main">
      <h1 className="title">Contact Me</h1>
      <p className="description-2">Feel free to reach out for collaborations or job opportunities.</p>

      {/* General Information */}
      <div className="infoBox contactInfo">
        <h2><strong>Contact Information</strong></h2>
        <ul>
          <li>Name: Azmat Ali</li>
          <li>azmat36@yahoo.com</li>
          <li>azmat136@hotmail.com</li>
          <li>azmataliakbar@gmail.com</li>
          <li>Ph: 00-92-333-2236799</li>
          <li>WatsApp: 00-92-333-2236799</li>
          <li>Linkedin: www.linkedin.com/in/azmat-ali-akbar-3246282b</li>
        </ul>
      </div>
      
      <Link href="/">
        <button className="navButton">Home</button>
      </Link>
      <Link href="/About">
        <button className="navButton">About Me</button>
      </Link>
      <h4>Author: Azmat Ali</h4>
    </main>
  );
}
