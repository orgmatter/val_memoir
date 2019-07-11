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
        let postCount;
        const firstLetterFname = data.firstname.charAt(0).toUpperCase();
        const firstLetterLname = data.lastname.charAt(0).toUpperCase();
        if (data.postCount > 0) {
            postCount = data.postCount;
        }else {
            postCount = 0;
        }
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
            postCount: postCount,
        }

        console.log(firstLetterFname);
        console.log(formData);
        //localStorage.setItem('username', data.username);

        // localStorage.setItem('itemArray', JSON.stringify(dataArray));
        // const storageData = JSON.parse(localStorage.getItem('itemArray'));
        // dataArray.push(formData);
        // localStorage.setItem('itemArray', JSON.stringify(dataArray));
        // console.log(storageData);

        dispatch({
            type: POST_SUCCESS,
            payload: formData
        })
        return 'success';
    } else {
        dispatch({
            type: POST_ERROR,
        })
        return 'error';
    }
}