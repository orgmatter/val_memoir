import { POST_SUCCESS, POST_ERROR } from '../../Actions/types';
import { feedState as initialState } from '../../state';

function FeedReducer (state = initialState, action) {
    switch(action.type) {
        case POST_SUCCESS:
        let feedData = state.feedData;
        feedData.push(action.payload);
        return {
            ...state,
            feedData: feedData,
            status: 'success'
        }
        case POST_ERROR:
        return {
            ...state,
            status: 'error'
        }
        default: {
            return state
        }
    }
}

export default FeedReducer;