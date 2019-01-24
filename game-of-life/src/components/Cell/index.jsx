import React from 'react';

import "./index.css";

export default function Cell({alive = false,
    width,
    height,
    onClick
}){
    const className = alive ? "cell alive" : "cell";
    return(
        <td className = {className}
            width = {width}
            height = {height}
            onClick = {onClick}
        />

    );
}