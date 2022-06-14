var userEmailInput = document.getElementById("userEmail");
var userNameInput = document.getElementById("userName");
var userDomainInput =  document.getElementById("userDomain")

function ag(){

    var userEmail = userEmailInput.value;
    // console.log(userEmail);
    var mkanElat = userEmail.indexOf("@");
    // console.log(mkanElat);

    var userName = userEmail.substring(0,mkanElat); //ما دام الفانكشن بترجع قيمه لازم اخزنها ف متغير 
    userNameInput.value = userName;

    var userDomain = userEmail.substring(mkanElat+1);//ما دام الفانكشن بترجع قيمه لازم اخزنها ف متغير
    userDomainInput.value = userDomain;

}
