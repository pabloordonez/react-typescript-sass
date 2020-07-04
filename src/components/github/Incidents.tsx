import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Incidents as IncidentsModel } from '../../services/http/github/models/Incidents';
import { getIncidents } from '../../services/http/github/GithubStatusService';
import { IncidentList } from './IncidentList';

function IncidentsSection(props: IAsyncContentProps<IncidentsModel>): ReactElement
{
    const content = props?.content || { page: {}, incidents: {} } as IncidentsModel;

    return (
        <section>
            <h2>Past Incidents</h2>
            <div className="separator">
                <div className="field">
                    <label>Name</label>
                    <span>{content.page.name}</span>
                </div>
                <div className="field">
                    <label>Url</label>
                    <a href={content.page.url}>{content.page.url}</a>
                </div>
                <div className="field">
                    <label>Updated</label>
                    <span>{content.page.updated_at && new Date(content.page.updated_at).toLocaleDateString()}</span>
                </div>
            </div>
            <IncidentList incidents={content.incidents} />
        </section>
    );
}

export const Incidents = withAsyncContent(IncidentsSection, getIncidents);


