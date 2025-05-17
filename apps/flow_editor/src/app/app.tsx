import { useRef, useState } from 'react';
import StressFlow from '../components/StressFlow';
import { useEffect } from 'react';
import { debounce } from '../utils/debounce';

export function App({ title }: { title: string }) {
  const [width, setWidth] = useState<number>(600);
  const [height, setHeight] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <div ref={containerRef}>
      <div
        style={{
          width: width,
          height: height,
        }}
      >
        <StressFlow />
      </div>
    </div>
  );
}

export default App;
