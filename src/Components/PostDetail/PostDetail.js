import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin:'0 auto',
      marginTop:'10px',
      padding: '20px 0px',
    },
    media: {
      height: 140,
    },
    CardActions:{
        textAlign:'center',
    }
  });
const PostDetail = (props) => {
const {title, body,id} = props.post
const classes = useStyles();
    return (
        

        <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={`/about/${id}`}>
        <Button size="small" color="primary">         
        ShowDetail{id}         
        </Button>
        </Link>
        </CardActions>      
      </Card>
      

    );
};

export default PostDetail;