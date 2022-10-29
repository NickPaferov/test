import React from 'react';
import './App.css';
import {Week} from './Week';
import {Year} from "./Year";
import {Season} from "./Season";

export const App = () => {
    return <>
        <Week/>
        <Year/>
        <Season/>
    </>
}