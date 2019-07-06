import { GET_IMAGE_SUCCESS, GET_IMAGE_ERROR } from './types';
import { endpoints as ENDPOINTS } from '../../Store/Services/API/Unsplash';
//import { fetchImages } from '../Services';

export const getImages = () => dispatch => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    const queries = ENDPOINTS.queries;

    fetch(`${url}?${queries.limit.name}=${queries.limit.value}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Version': 'v1',
            'Authorization': 'Client-ID '+queries.access.value
        }
    })
    .then(res => {
        if(res.ok){
            res.json()
            .then(data => {
                dispatch({
                    type: GET_IMAGE_SUCCESS,
                    payload: data,
                })
            }) 
        } else {
            dispatch({
                type: GET_IMAGE_ERROR,
            })
        }
    })
}

