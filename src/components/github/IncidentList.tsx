import { ReactElement, PropsWithChildren } from "react";
import { Incident as IncidentsIncident } from "../../services/http/github/models/Incidents";
import { Incident as SummaryIncident } from "../../services/http/github/models/Summary";
import React from "react";
import "./IncidentList.scss"
type Incident = IncidentsIncident | SummaryIncident;

export function IncidentList(props: PropsWithChildren<{ incidents: Incident[]; }>): ReactElement
{
    const hasIncidents = props.incidents && props.incidents.length > 0;
    const incidentElements = hasIncidents && props.incidents.map((x: Incident) => (
        <div key={x.id} className="incident-item">
            <div className="field">
                <label>Name</label>
                <span>{x.name}</span>
            </div>
            <div className="field">
                <label>Status</label>
                <span className={`incident-status ${x.status}`}>{x.status}</span>
            </div>
            <div className="field">
                <label>Impact</label>
                <span>{x.impact}</span>
            </div>
            <div className="field">
                <label>Created</label>
                <span>{x.created_at && new Date(x.created_at).toLocaleDateString()}</span>
            </div>
            <div className="field">
                <label>Resolved</label>
                <span>{x.resolved_at && new Date(x.resolved_at).toLocaleDateString()}</span>
            </div>
        </div>));

    return ((hasIncidents && <div className="incidents"> {incidentElements} </div>) ||
        (!hasIncidents && <div> There's no reported incidents.</div>)) as ReactElement;
}