import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import ImageReducer from './ImageReducer';
import LikePostReducer from './LikePostReducer';
import AppFeedbackReducer from './AppFeedbacksReducer';

export default combineReducers({
feeds: FeedReducer,
images: ImageReducer,
likes: LikePostReducer,
appFeedbacks: AppFeedbackReducer,
})