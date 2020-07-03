import './App.scss';
import { Incidents } from '../github/Incidents';
import React from 'react';
import { Summary } from '../github/Summary';
import { Status } from '../github/Status';

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
