import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Status as StatusModel } from '../../services/http/github/models/Status';
import { getStatus } from '../../services/http/github/GithubStatusService';

function StatusSection(props: IAsyncContentProps<StatusModel>): ReactElement
{
    const content = props?.content || { page: {}, status: {} } as StatusModel;

    return (
        <section>
            <h2>Current Status</h2>
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
                <div className="field">
                    <label>Indicator</label>
                    <span>{content.status.indicator}</span>
                </div>
                <div className="field">
                    <label>Status</label>
                    <span>{content.status.description}</span>
                </div>
            </div>
        </section >
    );
}

export const Status = withAsyncContent(StatusSection, getStatus);


