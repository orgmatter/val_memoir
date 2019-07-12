import { FEEDBACK_SUCCESS, FEEDBACK_ERROR } from './types';

export const addNoAccessFeedbacks = (feedback) => dispatch => {
    let empty = '';
    if((feedback) && (feedback != empty)) {
        dispatch({
            type: FEEDBACK_SUCCESS,
            payload: feedback,
        })
    }else{
        dispatch({
            type: FEEDBACK_ERROR,
        })
    }
}