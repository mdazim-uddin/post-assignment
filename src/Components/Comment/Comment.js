import React from 'react';

const Comment = (props) => {
const {name,email,body} = props.comment;
    return (
        <div>
            <h1>{name}</h1>
            <span>{email}</span>
             <p>{body}</p>
        </div>
    );
};

export default Comment;