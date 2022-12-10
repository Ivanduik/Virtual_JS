window.name="games";
const authBtnb=document.querySelector(".header__nav-menu-user-info");
const gamesAddCardBtn=document.querySelector('.games__addcard-btn');
const gamesExperiencesFiltrSelect = document.querySelector('.games-experiences__filtr-select');
const gamesExperiencesVideoPagination=document.querySelector(".games-experiences__video-pagination");
const selectPagePagination=document.querySelectorAll(".games-experiences__video-pagination");
const gamesExperiencesVideoPrevItem=document.querySelector(".games-experiences__video-prev-item");
const gamesExperiencesVideoPageItemNumberArrow=document.querySelectorAll(".games-experiences__video-page-item-number-arrow");
const imageCardAdd=document.querySelector(".image-card");

let elPerPage=12;
let elPerPageDesk=12;
let elPerPageMob=3;

let curentPage=1;
let lenghtElPagin=2;
let startElPagin = 1;

  

const allPage=(el)=>{
return Math.ceil(el.length/elPerPage);
}



const btnPagination=(number,addClass)=>{
    const str=`<button class="${addClass}" data-page=${String(number)}>${String(number)}</button>`;   
    return str; 
    }
    
const outputPage=(fdata,fcurentPage,felPerPage)=>{
return fdata.slice(felPerPage*fcurentPage-felPerPage,felPerPage*fcurentPage);
}

const card = (el) => {
    
    let сardDescription=el.сardDescription.split(' ');
    let userReview=el.userReview.split(' ');

    if(сardDescription.length>13)сardDescription=`${el.сardDescription.split(' ',14).join(' ')}...` 
    else сardDescription=el.сardDescription;
        
    if(сardDescription.length>110)
        сardDescription=`${el.сardDescription.slice(0,114)}...`;                        

    
    if(userReview.length>13)
        userReview=`${el.userReview.split(' ',14).join(' ')}...`;
        else userReview=el.userReview;

    if( userReview.length>110)
        userReview=`${el.сardDescription.slice(0,114)}...`; 
    
   
    const str =` 
   

    <img class="games-experiences__video-prev-item-img-opt"  data-cardid="${el.id}" src="${el.сardImageName}" alt="${el.imgAlt}">
    
    <div class="games-experiences__video-prev-item-img-info-all" data-cardid="${el.id}">
    <div class="games-experiences__video-prev-item-img-info" data-cardid="${el.id}">
        <h3 class="games-experiences__video-prev-item-img-info-title" data-cardid="${el.id}">${el.cardName}</h3>
        <p class="games-experiences__video-prev-item-img-info-text" data-cardid="${el.id}">${сardDescription}</p>
    </div>
    <div class="games-experiences__video-prev-item-img-info" data-cardid="${el.id}">
        <h3 class="games-experiences__video-prev-item-img-info-title" data-cardid="${el.id}">${el.userName}</h3>
        <p class="games-experiences__video-prev-item-img-info-text" data-cardid="${el.id}">${userReview}</p>
    </div>
    
    </div>`
    return str; 
}


const imagePage=(el)=>{
    const str =`  
        <div class="ellipse-games">
            <div class="ellipse-games-elpagetop">
            </div>
            <div class="ellipse-games-elpagebottom">
            </div>
    </div>
        <div class="image-card-image-container" >
        <img class="image-card-image" src="${el.сardImageName}" alt="1111">
        </div> 
        <div class="image-card__info">
        
        <h3 class="image-card__info-gamename">${el.cardName}</h3>
        <p class="image-card__info-gamedescription">${el.сardDescription}</p>

        <h3 class="image-card__info-username"><img class="image-card__info-user-foto" src="${el.userPhoto}" alt="User photo"> ${el.userName}</h3>
        <p class="image-card__info-userreview">${el.userReview}</p>
   
        
        </div>`;

return str;
}



const creatEl=(e,tag, className,inner,datasets )=>{
const elAdd=document.createElement(tag);
    if (className != null) elAdd.classList.add(className);
if(datasets!=null)elAdd.dataset.cardid = datasets;


elAdd.innerHTML=inner;
e.appendChild(elAdd);
}



