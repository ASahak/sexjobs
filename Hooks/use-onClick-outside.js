import React, {useEffect} from 'react';

export default function useOnClickOutside (ref, handler) {
    const isSSR = typeof window !== "undefined";
    useEffect(() => {
        const listener = event => {
            // Do nothing if clicking ref's element or descendent components
            if (!ref.current || ref.current.contains(event.target))  {
                return;
            }
            handler(event);
        };

        isSSR && document.addEventListener('mousedown', listener);

        return () => {
            isSSR && document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}