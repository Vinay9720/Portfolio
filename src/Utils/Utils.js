// boiler plate code for the useIntersectionObserver hook (for scroll animations on intersection)

//import at top
import { useIntersectionObserver } from "@uidotdev/usehooks";

//use in functional component

const [ref, entry] = useIntersectionObserver({
  threshold: 0,
  root: null,
  rootMargin: "0px",
});

// use where to render the animated component

<div ref={ref}>{entry?.isIntersecting && ""}</div>;
