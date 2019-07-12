import { FEEDBACK_SUCCESS, FEEDBACK_ERROR } from '../../Actions/types';
import { appFeedbacksState as initialState } from '../../state';

function AppFeedbackReducer (state = initialState, action) {
    switch(action.type) {
        case FEEDBACK_SUCCESS:
        let noAccessFeedback = initialState.noAccessFeedback;
        noAccessFeedback.name = action.payload;
        noAccessFeedback.isFormBtnClicked = true;
        return {
            ...state,
            noAccessFeedback
        }
        case FEEDBACK_ERROR:
        return {
            ...state,
        }
        default: {
            return state;
        }
    }
}

export default AppFeedbackReducer;