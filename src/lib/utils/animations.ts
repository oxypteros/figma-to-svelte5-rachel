type InViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  unobserve?: boolean;
};

export function inView(node: HTMLElement, options: InViewOptions = {}) {
  const {
    // Top Right Bottom Left
    rootMargin = "0px 0px -20% 0px",
    threshold = 0,
    unobserve = true
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("enter");
          if (unobserve) observer.unobserve(node);
        }
      });
    },
    {
      rootMargin,
      threshold
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
