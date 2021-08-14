import { Link as LinkS } from "react-scroll";
import video from "../../videos/video.mp4";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import { useCallback } from "react";
interface Props {}

export const HeroSectionTailwind = (props: Props) => {
  const [hover, setHover] = useState(false);

  const setHoverTrue = useCallback(() => setHover(false), []);
  const setHoverFalse = useCallback(() => setHover(true), []);

  const Arrow = hover ? MdKeyboardArrowRight : MdArrowForward;
  return (
    <div className="bg-black flex items-center justify-center py-8 relative h-hero">
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
      <div className="z-10 flex-auto flex flex-col items-center justify-center md:max-w-5xl mx-6">
        <h1 className="md:text-4xl font-semibold text-2xl text-white text-center p-1">
          VIRTUAL BANKING MADE EASY
        </h1>
        <p className="text-center text-white text-lg md:text-xl p-1">
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </p>
        <div className="p-1">
          <LinkS
            to="signup"
            onMouseEnter={setHoverTrue}
            onMouseLeave={setHoverFalse}
            className="px-5 py-2 bg-teal-500 rounded-3xl hover:bg-teal-100 flex transition-all"
          >
            Get started <Arrow className="text-black text-2xl" />
          </LinkS>
        </div>
      </div>
    </div>
  );
};
