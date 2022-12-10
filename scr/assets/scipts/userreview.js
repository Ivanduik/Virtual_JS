const clientSayClientsItem=document.querySelector(".client-say__clients-item");
function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  let j=0;
const clientSayClientsItemAdd=()=>{
    
  
    clientSayClientsItem.innerHTML=``;

    if(ARTICLES.length!==0){
        if(ARTICLES.length<3){
            j=ARTICLES.length;
        }else j=3;

            for(let i=0;i<j;i++){ 

                let k=RandomInt(0,ARTICLES.length-1);
                    clientSayClientsItem.innerHTML+=`
                            <li class="client-say__clients-item-card">
                            <h3 class="client-say__clients-item-card-text">
                                <span class="client-say__clients-item-card-yellow-text">${ARTICLES[k].starstar+' '} </span> ${ARTICLES[k].star}
                            </h3>
                            <blockquote class="client-say__clients-item-card-blockquote">
                               "${ARTICLES[k].userReview}"
                            </blockquote> 
                            <div class="client-say__clients-item-card-info">
                                <img class="client-say__clients-item-card-info-photo" src="${ARTICLES[k].userPhoto}">
                                <div class="client-say__clients-item-card-info-name">
                                    <p class="client-say__clients-item-card-info-name-user">${ARTICLES[k].userName}</p>
                                    <a class="client-say__clients-item-card-info-name-link" href="instagram:">${ARTICLES[k].userInstagram}</a>
                                        
                                </div>
                            </div>                  
    
                        </li>
                        `;     
                } 
    }
}

clientSayClientsItemAdd();