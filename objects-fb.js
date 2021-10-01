const facebookProfile = {
    name : "abc",
    friends : 5,
    messages : ["hi", "hello", "good job"],
    postMessage : function post(message){
    facebookProfile.messages.push(message); 
    return facebookProfile.messages;
    },
    deleteMessage : function del(index){
    facebookProfile.messages.splice(index,1);
    return facebookProfile.messages;
    },
    addFriend : function(){
       let f = facebookProfile.friends+1;
       return f;
    },
    removeFriend : function(){
       return facebookProfile.friends--;
    }
};
   console.log(facebookProfile.postMessage("bye"));
   console.log(facebookProfile.deleteMessage(1));
   console.log(facebookProfile.addFriend());
   console.log(facebookProfile.removeFriend());
   
   