// /*
//     * globel
//  */

//  const set_comment = document.querySelector('.btn-set-comment');
//  const comment_container = document.querySelector('.comments-container');
//  const comment_txt = document.querySelector('#comment');
//  const comment_num = document.querySelector('#com-num');
// let comment_ = 0;


// var db = firebase.firestore();
    
// var database = firebase.database();

// var ref = database.ref('user');
// ref.on('value' , gotData, errData);

// function gotData(data){
// const parent_childrens = document.querySelectorAll('.comment');
// for (var i =0; i < parent_childrens.length; i++){
//     parent_childrens[i].remove();
// }

// var scores = data.val();
// var keys = Object.keys(scores);
// for ( var i = 0; i < keys.length; i++){
//     var k = keys[i];
//     var content = scores[k].content;
//     // var name = scores[k].name;
//     console.log(content);
// }
// if(keys === undefined || keys === null){
//     console.log("oops! there is not any data you addded")
// }
// }
// function errData(err){
// console.log('oops!, there is error please try again.');
// console.log(err);
// }

//  set_comment.addEventListener('click' , (e)=>{
//      e.preventDefault();


//      comment_++;

//      if(comment_txt.value != ""){

//      const comment = document.createElement('DIV'); //comment container
//      const name = document.createElement('H1'); // comment user name
//      const comment_content = document.createElement('p'); // comment user content  

//         comment_content.innerHTML = comment_txt.value;
//         // name.innerHTML = "new user";
//         comment_container.style.display = "inline-block";
//         comment_container.innerHTML = '';
//         comment_container.appendChild(comment);
//         comment.appendChild(name);
//         comment.appendChild(comment_content);
//         comment_num.innerHTML = comment_;       
//         comment.setAttribute('class' , 'comment');

//         nitApp = function () {
//             firebase.auth().onAuthStateChanged(function (user) {
//                 if (user) {
//                     console.log(user.uid)
//                 }
//             })
//         }

//      }else{
//          comment.remove();
//          console.log('oops!')
//      }

//  });