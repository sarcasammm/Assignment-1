//SocialIcon.js - Samantha Danielle Reyes - 301372609 - Sept 25, 2024

import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;