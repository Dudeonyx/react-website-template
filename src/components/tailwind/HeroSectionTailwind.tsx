import { Link as LinkS } from "react-scroll";
import video from "../../videos/video.mp4";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import { useCallback } from "react";
interface Props {}

export const HeroSectionTailwind = (props: Props) => {
  const [hover, setHover] = useState(false);

  const setHoverTrue = useCallback(() => setHover(true), []);
  const setHoverFalse = useCallback(() => setHover(false), []);

  const Arrow = hover ? MdArrowForward : MdKeyboardArrowRight;
  return (
    <div className="bg-black flex items-center justify-center px-8 relative h-hero">
      <div
        className="z-10 absolute inset-0 bg-gradient-to-b from-[rgb(0,0,0,0.2)] to-[rgb(0,0,0,0.9)_100%]"
        aria-hidden
      />
      <div
        className="z-10 absolute inset-0 bg-gradient-to-b from-[rgb(0,0,0,0.2)] to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <video
          className="w-full h-full object-cover bg-dark-500"
          src={video}
          autoPlay
          typeof="video/mp4"
          loop
          muted
        />
      </div>
      <div className="z-10 flex flex-col items-center justify-center max-w-6xl mx-6">
        <h1 className="sm:text-[40px] md:text-5xl font-semibold text-3xl text-white text-center p-2">
          Virtual Banking Made Easy
        </h1>
        <p className="text-center mt-6 text-white text-lg md:text-2xl p-1 max-w-[600px]">
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </p>
        <div className="p-2 mt-3">
          <LinkS
            to="signup"
            onMouseEnter={setHoverTrue}
            onMouseLeave={setHoverFalse}
            className="px-6 py-3 bg-teal-500 rounded-3xl hover:bg-teal-50 flex transition-all"
          >
            Get started <Arrow className="text-black text-2xl" />
          </LinkS>
        </div>
      </div>
    </div>
  );
};
