import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { combinedInformation } from "@/lib/DynamicValues";
import { User, UserCircle2 } from "lucide-react"; // Added UserCircle2 for a cooler face icon
import { cn, scrollToView } from "@/lib/utils";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Amplitude, amplitudeEvents } from "@/lib/Amplitude";

interface Props {}

const LeftPart: React.FC<Props> = (props) => {
  const [isHovered, setHovered] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 100, damping: 10 };
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-15, 15]);
  const translateX = useTransform(x, [-100, 100], [-20, 20]);
  const rotateSpring = useSpring(rotate, springConfig);
  const translateXSpring = useSpring(translateX, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const mouseX = event.nativeEvent.offsetX;
      x.set(mouseX - centerX);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
  };

  const onResumeIconClicked = () => {
    window.open("https://flowcv.com/resume/f0ek4gwwrd", "_blank");
    Amplitude.trackCustomEvent(amplitudeEvents.clicked_on_resume_icon);
  };

  return (
    <Card className="lg:w-1/3 xl:w-1/3 2xl:w-1/4 h-full p-0 m-0 lg:block hidden">
      <CardContent className="p-0 m-0 flex flex-col h-full justify-between">
        <div className="flex flex-col w-full items-center p-10">
          <div
            ref={iconRef}
            className="w-28 h-28 border-2 rounded-full my-8 p-2 relative overflow-hidden"
          >
            <div
              className="w-full h-full cursor-pointer relative"
              onMouseEnter={() => {
                setHovered(true);
                Amplitude.trackCustomEvent(
                  amplitudeEvents.hovered_on_resume_icon,
                  { isHovered: true }
                );
              }}
              onMouseLeave={handleMouseLeave}
              onClick={onResumeIconClicked}
              onMouseMove={handleMouseMove}
            >
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.div
                      key="tooltip"
                      initial={{ opacity: 0, y: 20, scale: 0.6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 10,
                        },
                      }}
                      exit={{ opacity: 0, y: 20, scale: 0.6 }}
                      style={{
                        translateX: translateXSpring,
                        rotate: rotateSpring,
                        whiteSpace: "nowrap",
                      }}
                      className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                    >
                      <div className="absolute inset-x-10 z-30 w-[50%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                      <div className="absolute left-10 w-[70%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1" />

                      <p className="font-semibold text-primary relative z-30 text-base">
                        View My Resume
                      </p>
                      <p className="text-primary text-sm text-center font-normal">
                        Click to open resume
                      </p>
                    </motion.div>

                    <motion.span
                      className="absolute inset-0 h-full w-full block ring-4 ring-white bg-blue-500 bg-opacity-10 rounded-full cursor-pointer"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.5 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.5 },
                      }}
                    />
                  </>
                )}
              </AnimatePresence>

              <div className="w-full h-full flex items-center justify-center">
                <UserCircle2
                  className={cn(
                    "w-full h-full text-gray-500",
                    isHovered
                      ? "scale-110 transition-transform duration-300 ease-out"
                      : "transition-transform"
                  )}
                />
              </div>
            </div>
          </div>

          <h1 className="text-xl font-extrabold tracking-normal">
            {combinedInformation.initialInformation.name}
          </h1>

          <h1 className="text-sm font-bold tracking-normal mt-0.5">
            {combinedInformation.initialInformation.occupation}
          </h1>
        </div>

        <div className="flex flex-col w-full p-3 gap-y-2">
          {combinedInformation.routes.map((item) => {
            const onButtonClicked = () => {
              scrollToView(`section-${item.name.toLowerCase()}`);
              Amplitude.trackCustomEvent(
                amplitudeEvents.clicked_on_left_navigation_route,
                { name: item.name }
              );
            };

            return (
              <Button
                variant="outline"
                onClick={onButtonClicked}
                key={item.name}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeftPart;
