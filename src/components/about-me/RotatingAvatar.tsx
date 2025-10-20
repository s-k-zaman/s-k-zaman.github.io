import { useState } from "react";
import classes from "./about.module.css";

export default function RotatingAvatar() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(true);
  const handleClickRotate = () => setFlipped((prev) => !prev);
  const handleMouseLeave = () => {
    // return;
    // rotate back after delay (like "lose focus")
    setTimeout(() => setFlipped(false), 2300);
  };

  return (
    <div
      className={`group relative cursor-pointer [perspective:1000px] ${classes.rotating_avatar_container}`}
      onClick={handleClickRotate}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
    >
      <span
        className={`absolute top-[10%] left-[7%] z-10 bg-transparent font-minecraft text-primary-text transition animate-pulse text-sm ${
          flipped ? "hidden opacity-0" : "opacity-100"
        } transform -rotate-[30deg] `}
      >
        Click Me!
      </span>

      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(-180deg)]" : ""
        }`}
      >
        {/* Front (2D cartoon image) */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            // src="/dp-2d.png"
            // src="/dp-avatar.png"
            src="/dp-avatar-nobg.png"
            alt="2D Avatar"
            className="h-full w-full rounded-2xl object-cover bg-primary border-2 border-primary-text/50"
          />
        </div>

        {/* Back (real image) */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src="/dp.jpg"
            alt="Real Photo"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
