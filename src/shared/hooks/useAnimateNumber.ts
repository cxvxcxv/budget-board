import { useEffect, useState } from 'react'

export function useAnimatedNumber(value: number, duration = 300) {
  const [animated, setAnimated] = useState(value);

  useEffect(() => {
    const start = animated;
    const end = value;
    const diff = end - start;

    if (diff === 0) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setAnimated(start + diff * progress);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return animated;
}
