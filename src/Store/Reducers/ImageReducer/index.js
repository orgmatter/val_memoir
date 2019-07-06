import { GET_IMAGE_SUCCESS, GET_IMAGE_ERROR } from '../../Actions/types';
import { imageState as initialState } from '../../state';

function ImageReducer (state = initialState, action) {
    switch(action.type) {
        case GET_IMAGE_SUCCESS: 
        return {
            ...state,
            imageData: action.payload,
            status: 'success'
        }
        case GET_IMAGE_ERROR: 
        return {
            ...state,
            status: 'false'
        }
        default: {
            return state
        }
    }
}

export default ImageReducer;

