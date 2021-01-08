import React from 'react'
import PostApi from '../services/postApi';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class Home extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        posts: []
      }
    }
    componentDidMount() {
        this.loadListOfPosts()
      }

    loadListOfPosts(){
      new PostApi().getList().then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            posts: result.posts
          });
        },
      )
    }

    renderPostsList(){
      const {error,  isLoaded, posts } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return(
          <div id='posts'>
            { posts.map(post =>                
              <div key={post.id} className="post">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    {post.title}
                  </Grid>
                  <Grid item xs={3}>
                    {post.author}
                  </Grid>
                  <Grid item xs={6}>
                    {post.text}
                  </Grid>
                </Grid>

             </div>         
            )}
          </div>
          )}
    }

  render() {
    if(this.state.posts.length !== 0){
      return (
        <div>        
          <div>
              {this.renderPostsList()}
          </div>
        </div>  
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }


/*  
  filterPosts(val){
    const value = val.toLowerCase()
    const filteredList = this.state.posts.filter( p => p.title.includes(value));
    this.setState({posts: filteredList })
  }

  deletePost(postRmId){
    const newList = this.state.posts.filter(p => p.id !== postRmId)
    this.setState({posts: newList }) 
    new PostApi().deleteItem(postRmId).then(response => {
      alert('delete success')
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong')
      this. loadListOfPosts()
    });
  }*/
}