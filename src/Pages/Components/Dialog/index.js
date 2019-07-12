import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import StoryForm from '../StoryForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

    const { handleClickOpen, handleClose, open, setOpen, noAccessFeedback } = props;
    console.log(noAccessFeedback);

  //const [open, setOpen] = React.useState(false);

//   function handleClickOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

  return (
      <div className="dialog-cover-div">
        <Dialog
            className="dialog-cover"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth={true}
            maxWidth={'sm'}
        >
            <DialogTitle id="alert-dialog-slide-title">{"Tell us about your story"}</DialogTitle>
            <DialogContent>
                <Typography style={{color: 'red'}}>
                    {noAccessFeedback.isFormBtnClicked == true ? noAccessFeedback.name : null}
                </Typography>
                <div className="dialog-form-cover">
                    <StoryForm />
                </div>
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={handleClose} color="primary">
                    Disagree
                </Button> */}
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
      </div>
  )

}  

