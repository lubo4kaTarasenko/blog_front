import UserApi from "./userApi";

export default class PostApi{

  createFetch(post){
    const token = new UserApi().userCoockiePresent()
    return fetch(`http://localhost:3001/api/posts?token=${token}`,{
      "method": "POST",
      "body": JSON.stringify({
        name: post.description,
        title: post.title,
        content: post.content,
        image: post.image,
      })
     })
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     });
  }

  getList(){
    //const token = new UserApi().userCoockiePresent()
    return fetch(`http://localhost:3001/api/posts`)
    .then(res => res.json())
  }

  updateFetch(itemText, itemCheck, itemId, itemColor){
    const token = new UserApi().userTokenPresent()
    return fetch(`http://localhost:3001/api/items?token=${token}`,{
    "method": "PUT",
    "body": JSON.stringify({
      id: itemId,
      text: itemText,
      color: itemColor,
      check: itemCheck
    })
   })
   .then(response => response.json())   
   .catch(err => {
     console.log(err);
   });
  }

  deleteFetch(id){
    const token = new UserApi().userTokenPresent()
    return fetch(`http://localhost:3001/api/items?token=${token}&id=${id}`,{
      "method": "DELETE"})
     .then(response => response.json())
     .catch(err => {
       console.log(err);
     });
  }
}
