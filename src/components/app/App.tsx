import './App.scss';
import { Incidents } from './Incidents';
import React from 'react';
import { Summary } from './Summary';
import { Status } from './Status';

function App()
{
    return (
        <>
            <h1>App</h1>
            <Summary />
            <Status />
            <Incidents />
        </>
    );
}

export default App;
