const headerMobMenuBurger = document.querySelector('.header__nav-menu-burger');
const headerMobMenuClose = document.querySelector('.header__nav-menu-close');
const headerMobMenu = document.querySelector('.header__nav-mobmenu');
const headerNavMobMenuUserAuth=document.querySelector('.header__nav-mobmen-user__auth');
const headerNavMobMenuBtnAuth=document.getElementById('header__nav-mobmenu-btn');
//const headerNavMenuButton=document.querySelector('.header__nav-menu-button');
const headerNavMenuItem=document.querySelectorAll('.header__nav-menu-item');
const headerLogo=document.querySelector('.header__logo');
const headerNavMenuUserInfo=document.querySelector('.header__nav-menu-user-info');
const headerNavHomeMenu=document.querySelector('.header__nav-home-menu');
const headerNavMobmenuHide=document.querySelector('.header__nav-mobmenu');



const headerMobUserAuth=()=>{  
  
    if(VirtualUser.userAuth){
        headerNavMobMenuUserAuth.innerHTML=(`
        <h6 class="header__nav-mobmen-user-name">${VirtualUser.userName}</h6>
        <img class="header__nav-mobmen-user-photo"src="${VirtualUser.userPhoto}" alt="user photo">`);
    headerNavMobMenuBtnAuth.innerHTML=(`<button class="header__nav-mobmenu-btn" id="header__nav-mobmenu-btn-sign-out">Sing Out</button>`);
    headerNavMobMenuBtnSignInOut=document.getElementById('header__nav-mobmenu-btn-sign-out');
    }else{
    headerNavMobMenuUserAuth.innerHTML=``;
    headerNavMobMenuBtnAuth.innerHTML=(`<button class="header__nav-mobmenu-btn" id="header__nav-mobmenu-btn-sign-in">Sing In</button>`);
    zheaderNavMobMenuBtnSignInOut=document.getElementById('header__nav-mobmenu-btn-sign-in');
    }
   
}
headerMobUserAuth();
const headerNavMobMenuClose=()=>{
    headerMobMenuBurger.classList.remove('header__nav-menu-burger__open-menu');
    headerMobMenuClose.classList.remove('header__nav-menu-close__open-menu');
    headerMobMenu.classList.remove('header__nav-mobmenu-menu__active');  
}
const headerNavMobMenu=()=>{       
    headerMobMenuBurger.classList.toggle('header__nav-menu-burger__open-menu');
    headerMobMenuClose.classList.toggle('header__nav-menu-close__open-menu');
    headerMobMenu.classList.toggle('header__nav-mobmenu-menu__active');
    } 

const headerUserAuth=()=>{  
        
  
    if(VirtualUser.userAuth){              
        headerNavMenuUserInfo.innerHTML='';
        headerNavMenuUserInfo.innerHTML=`<img class="header__nav-menu-photo-user" src=" ${VirtualUser.userPhoto}" alt="Photo user">`;                     
    }
     else{
        headerNavMenuUserInfo.innerHTML='';
        headerNavMenuUserInfo.innerHTML=`<button class="header__nav-menu-button">Sign In</button>`;
    }
    
    }
    headerUserAuth();

const headerHideUserMenu=()=>{
        headerNavHomeMenu.innerHTML='';
        headerNavHomeMenu.style.display='none';
           
    }


const headerNavHomeMenuItemClick=(e)=>{
 //   windowOverlayShow();
        const headerUserMenuItem=e.target.dataset.headerusermenu;        
        switch(headerUserMenuItem){
            case "userMenu":
               
            break;
            case "recentlyAdded":
                window.open("games.html","_self");
             
            break; 

            case "addNewCard":
                headerHideUserMenu();  
                windowAddCardShow();
                          
            break;  


            case "logOut":
              
                VirtualUser.userAuth=false;                
                delLocalStorage("virtualUser");
                headerHideUserMenu();           
                headerUserAuth();
                headerMobUserAuth();    
                addCardCursor();           
                headerNavMobMenuClose();  
                windowOverlayHide();
                break;                           
            }
         
    }



    

