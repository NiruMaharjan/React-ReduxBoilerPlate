export const selectUser=(user) =>{
    console.log("You clicked on user: "+user.first); 
    return{
        type: "USER_SELECTED",
        payload:user
    }
};      //this entire function is action creator and  what is returns is action