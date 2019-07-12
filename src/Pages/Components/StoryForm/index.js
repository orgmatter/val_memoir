import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from '../../../Store/Actions/AddPostActions';
import { addNoAccessFeedbacks } from '../../../Store/Actions/AddNoAccessFeedbacks';

class StoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnProps: {
                isDisabled: false,
                isClicked: false,
                isSent: ''
            },
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            gender: 'Gender',
            headline: '',
            storyText: '',
            postCount: 0,
        }
    }

    onChangeInput = (e) => {
        e.preventDefault();
        const inputVal = e.target.value;
        const inputName = e.target.name;
        console.log(inputVal);
        console.log(inputName);
        const targetName = e.target.name;
        this.setState({
                [targetName]: inputVal
        })
        console.log(this.state);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { feedData } = this.props.feeds;
        const { addNoAccessFeedbacks } = this.props;
        const username = localStorage.getItem('username');
        let formData = this.state;
        let formUsername = formData.username;
        if((formUsername == username)){
            const feedback = 'Oops! You have exceeded your limit!';
            addNoAccessFeedbacks(feedback);

            let btnProps = this.state.btnProps;
            btnProps.isClicked = true;
            btnProps.isDisabled = true;

            this.setState({
                btnProps,
                id: '',
                firstname: '',
                lastname: '',
                username: '',
                gender: 'Gender',
                headline: '',
                storyText: '',
                postCount: 0,
            })
        }else {

            formData.postCount = formData.postCount + 1;
            const { addPost } = this.props;
            let postStatus = addPost(formData);
            localStorage.setItem('username', formData.username);
            let btnProps = this.state.btnProps;
            btnProps.isClicked = true;
            btnProps.isDisabled = true;
            

            this.setState({
                btnProps,
                id: '',
                firstname: '',
                lastname: '',
                username: '',
                gender: 'Gender',
                headline: '',
                storyText: '',
                postCount: 0,
            })

            //const data = this.state;
            //console.log(formData);
            }
    }

    // onChangeTxt = (e) => {
    //     const inputVal = e.target.val;
    //     const targetName = [e.target.name];
    // }

    render () {

        return (
            <div className="story-form-cover-div">
                <form action="" onSubmit={this.onFormSubmit}>
                    <div className="inputs-cover-div">
                        <div className="story-form-inputs-flex" id="first-last-name-flex">
                            <div className="story-inputs-form-item">
                                {/* <p className="story-inputs-form-p"><label for="firstname-inputs">Firstname</label></p> */}
                                <input type="text" className="story-form-inputs" name="firstname" id="firstname-inputs" placeholder="Firstname" value={this.state.firstname} onChange={this.onChangeInput} required />
                            </div>
                            <div className="story-inputs-form-item">
                                {/* <p className="story-inputs-form-p"><label for="lastname-inputs">Lastname</label></p> */}
                                <input type="text" className="story-form-inputs" name="lastname" id="lastname-inputs" placeholder="Lastname" value={this.state.lastname} onChange={this.onChangeInput} required />
                            </div>
                        </div>
                        <div className="story-form-inputs-flex" id="username-gender-flex">
                            <div className="story-inputs-form-item">
                                {/* <p className="story-inputs-form-p"><label for="username-inputs">Username</label></p> */}
                                <input type="text" className="story-form-inputs" name="username" id="username-inputs" placeholder="Username" value={this.state.username} onChange={this.onChangeInput} required />
                            </div>
                            <div className="story-inputs-form-item">
                                {/* <p className="story-inputs-form-p"><label for="gender-inputs">Gender</label></p> */}
                                 <select className="story-form-inputs" name="gender" id="gender-sel" onChange={this.onChangeInput} value={this.state.gender} required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Gender">Gender</option>
                                </select>
                            </div>
                        </div>
                        <div className="story-form-textarea-div">
                            <div className="story-inputs-form-item">
                                {/* <p className="story-textarea-form-p"><label for="story-inputs">Your story</label></p> */}
                                <input type="text" className="story-form-inputs" name="headline" id="headline-inputs" placeholder="Title" value={this.state.headline} onChange={this.onChangeInput} required />
                            </div>
                        </div>
                        <div className="story-form-textarea-div">
                            {/* <p className="story-textarea-form-p"><label for="story-inputs">Your story</label></p> */}
                            <textarea className="story-form-text" name="storyText" id="story-text" placeholder="Write your story!" value={this.state.storyText} onChange={this.onChangeInput} required/>
                        </div>
                        <div className="story-form-btn-div">
                            <Button type="submit" className="story-form-btn" id="form-btn">Share it!</Button> 
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: (data) => dispatch(addPost(data)),
        addNoAccessFeedbacks: (feedback) => dispatch(addNoAccessFeedbacks(feedback)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);