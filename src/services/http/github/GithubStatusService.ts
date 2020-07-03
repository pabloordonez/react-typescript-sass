import { Incidents } from "./models/Incidents";
import { Summary } from "./models/Summary";
import { Status } from "./models/Status";

const baseUrl = 'https://kctbh9vrtdwd.statuspage.io/api/v2/';

async function get<T>(url: string): Promise<T>
{
    const response = await fetch(`${baseUrl}/${url}`);
    return await response.json();
}

export async function getSummary(): Promise<Summary>
{
    return await get('summary.json');
}

export async function getStatus(): Promise<Status>
{
    return await get('status.json');
}

export async function getIncidents(): Promise<Incidents>
{
    return await get('incidents.json');
}
