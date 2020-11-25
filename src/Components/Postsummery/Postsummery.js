import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

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



const Postsummery = () => {
const {postId}=useParams()
const [friend,setFriend]=useState({})
const [comments,setComments] = useState([])
useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=> setFriend(data) )


        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then (res=>res.json())
        .then(data=> setComments(data))


},[])
const classes = useStyles();
    return (   

<div>

<Card className={classes.root}>
<CardActionArea>
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
    {friend.title}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
    {friend.body}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
</CardActions>

</Card>


            {
            comments.map(comment=> <Comment comment={comment}></Comment>)
              }

        </div>

    );
};

export default Postsummery;