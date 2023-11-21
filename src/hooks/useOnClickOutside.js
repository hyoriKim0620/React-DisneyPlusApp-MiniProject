import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener); // PC
    document.addEventListener("touchstart", listener); // Mobile

    return () => {
      document.removeEventListener("mousedown", listener); // PC
      document.removeEventListener("touchstart", listener); // Mobile
    };
  }, [ref, handler]);
}
