import { endpoints as ENDPOINTS } from './API/Unsplash';

export const fetchImages = async () => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    const queries = ENDPOINTS.queries;
    
    const response = await fetch(`${url}?${queries.limit.name}=${queries.limit.value}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Version': 'v1',
            'Authorization': 'Client-ID '+queries.access.value
        }
    })

    console.log(response);
    const status = response.ok;
    const dataset = await response.json();
    return {
        dataset,
        status
    }
}