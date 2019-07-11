import { GET_IMAGE_SUCCESS, GET_IMAGE_ERROR } from './types';
import { endpoints as ENDPOINTS } from '../../Store/Services/API/Unsplash';
//import { fetchImages } from '../Services';

export const getImages = () => dispatch => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    const queries = ENDPOINTS.queries;
    const queryUrl = `${url}?${queries.limit.name}=${queries.limit.value}&${queries.category.name}=${queries.category.value}`
    console.log(queryUrl)
    fetch(queryUrl, {
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
                console.log(data)
                dispatch({
                    type: GET_IMAGE_SUCCESS,
                    payload: data.results,
                })
            }) 
        } else {
            dispatch({
                type: GET_IMAGE_ERROR,
            })
        }
    })
}

