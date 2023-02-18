import { useState, useEffect } from "react";

const useToTop = () => {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 160) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return [showToTop, goToTop] as const;
};

export default useToTop;
