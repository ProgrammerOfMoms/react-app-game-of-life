import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

ReactDOM.render(
    <Game 
        width = {1280}
        height = {720}
        rows = {36}
        cols = {64}
    />,
    document.getElementById('root')
);
