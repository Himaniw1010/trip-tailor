import { useState, useEffect } from 'react';

// Define breakpoints for mobile, tablet, and desktop
const breakpoints = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop'); // Default to desktop

  useEffect(() => {
    // Function to check the current device type
    const updateDeviceType = () => {
      if (window.matchMedia(breakpoints.mobile).matches) {
        setDeviceType('mobile');
      } else if (window.matchMedia(breakpoints.tablet).matches) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Initial check on mount
    updateDeviceType();

    // Add an event listener for screen resize
    window.addEventListener('resize', updateDeviceType);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
