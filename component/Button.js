import { Fugaz_One } from '@next/font/google';
import React from 'react';

const fugazOne = Fugaz_One({
    weight: '400',  
    subsets: ['latin'],  
});

export default function Button(props) {
    const { text, dark } = props;

    return (
        <button className={`custom-button ${dark ? 'custom-button-dark' : ''} ${fugazOne.className}`}>
            {text}
        </button>
    );
}
