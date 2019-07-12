import { ON_LIKE_SUCCESS, ON_LIKE_ERROR } from './types';

export const likePost = (postId) => dispatch => {
    var empty = '';
    if ((postId) && (postId !== empty)) {
        dispatch({
            type: ON_LIKE_SUCCESS,
            payload: postId
        })
    }else{
        dispatch({
            type: ON_LIKE_ERROR,
        })
    }
}