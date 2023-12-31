import { useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    gsap.fromTo(
      "#design span",
      { y: 100, stagger: { each: 0.03 } },
      { y: 0, stagger: { each: 0.03 } }
    );
    gsap.fromTo(
      "#tomorrow span",
      { y: 100, stagger: { each: 0.03 } },
      { y: 0, stagger: { each: 0.03 }, delay: 0.3 }
    );
    gsap.fromTo(
      "#experience span",
      { y: 100, stagger: { each: 0.03 } },
      { y: 0, stagger: { each: 0.03 }, delay: 0.6 }
    );
    gsap.fromTo(
      "#turns",
      { opacity: 0 },
      { opacity: 1, duration: 0.75, delay: 1.1 }
    );
    gsap.fromTo(
      "#signature",
      { opacity: 0 },
      { opacity: 1, duration: 0.75, delay: 1.15 }
    );
    gsap.fromTo(
      "#contact",
      { opacity: 0 },
      { opacity: 1, duration: 0.75, delay: 1.2 }
    );
  }, []);
  return (
    <div className="hero">
      <main className="hero__content">
        <div className="hero__contents">
          <h1 className="hero__heading">
            <span id="design">
              <span>D</span>
              <span>E</span>
              <span>S</span>
              <span>I</span>
              <span>G</span>
              <span>N</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </span>
            <span id="tomorrow">
              <span>T</span>
              <span>O</span>
              <span>M</span>
              <span>O</span>
              <span>R</span>
              <span>R</span>
              <span>O</span>
              <span>W</span>
              <span>’S</span>
            </span>{" "}
            <span id="experience">
              <span>E</span>
              <span>X</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>E</span>
              <span>N</span>
              <span>C</span>
              <span>E</span>
              <span>S.</span>
            </span>
          </h1>
          <p id="turns" className="hero__paragraph">
            Turning Complex Challenges into Seamless Solutions.
          </p>
          <svg
            id="signature"
            className="hero__signature"
            xmlns="http://www.w3.org/2000/svg"
            width="465"
            height="30"
            viewBox="0 0 465 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7766 14.4893C77.7233 15.5405 72.9906 17.0054 68.7367 19.0068C68.2735 19.2274 68.1378 19.5248 68.0979 19.652C68.0317 19.8778 68.0644 20.0876 68.1819 20.2814C68.2554 20.406 68.3721 20.5578 68.6149 20.6506C68.7864 20.7169 69.2268 20.7633 69.8075 20.7365C70.7991 20.7006 72.3272 20.5548 73.064 20.5385C75.5869 20.5109 78.1087 20.4412 80.6319 20.4277C88.6691 20.3907 90.0741 20.4719 100.402 20.1601C112.459 19.7961 124.543 19.3615 136.609 18.8429C98.2814 21.7919 60.017 25.09 21.9475 28.2156C21.5231 28.2531 21.2047 28.6249 21.2418 29.0448C21.265 29.4791 21.6542 29.7932 22.0787 29.7558C110.912 22.4673 200.704 14.2039 290.32 11.8216C294.743 11.8222 299.152 11.8232 303.547 11.8244C330.099 11.8562 356.669 12.014 383.204 12.5792C391.842 12.7675 400.48 12.9978 409.132 13.1998C411.685 13.2558 414.252 13.3114 416.819 13.3669C418.89 13.4055 424.224 13.5965 424.975 13.594C425.655 13.5931 425.813 12.9865 425.826 12.9581C425.865 12.7609 425.833 12.5372 425.657 12.3306C425.614 12.2754 425.498 12.1238 425.241 12.0593C425.199 12.0602 424.999 12.0365 424.588 12.0035C403.24 10.7489 381.847 10.0282 360.422 9.74318C363.298 9.70778 366.175 9.65842 369.052 9.62302C391.231 9.30246 413.476 9.41516 435.622 8.15551C440.663 7.87607 445.717 7.56819 450.743 7.21895C454.126 6.99007 462.845 6.99427 464.07 6.60257C464.634 6.43586 464.753 6.04045 464.763 5.84386C464.773 5.61922 464.725 5.36779 464.466 5.14909C464.349 5.03944 463.991 4.86507 463.323 4.73956C441.475 0.550371 416.053 2.42918 393.878 1.61357C333.653 -0.635506 273.765 3.06936 213.673 6.56821C161.807 9.59109 109.905 10.8335 58.0822 14.5288C39.1138 15.8727 19.509 15.2389 0.864039 19.1846C0.440691 19.2781 0.179526 19.6765 0.259113 20.0955C0.35287 20.5142 0.769658 20.7856 1.193 20.6922C19.7533 16.7623 39.2876 17.4118 58.1851 16.0693C66.3811 15.4819 74.5785 14.9646 82.7766 14.4893ZM243.272 11.9891C211.479 12.1991 179.69 12.6472 147.883 13.5028C126.062 14.082 94.1804 10.6752 72.6636 19.0045C72.8194 19.001 72.9468 18.9982 73.0602 18.9957C75.583 18.9681 78.1048 18.8843 80.6282 18.8849C88.6513 18.8482 90.0563 18.9295 100.356 18.6183C126.693 17.8132 153.095 16.6702 179.404 15.2206C200.715 14.0494 221.999 12.949 243.272 11.9891ZM458.233 5.44074C437.599 2.3329 414.312 3.91244 393.811 3.1581C333.642 0.907778 273.796 4.61153 213.761 8.10913C186.93 9.68247 160.102 10.7648 133.291 11.959C138.439 12.0419 143.359 12.0737 147.85 11.9606C193.317 10.7339 238.786 10.3347 284.277 10.2857C312.509 9.24249 340.747 8.46573 369.034 8.06655C391.2 7.76025 413.402 7.85993 435.547 6.61427C440.575 6.33515 445.615 6.02758 450.64 5.67834C452.353 5.57044 455.456 5.51598 458.233 5.44074Z"
              fill="#777777"
            />
          </svg>
          <a href="mailto:Oguadinmajachimike@gmail.com?subject=Let%E2%80%99s%20create%20something%20amazing%20together!&body=Hi%2C%20I%E2%80%99m%20%E2%80%A6">
            <button id="contact" className="hero__btn">
              <span>—</span> <span>CONTACT ME</span>
            </button>
          </a>
        </div>

        <div className="hero__image">
          <img src="./images/Juny.png" alt="" className="hero__juney" />
        </div>
      </main>
      <svg
        className="hero__signsvg"
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="63"
        viewBox="0 0 124 63"
        fill="none"
      >
        <path
          d="M4.5 19L12 17L20.5 15L27 14.5L29.5 15.5L29 17.5L24 24L37 17L41.5 15.5L44.5 14.5L48 14L48.5 12V9.5L45.5 0.5L48.5 4.5L49 7V9.5L46.5 15.5L43.5 19.5L39.5 24L36 27L43.5 25L51 23L60 20.5L73 17L80.5 15L82.5 14.5L83 15L81.5 16.5L80 17.5L75.5 20L70 23L64 26L58.5 28.5L53 31.5L47 35L41 39L39 41L37.5 43L38 44.5H40.5L57 38L73.5 31L85 26L84.5 25.5L37 46L1 60.5L42 41.5L86.5 22L122 6"
          stroke="white"
        />
      </svg>
      <p className="hero__sign">Juney</p>
      <div className="hero__line"></div>
    </div>
  );
}

export default Hero;
