import React from 'react';
import './App.css';
import {Week} from './Week';
import {Year} from "./Year";
import {Season} from "./Season";
import {Browser} from "./Browser";

export const App = () => {
    return <>
        <Browser/>
        <Week/>
        <Year/>
        <Season/>
    </>
}