import { RefObject, useEffect } from "react";

interface Args extends Omit<IntersectionObserverInit, "root"> {
  freezeOnceVisible?: boolean;
  target: RefObject<Element>;
  root?: RefObject<Element>;
  enabled?: boolean;
  onIntersect: () => void;
}

const useIntersectionObserver = ({ root, target, onIntersect, threshold = 1.0, rootMargin = "0px", enabled = true }: Args) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    let observer: IntersectionObserver;
    if (IntersectionObserver) {
      observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()), {
        root: root && root.current,
        rootMargin,
        threshold,
      });
    } else {
      return;
    }

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target.current, enabled]);
};

export default useIntersectionObserver;
