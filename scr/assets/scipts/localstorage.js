
let VirtualUser={
    userAuth:"",    
    userName:"",
    userInstagram:"",
    userPassword:"",
    userPhoto:""
    };

    let ARTICLES = [];
    let userdata=[];    
//читает с локал сторадж, взвращает если есть, значение ключа, если нет или null....
  const readLocalStorage= (name)=>{
    const data= JSON.parse(localStorage.getItem(name));
    return data;
  }
//записывает в локал сторадж данные, и под каким иминем
 const writeLocalStorage=(userData, name)=>{
  localStorage.setItem(name,JSON.stringify(userData));
 }
//стирает данные под именем
  const delLocalStorage=(name)=>{
    localStorage.removeItem(name);
  }

 

  if (readLocalStorage("virtualUser")){
    VirtualUser=readLocalStorage("virtualUser");    
  }else VirtualUser.userAuth=false;

 localStorage.setItem("virtualarticles",JSON.stringify(ARTICLES1));
 
  if(readLocalStorage("virtualarticles")) ARTICLES=readLocalStorage("virtualarticles");
 
  writeLocalStorage(userdata1,"virtualuserdata");
