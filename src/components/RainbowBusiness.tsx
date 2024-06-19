import React, { useState, useEffect } from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { pink, red, orange, yellow, green, teal, blue, purple } from '@mui/material/colors';

const RainbowBusinessCenterIcon = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [pink[500], red[500], orange[500], yellow[500], green[500], teal[500], blue[500], purple[500]];

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 500); // Change color every 500 milliseconds

        return () => clearInterval(interval);
    }, [colors.length]);

    return (
        <BusinessCenterIcon sx={{ color: colors[colorIndex] }} />
    );
};

export default RainbowBusinessCenterIcon;
