import { useState } from "react";
import Image from "next/image";
// import videofile from "@/public/predebit.mp4"

const VideoWithThumbnail = ({ videoUrl, videothumbnail, alt, classnames }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!videoUrl) {
    return <p>No video available</p>;
  }

  return (
    <div>
      {!isPlaying ? (
        <Image
          src={videothumbnail}
          alt={alt}
          onClick={() => setIsPlaying(true)}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <video
          width="100%"
          controls={false}
          autoPlay
          muted
          loop
          className={`${
            classnames
              ? classnames
              : "rounded-[15px] md:rounded-[23.08px] lg:rounded-[102px]"
          } cursor-pointer`}
        >
          <source
            src="https://pirai-infotech.github.io/Pirai-checkbook-website/predebit.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
