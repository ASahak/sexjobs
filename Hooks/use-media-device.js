import React, {useEffect, useState} from "react";
import {BREAKPOINTS, DEVICE_CHECKING} from 'utils/constants';

const useWidth = (width) => {
    const keys = Object.keys(BREAKPOINTS.keys).reverse();
    const devices = keys.filter(key => width <= BREAKPOINTS.keys[key])
    return devices.pop();
}

export default function useMediaDevice() {
    const isSSR = typeof window !== "undefined";
    const _width = isSSR ? window.innerWidth : 1200;
    const [deviceSize, setDeviceSize] = useState(useWidth(_width));
    const [windowWidth, setWindowWidth] = useState(_width);
    const [deviceType, setDeviceType] = useState('desktop');

    function changeWindowSize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        const _winSize = isSSR ? window.innerWidth : 1200;
        const _winType = useWidth(_winSize);
        if (deviceSize !== _winType) {
            setDeviceSize(_winType)
        }
        if (_winSize !== windowWidth) {
            changeWindowSize();
        }
        if (BREAKPOINTS.keys[_winType] <= DEVICE_CHECKING.mobile) setDeviceType('mobile');
        else if (BREAKPOINTS.keys[_winType] >= DEVICE_CHECKING.tablet[0] && BREAKPOINTS.keys[_winType] <= DEVICE_CHECKING.tablet[1]) setDeviceType('tablet')
        else setDeviceType('desktop')
    }, [deviceSize, isSSR, windowWidth]);

    React.useEffect(() => {
        isSSR && window.addEventListener("resize", changeWindowSize);

        return () => {
            isSSR && window.removeEventListener("resize", changeWindowSize);
        };
    }, []);

    return {
        windowWidth,
        deviceSize,
        deviceType,
    };
}
