import React from 'react';

import "./index.css";

export default function Controls({
    isPlaying,
    speed,
    onStart,
    onReset,
    onRandomize,
    onSpeedChange
}){
    return(
        <div className = "controls">
        <button className = "material-icons" onClick = {onStart}>{isPlaying ?
                "pause":"play_arrow"}</button>
        <button className = "material-icons" onClick = {onReset}>replay</button>
        <button 
            className = "material-icons" 
            onClick = {onRandomize}
            disabled = {isPlaying}
        >
            transform
        </button>
        <input 
            type="range"
            min = "0"
            max = "900"
            step = "100"
            value = {speed}
            onInput = {event => onSpeedChange(event.target.value)}
            disabled = {!isPlaying}
        />
        </div>
    );

}