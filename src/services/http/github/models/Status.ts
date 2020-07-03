export interface Page
{
    id: string;
    name: string;
    url: string;
    updated_at: Date;
}

export interface Status
{
    description: string;
    indicator: string;
}

export interface Status
{
    page: Page;
    status: Status;
}
