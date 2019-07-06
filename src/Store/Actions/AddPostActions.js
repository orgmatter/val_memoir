import { POST_SUCCESS, POST_ERROR } from './types';

const uuidv4 = require('uuid/v4');
const storyId = uuidv4();

export const addPost = (data) => dispatch => {
    
    console.log(data);
    Object.size = function(data) {
        var size = 0, key;
        for (key in data) {
            if (data.hasOwnProperty(key)) 
            size++;
        };
            return size;
        };
        var dataLength = Object.size(data);
    if(dataLength > 0) {
        const dataArray = [];
        const firstLetterFname = data.firstname.charAt(0).toUpperCase();
        const firstLetterLname = data.lastname.charAt(0).toUpperCase();
        const formData = {
            id: storyId,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            gender: data.gender,
            headline: data.headline,
            storyText: data.storyText,
            firstLetterFname,
            firstLetterLname,
            likeCount: 0,
        }

        console.log(firstLetterFname);
        console.log(formData);

        localStorage.setItem('itemArray', JSON.stringify(dataArray));
        const storageData = JSON.parse(localStorage.getItem('itemArray'));
        dataArray.push(formData);
        localStorage.setItem('itemArray', JSON.stringify(dataArray));
        console.log(storageData);

        dispatch({
            type: POST_SUCCESS,
            payload: storageData
        })
        return 'success';
    } else {
        dispatch({
            type: POST_ERROR,
        })
        return 'error';
    }
}