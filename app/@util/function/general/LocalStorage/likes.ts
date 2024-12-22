import { ObjectId } from "mongodb";

export function updateLocalStorge(id : ObjectId) {
  const likesArray = getLocalStoreageLikes();

  likesArray.push(id);
  
  setLocalStoreageLikes(likesArray);
}

export function getLocalStoreageLikes(){
  const likes = localStorage.getItem("like");

  let likesArray: ObjectId[] = [];

  if (likes) {
    likesArray = [...JSON.parse(likes)];
  }

  return likesArray;
}

export function setLocalStoreageLikes(likesArray : ObjectId[]){
  const newLikes = JSON.stringify(likesArray);

  localStorage.setItem("like", newLikes);
}

export function checkLikeAlreadyExist(id : ObjectId){
  const likesArray = getLocalStoreageLikes();

  return likesArray.includes(id);
}