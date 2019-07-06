import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import { styles } from '../styles';



function FeedCards (props) {

    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

 
    const classes = styles();
    const { feedData } = props; 

    const cardData = feedData.map((data, index) => {
        return (
                
            <Card className={'feed-card-component'} key={data.id}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="Recipe" className={classes.feedCardAvatar}>
                        {data.firstLetterFname}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="Settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={data.username}
                    subheader={data.headline}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.storyText}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        {/* <ShareIcon /> */}
                    </IconButton>
                    <IconButton
                        className={clsx(classes.feedExpand, {
                            [classes.feedExpandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {data.storyText}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    })

    return (
        <div className="feed-card-cover-div">
            {cardData}
        </div>
    )
}

export default FeedCards;