import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Summary as SummaryModel } from '../../services/http/github/models/Summary';
import { getSummary } from '../../services/http/github/GithubStatusService';
import { IncidentList } from './IncidentList';

function SummarySection(props: IAsyncContentProps<SummaryModel>): ReactElement
{
    const content = props?.content || { page: {}, incidents: {} } as SummaryModel;
    return (
        <section>
            <h2>Summary</h2>
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
        </section >
    );
}

export const Summary = withAsyncContent(SummarySection, getSummary);


