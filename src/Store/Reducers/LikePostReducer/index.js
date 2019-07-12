import { ON_LIKE_SUCCESS, ON_LIKE_ERROR } from '../../Actions/types';
import { feedState as initialState } from '../../state';

function LikePostReducer (state = initialState, action) {
    switch(action.type) {
        case ON_LIKE_SUCCESS:
        let feedData = initialState.feedData;
        let postId = action.payload;
        feedData.map((data, index) => {
            if(data.id == postId) {
                data.likeCount += 1
            }
        })
        return {
            ...state,
            feedData
        }
        case ON_LIKE_ERROR:
        return {
            ...state
        }
        default: {
            return state;
        }
    }
}

export default LikePostReducer;