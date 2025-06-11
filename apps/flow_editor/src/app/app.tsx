import { useRef, useState } from 'react';
import { useEffect } from 'react';

import StressFlow from '../components/StressFlow';
import { debounce } from '../utils/debounce';
import Loader from './Loader';

export function App() {
  const [width, setWidth] = useState<number>(600);
  const [height, setHeight] = useState<number>(600);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
      setTimeout(() => setIsLoading(false), 400);
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
    <div ref={containerRef} className="h-full">
      {isLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            width: width,
            height: height,
          }}
        >
          <StressFlow />
        </div>
      )}
    </div>
  );
}

export default App;
