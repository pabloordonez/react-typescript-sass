import React, { ReactElement } from 'react';
import './App.scss';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';

class GithubStatusService
{
    baseUrl = 'https://kctbh9vrtdwd.statuspage.io/api/v2/';

    async summary(): Promise<any>
    {
        return await this.get('summary.json');
    }

    async status(): Promise<any>
    {
        return await this.get('status.json');
    }

    async incidents(): Promise<any>
    {
        return await this.get('incidents.json');
    }

    async get(url: string): Promise<any>
    {
        const response = await fetch(`${this.baseUrl}/${url}`);
        return await response.json();
    }
}

function IncidentList(props: IAsyncContentProps<any>): ReactElement
{
    return props.content.incidents.map((x: any) => (
        <div key={x.id}>
            <span>{x.name}</span>(<span style={{ color: 'green' }}>{x.status}</span>)
        </div>));
}

// We needed to create the service call as an object here,
// because if not, the useEffect of the useAsyncCall will keep
// firing again and again.
const GithubStatus = new GithubStatusService();
const GetIncidents = async () => await GithubStatus.incidents();
const AsyncIncidentList = withAsyncContent<any>(IncidentList, GetIncidents);


function App()
{
    return (
        <>
            <h1>App</h1>
            <AsyncIncidentList />
        </>
    );
}

export default App;
