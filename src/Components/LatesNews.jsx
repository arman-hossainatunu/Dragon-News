import React from "react";
import Marquee from "react-fast-marquee";

const LatesNews = () => {
  return (
    <div className="max-w-11/12 mx-auto mt-3">
      <div className="flex gap-3 items-center bg p-3">
        <h1 className="secondary text-white px-3 py-1">Latest</h1>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
          <p className="mr-4">
            1. Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as.
          </p>
          <p>
            2. Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatesNews;
