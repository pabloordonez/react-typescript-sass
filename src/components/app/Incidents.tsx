import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Incident, Incidents as IncidentsModel } from '../../services/http/github/models/Incidents';
import { getIncidents } from '../../services/http/github/GithubStatusService';

function IncidentList(props: IAsyncContentProps<IncidentsModel>): ReactElement
{
    const hasIncidents = props.content?.incidents && props.content.incidents.length > 0;
    const incidents = hasIncidents && props.content?.incidents.map((x: Incident) => (
        <div key={x.id}>
            <span>{x.name}</span> (<span style={{ color: 'green' }}>{x.status}</span>)
        </div>));

    return (
        <section>
            <h2>Incidents</h2>
            <div>
                <div>
                    <label>Name: </label>
                    <span>{props.content?.page.name}</span>
                </div>
                <div>
                    <label>Url: </label>
                    <span>{props.content?.page.url}</span>
                </div>
                <div>
                    <label>Updated: </label>
                    <span>{props.content?.page.updated_at}</span>
                </div>
            </div>
            {
                (hasIncidents && <div> {incidents} </div>) ||
                (!hasIncidents && <div> There's no reported incidents.</div>)
            }
        </section>
    );
}

export const Incidents = withAsyncContent(IncidentList, getIncidents);


