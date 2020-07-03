export interface Page
{
    id: string;
    name: string;
    url: string;
    updated_at: Date;
}

export interface IncidentUpdate
{
    body: string;
    created_at: Date;
    display_at: Date;
    id: string;
    incident_id: string;
    status: string;
    updated_at: Date;
}

export interface Incident
{
    created_at: Date;
    id: string;
    impact: string;
    incident_updates: IncidentUpdate[];
    monitoring_at?: any;
    name: string;
    page_id: string;
    resolved_at?: Date;
    shortlink: string;
    status: string;
    updated_at: Date;
}

export interface Summary
{
    page: Page;
    incidents: Incident[];
}


