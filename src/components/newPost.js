import React from 'react';
import { Paper, Button, TextField, TextareaAutosize} from '@material-ui/core';
import PostApi from '../services/postApi';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    }
  }
  readPost(){
    let title = document.getElementById('title').value
    let name = document.getElementById('description').value
    let image = document.getElementById('image').value
    let content = document.getElementById('content').value
    let post ={
      title: title,
      name: name,
      image: image,
      content: content
    }
    return post
  } 

  createPost(post){
    const api  = new PostApi()
    api.createPostFetch(post).then(response => {
      if(response && response.error) {
        this.handleError(response);
        return;
      }
      console.log(response)      
    })
  }


  handleError(js){
    alert(js.error);
  }
  
  render() {
    return (
      <div className="post_new_cont">
        <Paper elevation={5} className='create_post_cont'>
            <h2 className='new_h2'>New post</h2>        
            <p><TextField label="Title:"  variant="outlined" id='title' className='post_create'/></p>
            <p><TextField label="Description:"  variant="outlined"  id='description' className='post_create'/></p>
            <p><TextField label="Link to image:"  variant="outlined"  id='image' className='post_create'/></p>
            <TextareaAutosize aria-label="minimum height" rowsMin={8}  className='post_create' id='content'/>
            <p><Button variant="contained" color="primary" id='create' onClick={ ()=>{this.createPost(this.readPost())} }> Create </Button></p>
          
        </Paper>  
      </div>
    )}  
}