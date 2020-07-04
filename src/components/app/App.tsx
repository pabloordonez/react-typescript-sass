import './App.scss';
import { Incidents } from '../github/Incidents';
import React from 'react';
import { Summary } from '../github/Summary';
import { Status } from '../github/Status';
import { Loading } from '../shared/Loading';

function App()
{
    const loading = <section><Loading /></section>;
    return (
        <>
            <h1>Github Status</h1>
            <main>
                <Summary loadingComponent={loading} />
                <Status loadingComponent={loading} />
                <Incidents loadingComponent={loading} />
            </main>
        </>
    );
}

export default App;
