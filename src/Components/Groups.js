import React from 'react';
import '../Styles/Groups.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Groups() {
    return (
        <div className = "groups">
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="groups"
                    height="140"
                    image="https://www.facebook.com/images/comet/empty_states_icons/media/null_states_media_gray_wash.svg"
                    title="groups"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        You've completely caught up
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Check again later for more updates
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button size="small" className = "btn">
                        Discover More Groups
                    </button>
                    
                </CardActions>
                </Card>
        </div>
    )
}

export default Groups
