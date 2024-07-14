import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

interface PhotoProps {
  src: string;
  width: number;
}

function Photo({ src, width }: PhotoProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["30.5deg", "-30.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-30.5deg", "30.5deg"]
  );

  const sheenOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        position: "relative",
        width: `${width}px`,
      }}
      className="border  px-2 pt-2 pb-10 bg-zinc-200"
    >
      <motion.div
        style={{
          position: "absolute",
          boxShadow: "0 0 20px 10px black",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
          opacity: sheenOpacity,
        }}
      />
      <img src={src} className="w-full aspect-square object-cover" />
    </motion.div>
  );
}

export default Photo;