const windowImagePageShow=(el)=>{
    windowOverlayShow();
    creatEl(imageCardAdd,"div","image-card-container",imagePage(el),null);
}
const windowImagePageHide=()=>{
    imageCardAdd.innerHTML='';
    windowOverlayHide();
}

const pageNamberGenerate=(elPad,nPage,nPagePerRow,allNPage,activePage)=>{ 
        gamesExperiencesVideoPageItemNumberArrow.forEach(disp=>{disp.style.display="none";});

    
    elPad.innerHTML="";  
    if((allNPage<=nPagePerRow+2)&&ARTICLES.length>0){      
      for(let i=1;i<=allNPage;i++)
    creatEl(elPad,"li",null,btnPagination(i,"games-experiences__video-page-item-number"),null);    
    }else{ 
     gamesExperiencesVideoPageItemNumberArrow.forEach(disp=>{disp.style.display="flex";});    
     for(let i=nPage;i<nPage+nPagePerRow;i++)creatEl(elPad,"li",null,btnPagination(i,"games-experiences__video-page-item-number"),null);
     creatEl(elPad,"li","pagination3Point",btnPagination("...","games-experiences__video-page-item-number pagination3Point"),null);
     creatEl(elPad,"li",null,btnPagination(allNPage-1,"games-experiences__video-page-item-number"),null);
     creatEl(elPad,"li",null,btnPagination(allNPage,"games-experiences__video-page-item-number"),null);     
    } 
    const activePageSelect=document.querySelectorAll(".games-experiences__video-page-item-number");
    if((allNPage<=nPagePerRow+2)&&ARTICLES.length>0){
        activePageSelect[activePage-1].classList.add("games-experiences__video-page-item-number-active");
    }else{
        if(activePage==allNPage){
        activePageSelect[nPagePerRow+2].classList.add("games-experiences__video-page-item-number-active");
        }
        if(activePage==allNPage-1){
        activePageSelect[nPagePerRow+1].classList.add("games-experiences__video-page-item-number-active");        
        }
        if(curentPage>=nPage&&curentPage<nPage+nPagePerRow)
        activePageSelect[curentPage-(nPage+nPagePerRow)+nPagePerRow].classList.add("games-experiences__video-page-item-number-active");
        

    }
 
}






const pageGenerator=(el,art)=>{
   el.innerHTML="";
    art.forEach(k => {    
        
        creatEl(el,"div","games-experiences__video-prev-item-img",card(k),k.id);
    });
}

const gamesExperiencesVideoPrevItemImgOpt = document.querySelectorAll("games-experiences__video-prev-item-img");
    
    const ItemImgClick=(e)=>{
        
   
    const imagePageOut=outputPage(ARTICLES,curentPage,elPerPage)
    imagePageOut.forEach(el=>{
     if(e.target.dataset.videoprevitemimgopt==el.id){
      
       windowImagePageShow(el);}
   
    });
    

}
gamesExperiencesVideoPrevItemImgOpt.forEach(ItemImg=>{
        ItemImg.addEventListener('click',ItemImgClick)
});






addCardCursor();


const gamesCardEmpty=()=>{    
        document.querySelector('.games-experiences__filtr-select').style.display="none";
        document.querySelector('.games-experiences__video-page-items').style.display="none";
        document.querySelector('.games-experiences__video-prev-item').innerHTML=`
        <div
        class="empty-game">
        Empty Games
        </div>
        `;
        addCardCursor();
}

const gamesCardNoEmpty=()=>{
    document.querySelector('.games-experiences__filtr-select').style.display="flex";
    document.querySelector('.games-experiences__video-page-items').style.display="flex";
    document.querySelector('.games-experiences__video-prev-item').innerHTML=``;
    pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
    pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));

}


