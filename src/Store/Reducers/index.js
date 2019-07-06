import { combineReducers } from 'redux';
import FeedReducer from './FeedReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
feeds: FeedReducer,
images: ImageReducer
})