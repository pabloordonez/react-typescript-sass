import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Summary as SummaryModel, Incident } from '../../services/http/github/models/Summary';
import { getSummary } from '../../services/http/github/GithubStatusService';

function SummaryList(props: IAsyncContentProps<SummaryModel>): ReactElement
{
    const hasIncidents = props.content?.incidents && props.content.incidents.length > 0;
    const incidents = hasIncidents && props.content?.incidents.map((x: Incident) => (
        <div key={x.id}>
            <span>{x.name}</span> (<span style={{ color: 'green' }}>{x.status}</span>)
        </div>));

    return (
        <section>
            <h2>Summary</h2>
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
        </section >
    );
}

export const Summary = withAsyncContent(SummaryList, getSummary);


