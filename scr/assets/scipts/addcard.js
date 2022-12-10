let addCardForm=document.querySelector('.add-card-container');
const windowAddCardShow=()=>{
   
    //windowOverlayShow();
 
    addCardContainer.style.display="flex";
    addCardContainer.innerHTML =`
    
     <div class="ellipse-games">
            <div class="ellipse-games-elAdd">
            </div>
    </div>

    <div class="add-card__header">
    <h3 class="add-card__header-title">Realities games</h3>
  </div>
  <form class="add-card-form" action="" id="add-card-form">
  <legend class="add-card__title">Add new card</legend>
  <input class="add-card__input-style" type="text" name="CardName" placeholder="Card name" required>
  <input class="add-card__input-style" type="text" name="CardDescription" placeholder="Card description" required>
  <input class="add-card__input-style" type="text" name="gameReview" placeholder="Game review" required>
  <input class="add-card__input-style" type="text" name="CardImageName" placeholder="Card image name" required>
  <input class="add-card__btn"type="submit" value="Add game">   
  </form>`  
  addCardForm=document.querySelector('.add-card-form');  
}


const windowAddCardHide=()=>{    
    addCardContainer.style.display="none";
    addCardContainer.innerHTML=``;
   // windowOverlayHide();  
}
const addCardFormSubmit=(e)=>
{   
    e.preventDefault();
    const CardName=addCardForm.elements["CardName"].value;
    const CardDescription=addCardForm.elements["CardDescription"].value;
    const gameReview=addCardForm.elements["gameReview"].value;
    const CardImageName=addCardForm.elements["CardImageName"].value;    
    const CardDate=Date.now();
    const cardId=VirtualUser.userName+CardDate;   
    document.querySelector('.add-card-form').reset();
    
    ARTICLES.push(
           {               
                id:cardId,
                userName: VirtualUser.userName,
                userInstagram:VirtualUser.userInstagram,
                userPhoto:VirtualUser.userPhoto,
                cardName: CardName,
                сardDescription: CardDescription,
                сardImageName: CardImageName,
                imgAlt: `${CardName} VR game`,
                date: Date.now(),
                userReview:gameReview,
                starstar:"starstar",
                star:"star",
            }  
        
    );
   
    writeLocalStorage(ARTICLES,"virtualarticles");
    if(window.name=="games"){
    pageGenerator(gamesExperiencesVideoPrevItem,outputPage(ARTICLES,curentPage,elPerPage));
    pageNamberGenerate(gamesExperiencesVideoPagination,startElPagin,lenghtElPagin,allPage(ARTICLES),curentPage);}
    windowAddCardHide();
    windowOverlayHide();   
}

addCardForm.addEventListener('submit',addCardFormSubmit);