const gamesExperiencesFiltrSelectChange =(e) =>{
    console.log('gamesExperiencesFiltrSelectChange',e.target.value);    
    pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
    pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));
    switch (e.target.value){
        case "new-first":
            const newFirst=ARTICLES.sort((a,b)=>b.date-a.date);                    
            pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
            pageGenerator(gamesExperiencesVideoPrevItem,outputPage(newFirst,curentPage,elPerPage));
            console.log(e.target.value);
            console.log('new-first',ARTICLES);
        break;
        case "new-last":
            const newLast=ARTICLES.sort((a,b)=>a.date-b.date);            
            pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
            pageGenerator(gamesExperiencesVideoPrevItem,outputPage(newLast,curentPage,elPerPage));
            console.log(e.target.value);
            console.log('new-last',ARTICLES);

        break;
        default:            
            pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
            pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));
            console.log(e.target.value);
        break;
    }
}

gamesExperiencesFiltrSelect.addEventListener('change',gamesExperiencesFiltrSelectChange);


 


    if(ARTICLES.length==0){
        gamesCardEmpty();
      
    }else{
        pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
        pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));       
    }
    
    const gamesAddCardBtnClick=()=>{ 
        if(VirtualUser.userAuth){
        windowAddCardShow();
        windowOverlayShow(); 
    }
    }



    

const addCardFormSubmitClick=()=>{
    if(ARTICLES.length>0)gamesCardNoEmpty(); 
    pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));
    pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
}

    gamesAddCardBtn.addEventListener('click', gamesAddCardBtnClick);
    addCardForm.addEventListener('submit',addCardFormSubmitClick);

const pageSelectClick=(e)=>{
    const el=document.querySelectorAll(".games-experiences__video-page-item-number");
    el.forEach(active=>{
        if(active.classList.contains("games-experiences__video-page-item-number-active"))
        active.classList.remove("games-experiences__video-page-item-number-active");       
    });

    if(e.target.dataset.page&&e.target.dataset.page!="..."){
    curentPage= Number(e.target.dataset.page);      
    pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));
    pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
   }
   
}

selectPagePagination.forEach(pageSelect=>{
pageSelect.addEventListener('click',pageSelectClick);
});

const arrowClick=(e)=>{
    const pageSwitch=e.target.dataset.page;
    gamesExperiencesVideoPageItemNumberArrow.forEach(disp=>{
        if(disp.classList.contains("games-experiences__video-page-item-number-arrow-active"))
        disp.classList.remove("games-experiences__video-page-item-number-arrow-active")
        ;});

    
    switch(pageSwitch){
        case '+' :
            if(startElPagin+lenghtElPagin+1!=allPage(ARTICLES))
             startElPagin++;
             if(startElPagin+lenghtElPagin+1==allPage(ARTICLES)) e.target.classList.add("games-experiences__video-page-item-number-arrow-active");
        break;
        case '-' :
            if(startElPagin!=1)
            startElPagin--;
            if(startElPagin==1) e.target.classList.add("games-experiences__video-page-item-number-arrow-active");
            break;
    }


}


gamesExperiencesVideoPageItemNumberArrow.forEach(arrow=>{
    arrow.addEventListener('click',arrowClick); 
});

if (window.innerWidth < 600) 
    elPerPage = elPerPageMob;

else 
    elPerPage = elPerPageDesk;   
    
   



const resizeW = () => {
    if (window.innerWidth < 600) 
        elPerPage = elPerPageMob;       
    else 
        elPerPage = elPerPageDesk;
      if(ARTICLES.length>0){
        pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
        pageGenerator(gamesExperiencesVideoPrevItem, outputPage(ARTICLES, curentPage, elPerPage));
        }
}

  if(ARTICLES.length>0){
        pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);
        pageGenerator(gamesExperiencesVideoPrevItem, outputPage(ARTICLES, curentPage, elPerPage));
        }

window.addEventListener('resize',resizeW);


const hendleDocumentGamesClick = (e) => {
    if (e.target.closest(".games-experiences__video-prev-item-img")) {
        page = outputPage(ARTICLES, curentPage, elPerPage);
        page.forEach(el => {
            if (el.id == e.target.dataset.cardid) windowImagePageShow(el);
                
        });
        
       
    }
    if (e.target.closest(".window-overlay")) windowImagePageHide();

}
document.addEventListener('click', hendleDocumentGamesClick);

