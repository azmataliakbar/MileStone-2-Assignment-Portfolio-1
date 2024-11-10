// src/app/home/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="main">
      <h1 className="title">Welcome to My Portfolio</h1>

      {/* Profile Image Section */}
      <div className="profileImageContainer">
          <Image
          src="/azq212.png"
          alt="Your Name"
          height={200}
          width={200}
          className="profileImage"
          />
      </div>

      <p className="description">Showcasing my work and skills in web development.</p>

      <Link href="/About">
        <button className="navButton">About Me</button>
      </Link>
      <Link href="/Contact">
        <button className="navButton">Contact Me</button>
      </Link>

      <section className="portfolioSection">
  <h2 className="portfolioTitle">My Projects</h2>
  
  <div className="portfolioItem">
    <div className="imagePlaceholder">
      <Image
        src="/pr1.png"
        alt="Project 1"
        width={300}
        height={300}
        className="projectImage"
      />
    </div>
    <div className="projectDetails">
      <p>Project 1</p>
      <p>For details click the below link</p>
      <Link className="project-link" href="https://assignment-web-page1.netlify.app/" target="_blank" rel="noopener noreferrer"><b>Web Page Design</b></Link>
    </div>
  </div>

  <div className="portfolioItem">
    <div className="imagePlaceholder">
      <Image
        src="/pr2.png"
        alt="Project 2"
        width={300}
        height={300}
        className="projectImage"
      />
    </div>
    <div className="projectDetails">
      <p>Project 2</p>
      <p>For details click the below link</p>
      <Link className="project-link" href="https://azmataliakbar-nextjs-assignment-3.netlify.app/" target="_blank" rel="noopener noreferrer"><b>Web Page with Figma design</b></Link>
    </div>
  </div>

  <div className="portfolioItem">
    <div className="imagePlaceholder">
      <Image
        src="/pr3.png"
        alt="Project 3"
        width={300}
        height={300}
        className="projectImage"
      />
    </div>
    <div className="projectDetails">
      <p>Project 3</p>
      <p>For details click the below link</p>
      <Link className="project-link" href="https://azmat-sample-reume-from-figma-design.netlify.app/" target="_blank" rel="noopener noreferrer"><b>Portfolio with Figma design</b></Link>
    </div>
  </div>

  <div className="portfolioItem">
    <div className="imagePlaceholder">
      <Image
        src="/pr4.png"
        alt="Project 4"
        width={300}
        height={300}
        className="projectImage"
      />
    </div>
    <div className="projectDetails">
      <p>Project 4</p>
      <p>For details click the below link</p>
      <Link className="project-link" href="https://azmatalaiakbar-audio-player-awno3k2s9.vercel.app/" target="_blank" rel="noopener noreferrer"><b>Audio Player App</b></Link>
    </div>
  </div>

  <div className="portfolioItem">
    <div className="imagePlaceholder">
      <Image
        src="/pr5.png"
        alt="Project 5"
        width={300}
        height={300}
        className="projectImage"
      />
    </div>
    <div className="projectDetails">
      <p>Project 5</p>
      <p>For details click the below link</p>
      <Link className="project-link" href="https://azmataliakbar-snake-game-2b7uhyw7u-azmat-alis-projects-eb08bc9e.vercel.app/" target="_blank" rel="noopener noreferrer"><b>Snake Game App</b></Link>
    </div>
  </div>
  
  <div className="portfolioItem">
  <div className="appDetails">
      <p>Projects List</p>
      <p>For details click link</p>
      <ul>
        <li><a href="https://azmatali-birthday-wish.vercel.app/">1.	Birthday: </a></li>
        <li><a href="https://azmataliakbar-bmi-calculator.vercel.app/ ">2.	BMI:  </a></li>
        <li><a href="https://azmataliakbar-color-picker.vercel.app/">3.	 Color_Picker: </a></li>
        <li><a href="https://azmataliakbar-digital-clock-1.vercel.app/ ">4.	Digital_Clock: </a></li>
        <li><a href="https://azmataliakbar-html-previewer-1.vercel.app/">5.	HTML_Previewer: </a></li>
        <li><a href="https://azmataliakbar-count-down-timer.vercel.app/">6.	Count_Down_Timer: </a></li>
        <li><a href="https://azmataliakbar-number-guessing-game.vercel.app/">7.	Guess_Number: </a></li>
        <li><a href="https://azmataliakbar-password-generator-1.vercel.app/ ">8.	Password_Genrato: </a></li>
        <li><a href="https://azmataliakbar-pomodoro-timer.vercel.app/">9.	Pomodoro_Timer: </a></li>
        <li><a href="https://azmataliakbar-simple-calculator-1.vercel.app/">10. Simple_Calculator: </a></li>
        <li><a href="https://azmataliakbar-tip-calculator.vercel.app/ ">11. Tip_Calculator: </a></li>
        <li><a href="https://azmataliakbar-unit-converter.vercel.app/">12.Unit_Converter: </a></li>
        <li><a href="https://azmataliakbar-random-joke.vercel.app/">13.Random_Jok: </a></li>
        <li><a href="https://azmataliakbar-weather-widget.vercel.app/ ">14. Weather_Widget: </a></li>
        <li><a href="https://azmataliakba-rexpense-tracker.vercel.app/ ">15.Expence_Tracker: </a></li>
        <li><a href="https://azmataliakbar-search-movie.vercel.app/ ">16. Search Movie: </a></li>
        <li><a href="https://azmataliakbar-mem-generator.vercel.app/">17. Memes Generator: </a></li>
        <li><a href="https://azmataliakbar-currency-converter.vercel.app/ ">18. Currency Converter:  </a></li>
        <li><a href="https://azmataliakbar-git-hub-viewer.vercel.app/ ">19. GitHub Viewer:  </a></li>
        <li><a href="https://azmataliakbar-search-a-recipe.vercel.app/  ">20. Search Recipe:  </a></li>
        <li><a href="https://azmataliakbar-word-counter.vercel.app/">21. Word Counter: </a></li>
        <li><a href="https://azmatalaiakbar-note-tracker.vercel.app/">22. Word Counter:  </a></li>
        <li><a href="https://azmataliakbar-image-sider.vercel.app/ ">23. Image Slider:  </a></li>
        <li><a href="https://azmataliakbar-quiz-app.vercel.app/ ">24. Quiz App:  </a></li>
        <li><a href="https://azmataliakbar-stop-watch.vercel.app/">25. Stop Watch:  </a></li>
        <li><a href="https://azmataliakbar-snake-game.vercel.app/">26. Snake Game:  </a></li>
        <li><a href="https://url-shortner-orcin-kappa.vercel.app/ ">27. URL  Shortner:  </a></li>
        <li><a href="https://azmataliakbar-todo-list.vercel.app/ ">28. To Do List: </a></li>
        <li><a href="https://azmataliakbar-random-user-generator.vercel.app/ ">29. User Generator:</a></li>
        <li><a href="https://azmatalaiakbar-audio-player.vercel.app/">30. Music Player:</a></li>
        <li><a href="https://azmataliakbar-love-typescript.vercel.app/ ">31. Love Typescript</a></li>
        <li><a href="https://azmataliakbar-zikar-allah.vercel.app/">32.	Tasbih, Zikar Allah:  </a></li>
        <li><a href="https://azmataliakbar-radio-quran.vercel.app/ ">33.	Quran Kareem, FM 93.4 :  </a></li>
        <li><a href="https://azmataliakbar-country-information.vercel.app/ ">34.	Country Flags: </a></li>
        <li><a href="https://azmataliakbar-prayer-clock.vercel.app/ ">35.	Prayer Clock: </a></li>
        <li><a href="https://azmataliakbar-roll-a-dice.vercel.app/ ">36.	Chakka: </a></li>
        <li><a href="https://azmataliakbar-flip-a-coin.vercel.app/ ">37. Toss: </a></li>
        <li><a href="https://azmataliakbar-birthday-wish-2.vercel.app/">38.	 Bithday Wish - 2: </a></li>
        <li><a href="https://chap13-html.netlify.app/">39. Cards: </a></li>
        <li><a href="https://chap6-html.netlify.app/">40. Perodic Table: </a></li>
        <li><a href="https://azmataliakbar-image-slider1.netlify.app/">41. Image Slider: </a></li>
        <li><a href="https://azmataliakbar-video-clip-slider1.netlify.app/">42. Video Clip Slider: </a></li>
        <li><a href="https://chap10-percentage-calculator.netlify.app/">43. Percentage Calculator: </a></li>
        <li><a href="https://profit-calculator-by-azmat.netlify.app/">44. Profit Calculator: </a></li>
        <li><a href="https://azmataliakbar-icons-calendar.netlify.app/ ">45.Icons & Calander: </a></li>
        <li><a href="https://azmataliakbar-invoice-generator.netlify.app/ ">46.Invoice Generator: </a></li>
        <li><a href="https://azmataliakbar-nextjs-assignment2.netlify.app/">47.Sample of Cards: </a></li>
      </ul>
    </div>
    </div>
</section>

<h4>Author: Azmat Ali</h4>
    </main>
  );
}
