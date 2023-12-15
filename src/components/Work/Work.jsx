import "./Work.css"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia()
let timeline

function Work() {
  useEffect(() => {
    mm.add("(max-width:425px)", () => {
      if (!timeline) {
        timeline = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".work",
              start: "top+=75rem 0%",
              end: "bottom 40%",
              pin: true,
              scrub: true,
            },
          })
          .to("#ux", { yPercent: -100, ease: "linear" })
          .to("#nocode", { yPercent: -107, ease: "linear" }, "<")
          .to("#nocode", { yPercent: -215, ease: "linear" })
      }
    })
  }, [])
  return (
    <div className="work">
      <h2 className="work__intro">
        <span>—</span> WHAT I DO
      </h2>
      <div className="arrows">
        <svg
          className="arrow__round"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM1.97667 30C1.97667 45.4769 14.5231 58.0233 30 58.0233C45.4769 58.0233 58.0233 45.4769 58.0233 30C58.0233 14.5231 45.4769 1.97667 30 1.97667C14.5231 1.97667 1.97667 14.5231 1.97667 30Z"
            fill="#818181"
            fillOpacity="0.6"
          />
        </svg>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <g clipPath="url(#clip0_2707_4)">
            <path
              d="M27.66 15.61L18 6L8.33996 15.61C8.22599 15.6968 8.13199 15.8071 8.06434 15.9333C7.99668 16.0596 7.95695 16.1989 7.94783 16.3419C7.93871 16.4849 7.96041 16.6281 8.01147 16.762C8.06252 16.8958 8.14174 17.0172 8.24376 17.1177C8.34578 17.2183 8.46822 17.2958 8.60278 17.3449C8.73735 17.3941 8.8809 17.4137 9.02372 17.4025C9.16654 17.3914 9.3053 17.3497 9.4306 17.2802C9.55589 17.2108 9.66481 17.1152 9.74996 17L17 9.81V28.94C17 29.2052 17.1053 29.4596 17.2929 29.6471C17.4804 29.8346 17.7347 29.94 18 29.94C18.2652 29.94 18.5195 29.8346 18.7071 29.6471C18.8946 29.4596 19 29.2052 19 28.94V9.81L26.25 17C26.4383 17.187 26.6931 17.2915 26.9585 17.2906C27.2239 17.2896 27.478 17.1833 27.665 16.995C27.8519 16.8067 27.9565 16.5518 27.9555 16.2865C27.9546 16.0211 27.8483 15.767 27.66 15.58V15.61Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2707_4">
              <rect width="36" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <main className="work__table">
        <div id="product" className="work__product">
          <div className="work__header">
            <img
              src="./images/product.svg"
              alt=""
              className="work__productimg"
            />
            <h2 className="work__heading">Product Design</h2>
          </div>
          <span className="work__line"></span>
          <div className="work__contents">
            <p className="work__contentsp">
              I design digital elements using various tools and techniques,
              while considering usability, aesthetics, business needs and goals.
              My approach is always user-centered.
            </p>
          </div>
        </div>

        <div id="ux" className="work__product">
          <div className="work__header">
            <img src="./images/ux.svg" alt="" className="work__productimg" />
            <h2 className="work__heading">UX Audit</h2>
          </div>
          <span className="work__line"></span>
          <div className="work__contents">
            <p className="work__contentsp">
              I simply just love solving user-related problems, asides having
              the formal skill to do so. I help figure out why you have less
              returning customers, and then iterate to give them a better
              experience.
            </p>
          </div>
        </div>

        <div id="nocode" className="work__product">
          <div className="work__header">
            <img src="./images/code.svg" alt="" className="work__productimg" />
            <h2 className="work__heading">No-code Development</h2>
          </div>
          <span className="work__line"></span>
          <div className="work__contents">
            <p className="work__contentsp">
              I help you skip the lengthy and sometimes, hectic process of
              developing a website through conventional code, lets skip to the
              good part where you have your site ready in no time.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Work