const headerUserMenu=()=>{  
        if(VirtualUser.userAuth){         
        headerNavHomeMenu.style.display='flex';
        headerNavHomeMenu.innerHTML='';
        headerNavHomeMenu.innerHTML=` 
        <ul class="header__nav-home-menu-user-menu-all">
            <li class="header__nav-home-menu-user-menu-items" data-headerUserMenu="userMenu" >User menu</li>
            <li class="header__nav-home-menu-user-menu-items" data-headerUserMenu="recentlyAdded">Games</li>            
            <li class="header__nav-home-menu-user-menu-items" data-headerUserMenu="logOut">Log out</li>
        </ul>
        <img class="header__nav-home-menu-user-menu-all-arrow"src="./scr/assets/images/header_arrow_up.svg" alt="arrow"></img>`;

    const headerNavHomeMenuItem=document.querySelectorAll('.header__nav-home-menu-user-menu-items');
      
    headerNavHomeMenuItem.forEach(menu=>{
        menu.addEventListener('click',headerNavHomeMenuItemClick); }); 
        }
      }       
   




  
 
   

    const headerNavMenuItemClick=(e)=>{
        const headerMenuActive=e.target.dataset.headermenu;    
        headerNavMenuItem.forEach( (headerMenu)=> {
        if(headerMenu.classList.contains("header__nav-menu-item__active")) 
        headerMenu.classList.remove("header__nav-menu-item__active");});
        e.target.classList.add('header__nav-menu-item__active'); 
        switch(headerMenuActive){
        case "Home":
           
            window.open("index.html","_self");
        break;
        case "Games":
            window.open("games.html","_self");
       ;
        break; 
        case "Features":
        
        break;  
        default:
         
        break;    
        }
        }
    
    
        headerNavMenuItem.forEach(headerNavMenu => {
        headerNavMenu.addEventListener('click',headerNavMenuItemClick);
        });
    
    

const headerNavMobmenuMenu=document.querySelectorAll('.header__nav-mobmenu-menu');

const NavMobMenuItemClick=(e)=>{
    const headerMenuItem=e.target.dataset.mobmenu;  
    switch(headerMenuItem){
        case "Home":
            window.open("index.html","_self");
          
        break;
        case "cardManagement":
            window.open("games.html","_self");
          
        break; 
        case "Company":
           
        break;  
        case "Features":
         
        break; 
        Features
        default:
          
        break;    
        }
        }

headerNavMobmenuMenu.forEach(NavMobMenuItem => {
    NavMobMenuItem.addEventListener('click',NavMobMenuItemClick);
    });






const headerMobMenuClickBurger=()=>{
    headerMobUserAuth();
    headerNavMobMenu();
    windowOverlayShow();
   
    }


const headerMobMenuClickClose=()=>{
    headerNavMobMenu();
    windowOverlayHide(); 
   
    }


const headerNavMobMenuBtnSignClick=()=>{
       CloseWindowHandlerSign='header__sign-in';
    if(headerNavMobMenuBtnSignInOut.id==='header__nav-mobmenu-btn-sign-in'){
        windowOverlayShow();
        headerNavMobMenuClose();
        windowSignInShow();        

    }else if(headerNavMobMenuBtnSignInOut.id==='header__nav-mobmenu-btn-sign-out'){
        VirtualUser.userAuth=false;       
        delLocalStorage("virtualUser");    
        windowOverlayHide();
        windowSignInHide();     
        headerNavMobMenuClose();
        headerMobUserAuth();
        
             
    }    
    headerUserAuth();       
    headerMobUserAuth();
    addCardCursor();
  
     }   
    
  

const headerNavMenuButtonClick=()=>{
    headerUserAuth(); 
    headerUserMenu();

  }  



const headerNavHomeMenuClick=(e)=>{
    
    
}


const headerNavMobmenuHideClick=(e)=>{
}
const headerLogoClick=()=>{
    window.open("index.html","_self");
}

headerMobMenuBurger.addEventListener('click', headerMobMenuClickBurger );
headerMobMenuClose.addEventListener('click', headerMobMenuClickClose );
headerNavMenuUserInfo.addEventListener('click', headerNavMenuButtonClick);
headerNavMobMenuBtnAuth.addEventListener('click',headerNavMobMenuBtnSignClick );
headerNavHomeMenu.addEventListener('click',headerNavHomeMenuClick);
headerNavMobmenuHide.addEventListener('click',headerNavMobmenuHideClick);
headerLogo.addEventListener('click',headerLogoClick);


