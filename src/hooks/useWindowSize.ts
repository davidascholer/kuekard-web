import React from "react" 
// Use this hack to suppress the Jest "Warning: useLayoutEffect does nothing on the server" bug when using server-side rendering.
React.useLayoutEffect = React.useEffect 
import { useState } from "react";

export default function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}