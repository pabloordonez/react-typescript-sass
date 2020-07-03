import React, { ReactElement } from 'react';
import { IAsyncContentProps, withAsyncContent } from '../../effects/async-content';
import { Status as StatusModel } from '../../services/http/github/models/Status';
import { getStatus } from '../../services/http/github/GithubStatusService';

function StatusList(props: IAsyncContentProps<StatusModel>): ReactElement
{
    return (
        <section>
            <h2>Status</h2>
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
                <div>
                    <label>Indicator: </label>
                    <span>{props.content?.status.indicator}</span>
                </div>
                <div>
                    <label>Status: </label>
                    <span>{props.content?.status.description}</span>
                </div>
            </div>
        </section >
    );
}

export const Status = withAsyncContent(StatusList, getStatus);


