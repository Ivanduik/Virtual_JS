window.name="index";
let windowOverlay=document.querySelector('.window-overlay');
const addCardContainer=document.querySelector('.add-card-container');




headerMobUserAuth();

const windowOverlayShow=()=>{
    windowOverlay.style.display="block";
    }


const windowOverlayHide=()=>{
    windowOverlay.style.display="none";
}

headerUserAuth();
headerHideUserMenu();




const hendleDocumentClick=(e)=>
{ 
    if(e.target.matches(".header__nav-menu-photo-user")||
    e.target.closest(".header__nav-home-menu"))
    { 
        windowOverlayShow();
        return;
   }
    else if (e.target.closest(".window-overlay")) {
        
        headerHideUserMenu();
        windowOverlayHide();
    }
        
   
    if(e.target.matches(".header__nav-menu-button")){
               windowSignInShow();
               windowOverlayShow();
             return;
       } else if(e.target.closest(".window-overlay")){
        
       windowSignInHide();
       windowOverlayHide();
    }


    if( e.target.matches(".add-card-container"))
        {   windowAddCardShow();
            windowOverlayShow();

          return;
        }
        else if(e.target.closest(".window-overlay")){
          windowAddCardHide();
          windowOverlayHide();
    }

    if(e.target.matches(".header__nav-mobmenu")){
        windowOverlayShow();
        return;
    }
    else if(e.target.closest(".window-overlay")){     
      windowOverlayHide();     
      headerNavMobMenuClose();
        }
  



}
document.addEventListener('click', hendleDocumentClick);



