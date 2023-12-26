/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import "./Projects.css";
gsap.registerPlugin(ScrollTrigger);
let timeline;

function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".project__round",
      { rotation: 0 },
      {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 12,
      }
    );
    if (!timeline) {
      timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".work",
            start: "20% 10%",
            end: "20%+=250rem 0%",
            scrub: 13,
          },
        })
        .fromTo(
          ".projects__line",
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
          }
        );
    }
    // gsap.fromTo(
    //   "#selectline",
    //   { opacity: 0, x: 0 },

    //   {
    //     opacity: 1,
    //     x: 90,
    //     duration: 3,
    //     scrollTrigger: "#selectline",
    //   }
    // );
  }, []);
  return (
    <main id="project__main" className="projects">
      <div className="projects__header">
        <h1 className="projects__heading">SELECTED PROJECTS</h1>
        <span id="selectline" className="projects__line"></span>
      </div>
      <h3 className="projects__contents">
        Over the past years, Ive worked with amazing teams to bring dreams to
        life by creating and contributing to some awesome projects. Here are
        some of them.
      </h3>

      <svg
        className="project__round"
        width="89"
        height="89"
        viewBox="0 0 89 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.7315 6.99537L60.3978 7.56608L57.0288 17.4029C56.7281 18.2808 56.3114 18.9714 55.7787 19.4746C55.246 19.9779 54.6318 20.288 53.9361 20.4051C53.2404 20.5221 52.4938 20.4441 51.6965 20.171C50.9439 19.9133 50.3211 19.5473 49.8278 19.0731C49.3362 18.5944 49.0098 18.0422 48.8487 17.4165C48.6877 16.7908 48.7276 16.1263 48.9684 15.423L50.6079 15.9845C50.4744 16.3742 50.4541 16.7476 50.547 17.1048C50.6459 17.4589 50.838 17.775 51.1232 18.0528C51.4084 18.3307 51.7683 18.544 52.2028 18.6928C52.6821 18.857 53.1242 18.8958 53.5292 18.8093C53.9342 18.7228 54.2908 18.5146 54.5989 18.1847C54.9131 17.8519 55.1676 17.401 55.3625 16.8322L58.7315 6.99537Z"
          fill="white"
        />
        <path
          d="M76.3779 20.3979L77.6739 21.5907L71.1521 28.677C70.4788 29.4087 69.7051 29.9032 68.8312 30.1606C67.9639 30.4178 67.0661 30.4248 66.1379 30.1819C65.2129 29.9354 64.3306 29.4258 63.4909 28.6531C62.6513 27.8803 62.0704 27.0432 61.7481 26.1418C61.4291 25.2369 61.3601 24.34 61.541 23.4512C61.7287 22.5622 62.1591 21.7518 62.8325 21.0202L69.3543 13.9338L70.6503 15.1266L64.2247 22.1084C63.7437 22.631 63.4307 23.2019 63.2854 23.8212C63.1434 24.437 63.1776 25.0571 63.3878 25.6817C63.6047 26.3061 64.011 26.8924 64.6067 27.4407C65.2025 27.989 65.8205 28.3453 66.4606 28.5098C67.104 28.6707 67.7248 28.6534 68.3232 28.4576C68.9283 28.2616 69.4713 27.9023 69.9523 27.3798L76.3779 20.3979Z"
          fill="white"
        />
        <path
          d="M83.9806 44.2377L69.5677 46.1971L69.3381 44.5081L79.5867 35.1158L79.5676 34.975L68.2512 36.5134L68.014 34.7681L82.4268 32.8087L82.6565 34.4978L72.3835 43.922L72.4026 44.0628L83.7471 42.5205L83.9806 44.2377Z"
          fill="white"
        />
        <path
          d="M70.0021 48.915L83.5493 54.2106L80.3533 62.3865L78.898 61.8177L81.4527 55.2822L76.8753 53.4929L74.486 59.605L73.0307 59.0361L75.42 52.924L70.8161 51.1243L68.22 57.7656L66.7647 57.1967L70.0021 48.915Z"
          fill="white"
        />
        <path
          d="M77.643 70.9066L76.0827 72.1849L68.6592 69.4892L68.5274 69.5972L69.7097 77.406L68.1494 78.6843L66.7958 68.7388L62.997 64.1019L64.3595 62.9857L68.1583 67.6226L77.643 70.9066Z"
          fill="white"
        />
        <path
          d="M33.725 67.3494L38.0922 68.3864L34.7319 82.5383L30.1712 81.4554C28.7984 81.1295 27.6909 80.5672 26.8488 79.7687C26.0056 78.9748 25.449 77.9885 25.1789 76.81C24.9078 75.636 24.9461 74.3166 25.294 72.8516C25.644 71.3775 26.2079 70.1706 26.9858 69.2312C27.7625 68.2963 28.7209 67.6625 29.8608 67.3297C30.9996 67.0016 32.2877 67.0081 33.725 67.3494ZM36.0175 69.4997L33.4746 68.8959C32.3045 68.618 31.2811 68.6135 30.4046 68.8823C29.5281 69.1511 28.8019 69.6575 28.2262 70.4017C27.6505 71.1458 27.2259 72.0937 26.9524 73.2454C26.6811 74.3879 26.6342 75.4157 26.8115 76.3289C26.9878 77.2468 27.3942 78.0149 28.0309 78.6332C28.6665 79.2562 29.5371 79.6989 30.6427 79.9614L33.3791 80.6112L36.0175 69.4997Z"
          fill="white"
        />
        <path
          d="M28.1069 63.6155L16.6227 72.5421L11.2354 65.6112L12.469 64.6523L16.7754 70.1925L20.6558 67.1763L16.6284 61.995L17.862 61.036L21.8895 66.2174L25.7923 63.1837L21.4162 57.5538L22.6498 56.5949L28.1069 63.6155Z"
          fill="white"
        />
        <path
          d="M9.20781 47.7838C8.50234 47.9497 7.98622 48.3562 7.65947 49.0033C7.33271 49.6504 7.21905 50.4115 7.31849 51.2865C7.39119 51.9264 7.55831 52.4744 7.81984 52.9308C8.08083 53.3824 8.40769 53.7217 8.80042 53.9487C9.19261 54.171 9.61922 54.256 10.0803 54.2036C10.466 54.1598 10.7873 54.0303 11.044 53.8153C11.2955 53.5961 11.4964 53.3303 11.6467 53.0177C11.7924 52.7057 11.9058 52.3831 11.9871 52.0498C12.0636 51.7171 12.122 51.4126 12.1621 51.1364L12.3904 49.6237C12.4465 49.2361 12.5353 48.8019 12.657 48.3211C12.7782 47.8355 12.9652 47.364 13.2182 46.9063C13.4659 46.4445 13.8069 46.0484 14.2411 45.7179C14.6753 45.3874 15.2312 45.1837 15.9086 45.1067C16.6896 45.0179 17.4185 45.1424 18.0954 45.4801C18.7718 45.813 19.3402 46.3489 19.8006 47.0876C20.2605 47.8216 20.5535 48.7438 20.6797 49.854C20.7973 50.889 20.7321 51.8042 20.4842 52.5996C20.2357 53.3903 19.8373 54.036 19.289 54.5367C18.7402 55.0328 18.0738 55.3539 17.2898 55.5002L17.0845 53.6936C17.6249 53.5845 18.0557 53.3497 18.3769 52.9892C18.6928 52.6245 18.9098 52.1853 19.0277 51.6715C19.1404 51.1536 19.1642 50.6076 19.0989 50.0337C19.023 49.3656 18.8467 48.7781 18.5699 48.2711C18.2883 47.7646 17.9347 47.3783 17.5089 47.1121C17.0785 46.8465 16.5998 46.7437 16.0729 46.8035C15.593 46.8581 15.2177 47.0365 14.9471 47.3389C14.6765 47.6413 14.472 48.0219 14.3335 48.4808C14.195 48.9397 14.0841 49.4313 14.0007 49.9554L13.6947 51.7914C13.4984 52.9574 13.1365 53.904 12.6092 54.631C12.0818 55.3581 11.3313 55.777 10.3574 55.8876C9.54822 55.9796 8.81768 55.841 8.16578 55.4719C7.50863 55.0986 6.97082 54.5593 6.55233 53.8539C6.1286 53.1444 5.86434 52.3286 5.75956 51.4065C5.65371 50.475 5.72664 49.628 5.97833 48.8656C6.22533 48.1036 6.61174 47.4783 7.13759 46.9897C7.6629 46.4964 8.28882 46.1965 9.01536 46.0901L9.20781 47.7838Z"
          fill="white"
        />
        <path
          d="M6.59999 34.3919L20.7899 37.5881L20.4029 39.3065L6.21294 36.1102L6.59999 34.3919Z"
          fill="white"
        />
        <path
          d="M21.1777 18.6814C20.7074 18.5025 20.2446 18.3936 19.7893 18.3545C19.3333 18.3088 18.8902 18.3375 18.4601 18.4406C18.033 18.5399 17.6258 18.7163 17.2387 18.9697C16.8515 19.223 16.4929 19.5542 16.1627 19.9631C15.6213 20.6335 15.3022 21.383 15.2052 22.2115C15.1083 23.04 15.266 23.8885 15.6784 24.757C16.0908 25.6256 16.787 26.4554 17.7669 27.2467C18.7468 28.0379 19.7062 28.5418 20.645 28.7583C21.5839 28.9747 22.4526 28.9428 23.251 28.6625C24.0494 28.3821 24.7312 27.892 25.2964 27.1921C25.8199 26.5437 26.1428 25.8612 26.2651 25.1445C26.3867 24.4211 26.3048 23.716 26.0196 23.0292C25.7336 22.3358 25.2443 21.7094 24.5517 21.1502L24.9793 20.8017L22.2308 24.2055L21.0151 23.2239L24.4953 18.9138L25.711 19.8954C26.643 20.648 27.2928 21.5013 27.6605 22.4554C28.0311 23.4058 28.125 24.3824 27.9422 25.385C27.7588 26.381 27.3041 27.3284 26.5783 28.2272C25.7692 29.2292 24.8226 29.9193 23.7383 30.2974C22.6569 30.6719 21.5106 30.7199 20.2991 30.4416C19.0906 30.1595 17.8896 29.5366 16.696 28.5729C15.8008 27.85 15.0926 27.0804 14.5713 26.2639C14.0492 25.4407 13.7144 24.6043 13.5666 23.7547C13.4189 22.9052 13.4545 22.0697 13.6734 21.2484C13.8923 20.4271 14.2947 19.6536 14.8807 18.9279C15.3626 18.3311 15.902 17.8477 16.499 17.4778C17.0952 17.1011 17.7209 16.8425 18.3759 16.7021C19.0303 16.5549 19.6941 16.528 20.3673 16.6212C21.0368 16.7115 21.6877 16.9267 22.3199 17.2668L21.1777 18.6814Z"
          fill="white"
        />
        <path
          d="M39.8091 5.45254L43.4451 19.5362L41.7947 19.9623L31.2654 10.8857L31.1278 10.9212L33.9826 21.9791L32.2772 22.4194L28.6412 8.33573L30.2917 7.90964L40.8555 17.0066L40.9931 16.9711L38.1312 5.88573L39.8091 5.45254Z"
          fill="white"
        />
        <path
          d="M52.0607 83.0608L52.6447 68.3325L54.0544 68.1582L53.4704 82.8865L52.0607 83.0608ZM44.9965 79.8692L45.0478 78.4316L55.8181 77.1003L55.7668 78.5379L44.9965 79.8692ZM46.9856 83.6881L47.5697 68.9598L48.9794 68.7855L48.3954 83.5138L46.9856 83.6881ZM45.222 74.746L45.2733 73.3084L56.0436 71.9771L55.9923 73.4147L45.222 74.746Z"
          fill="white"
        />
      </svg>

      <div className="projects__start">
        <div className="projects__startimage">
          <img
            id="start0art"
            className="projects__img desktop"
            src="./images/sdt.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__img tablet"
            src="./images/stt.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__img phone"
            src="./images/smt.png"
            alt=""
          />
        </div>
        <div className="projects__startcontents">
          <div className="projects__startheader">
            <h1 className="projects__starto">startO</h1>
            <img
              src="./images/Startoicon.svg"
              alt=""
              className="projects__starticon"
            />
          </div>
          <h3 className="projects__startp">
            In the ever-evolving landscape of entrepreneurship, we designed
            startO to be the catalyst, seamlessly connecting startup owners with
            investors. Its intuitive design and user-friendly interface
            redefines the dynamics of collaboration, simplifying the process for
            both parties and ushering in a new era of effective investment
            matchmaking.
          </h3>
          <a href="https://www.behance.net/gallery/181918637/StartO-Casestudy">
            <button className="projects__startbtn">
              <span>—</span> VIEW CASE STUDY
            </button>
          </a>
        </div>
      </div>

      <div className="projects__pickacho">
        <div className="projects__pickachocontents">
          <div className="projects__pickachoheader">
            <img
              src="./images/Pickachoicon.svg"
              alt=""
              className="projects__pickachoicon"
            />
            <h1 className="projects__pickachohh">pikachu</h1>
          </div>
          <h3 className="projects__pickachoabout">
            Pikachu is basically a fun side project i took on with a friend, we
            designed a not-so boring app to solve the current pain points
            experienced by crypto wallet users on a global scale. It offers a
            secure, user-friendly, and feature-rich wallet for crypto users.
          </h3>
          <a href="https://www.behance.net/gallery/164242769/PiKACHU-WALLET-%28A-Fun-Project%29">
            <button className="projects__pickachobtn">
              <span>—</span> VIEW CASE STUDY
            </button>
          </a>
        </div>
        <div className="projects__pickachoimage">
          <img
            id="start0art"
            className="projects__pickachoimg desktop"
            src="./images/ptd.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__pickachoimg tablet"
            src="./images/ptt.jpg"
            alt=""
          />
          <img
            id="start0art"
            className="projects__pickachoimg phone"
            src="./images/ptm.png"
            alt=""
          />
        </div>
      </div>

      <div className="projects__truck">
        <div className="projects__truckimage">
          <img
            id="start0art"
            className="projects__truckheaderimg desktop"
            src="./images/tdt.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__truckheaderimg tablet"
            src="./images/ttt.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__truckheaderimg phone"
            src="./images/tmt.png"
            alt=""
          />
        </div>
        <div className="projects__truckcontents">
          <div className="projects__truckheader">
            <h1 className="projects__truckhh">truck dispatch</h1>
            <img
              src="./images/Truckicon.svg"
              alt=""
              className="projects__truckicon"
            />
          </div>
          <h3 className="projects__truckp">
            TruckDispatchs UI design for their road freight website harmonizes
            functionality and aesthetics, ensuring an intuitive platform for the
            seamless transportation of goods via trucks. From streamlined route
            planning to real-time tracking, I worked with the team to come up
            with an interface that prioritizes efficiency, providing a seamless
            experience that encourages clients to manage their freight logistics
            with precision and ease.
          </h3>
          <a href="https://www.gettruckdispatch.com">
            <button className="projects__truckbtn">
              <span>—</span> VIEW WEBSITE
            </button>
          </a>
        </div>
      </div>

      <div className="projects__mil">
        <div className="projects__milcontents">
          <img
            src="./images/Miliicon.svg"
            alt=""
            className="projects__milicon"
          />
          <h1 className="projects__milhh">listening</h1>

          <h3 className="projects__milabout">
            Listening is a product where you upload your documents, and it
            converts them into listenable content, offering a convenient and
            accessible way to absorb information on the go.
          </h3>
          <h3 className="projects__milabout2">
            I've meticulously redesigned the app's landing page, crafting an
            engaging space that seamlessly blends aesthetics and user
            experience.
          </h3>
          <a href="https://www.behance.net/gallery/187380953/Listeningio-Landing-Page-Redesign">
            <button className="projects__milbtn">
              <span>—</span> VIEW CASE STUDY
            </button>
          </a>
        </div>
        <div className="projects__milimage">
          <img
            id="start0art"
            className="projects__milimg desktop"
            src="./images/ltd.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__milimg tablet"
            src="./images/ltt.png"
            alt=""
          />
          <img
            id="start0art"
            className="projects__milimg phone"
            src="./images/ltd.png"
            alt=""
          />
        </div>
      </div>
      <div className="projects__line2"></div>
    </main>
  );
}
export default Projects;
