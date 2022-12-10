let headerNavMobMenuBtnSignInOut=document.getElementById('header__nav-mobmenu-btn');
const headerSignIn=document.querySelector('.header__sign-in');
const headerSignInHide=document.querySelector('.header__sign-in');
let headerSignInForm=document.querySelector('.header__sign-in');
const verifyClass=document.querySelector(".games-experiences__filtr");



const windowSignInShow=()=>{   
    headerSignIn.innerHTML = (`
    
    <form class="header__sign-in-form" action="" id="header__sign-in-form">  
    <div class="ellipse-games">
            <div class="ellipse-games-elpagetop">
            </div>
    </div>
    <div class="header__header">
    <h3 class="header__header-title">Authorization</h3>
    </div>        
    <legend class="header__sign-form-in-title">Sign In</legend>
    <input class="header__sign-form-in-input-style" name="headerSignFormInInputUserName" type="text" placeholder="Email or username" required>
    <input class="header__sign-form-in-input-style header__sign-form-in-input-style-psw" name="headerSignFormInInputUserPsw" type="password" placeholder="Password" required>
    <input class="header__sign-form-in-btn"type="submit" value="Sign in">  
    </form>`);
    headerSignInForm=document.querySelector('.header__sign-in-form');      
  }


      
const windowSignInHide=()=>{
       
    headerSignInForm=document.querySelector('.header__sign-in');
    headerSignIn.innerHTML='';
    headerUserAuth();
    headerMobUserAuth(); 
       
}



const headerSignInFormSubmitClick=(e)=>{
    e.preventDefault();
 
   uName= headerSignInForm.elements["headerSignFormInInputUserName"].value;
   userPsw= headerSignInForm.elements["headerSignFormInInputUserPsw"].value;
    VirtualUser.userAuth=false;
    userdata=readLocalStorage("virtualuserdata");
    userdata.forEach(e=>{
        if((uName===e.userLogin)&&(userPsw===e.userPsw)){
        VirtualUser.userAuth=true;
        VirtualUser.userName=e.userLogin;
        VirtualUser.userPassword=e.userPsw;
        VirtualUser.userPhoto=e.userPhoto;
        writeLocalStorage(VirtualUser,"virtualUser"); }

    }
        );
        userdata={};
        
      if (!VirtualUser.userAuth)  alert(`invalid username or password`);      
    addCardCursor();     
    windowSignInHide();
    windowOverlayHide();
}   



const headerSignInClick=(e)=>{
}

//headerNavMobMenuBtnSignInOut.addEventListener('click',headerNavMobMenuBtnSignClick );
headerSignInForm.addEventListener('submit',headerSignInFormSubmitClick);
headerSignInHide.addEventListener('click',headerSignInClick);
const addCardCursor=()=>{
    if(verifyClass)
    {
    if(VirtualUser.userAuth){
    gamesAddCardBtn.style.cursor="pointer";
    gamesAddCardBtn.style.background="linear-gradient(99.99deg, #B936F5 -21.45%, #C64C85 100%, #F1005B 100%)";
    gamesAddCardBtn.style.color="white";    
  
}

    else {
        gamesAddCardBtn.style.background="linear-gradient(99.99deg, #B936F5 -21.45%, #C64C85 100%, #F1005B 100%)";
        gamesAddCardBtn.style.cursor="not-allowed";
        gamesAddCardBtn.style.color="#706363";
        gamesAddCardBtn.style.background="linear-gradient(99.99deg, rgb(93 92 93) -21.45%, rgb(126 59 90) 100%, rgb(219 13 91) 100%)";    //    gamesAddCardBtn.display=true;

    }
}
}
