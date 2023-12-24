import "./Work.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
let timeline;

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
          .to("#nocode", { yPercent: -215, ease: "linear" });
      }
    });
  }, []);
  return (
    <div className="work">
      <h2 className="work__intro">
        <span>—</span> WHAT I DO
      </h2>

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
  );
}
export default Work;
