
// src/app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="aboutContainer">
      <h1 className="title">About Me</h1>
      <p className="description">
        I am Electrical Engineer with a passion to work HV Power Stations & HV Power Sub Stations.
      </p>
      <p className="description">
        I am App & Web developer with a passion for creating beautiful and functional app & websites.
      </p>

      {/* General Information */}
      <div className="infoBox generalInfo">
        <h2><strong>General Information</strong></h2>
        <br />
        <ul className="about-ul">
          <li>Name: Azmat Ali</li>
          <li>Profession: Electrical Engineer  ( Power )</li>
          <li>Profession: Software Engineer</li>
          <li>Nationality: Pakistani</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="educationSection">
        <div className="infoBox education edu-1">
          <h2><strong>Education 1</strong></h2>
          <br />
          <ul className="about-ul">
            <li>High School: 1978, Ist Division Marks, Karachi, Pakistan</li>
            
            <li>DAE Electrical: 1984, Ist Division Marks, Karachi, Pakistan</li>
            <li>Note: Attended many seminars & training courses during job</li>
          </ul>
        </div>
        <div className="infoBox education edu-2">
          <h2><strong>Education 2</strong></h2>
          <br />
          <ul className="about-ul">
            <li>Enrolled in: GIAIC IT program, Batch-1</li>
            <li>January 2024, Karachi, Pakistan</li>
            <li>GIAIC IT Program: AI, Metaverse, Web 3.0 (In Progress)</li>
            <li>1st Quarter: Passed with grade <strong>&#39;A&#39;</strong> , August 2024</li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experienceSection">
        <div className="infoBox experience exp-1">
          <h2><strong>Experience</strong></h2>
          <br />
          <ul className="about-ul">
            <li>Mangla Hydro Power Station (Pakistan): 4 Years Experience</li>
            <li>Mangla Hydro Power Station (Pakistan): 1st Position in Basic Operation Training</li>
            <li>National Power Control Center (Pakistan): 3 Years Experience</li>
            <li>National Grid (Saudi Arabia): 30 Years Experience</li>
            <li>National Grid (Saudi Arabia): Employee of the year in 2008</li>
          </ul>
        </div>
        
<div className="infoBox experience">
  <h2><strong>Skills</strong></h2>
  <br />
  <div className="skillItem">
    <span className="skillLabel">HTML 80% :</span>
    <div className="skillBar html"><span></span></div>
  </div>
  <div className="skillItem">
    <span className="skillLabel">CSS 60% :</span>
    <div className="skillBar css"><span></span></div>
  </div>
  <div className="skillItem">
    <span className="skillLabel">Tailwind CSS 50% :</span>
    <div className="skillBar tailwind"><span></span></div>
  </div>
  <div className="skillItem">
    <span className="skillLabel">TypeScript 60% :</span>
    <div className="skillBar typescript"><span></span></div>
  </div>
  <div className="skillItem">
    <span className="skillLabel">Next.js 60% :</span>
    <div className="skillBar nextjs"><span></span></div>
  </div>
</div>

      </div>

      <Link href="/">
        <button className="navButton">Home</button>
      </Link>
      <Link href="/Contact">
        <button className="navButton">Contact Me</button>
      </Link>
      <h4>Author: Azmat Ali</h4>
    </div>
  );
}
