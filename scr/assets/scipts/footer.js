const footerNewWayForm=document.querySelector(".footer__new-way-form");


const footerNewWayFormSubmit=(e)=>{
    e.preventDefault();
    newWayFormEmail=footerNewWayForm.elements["email"].value;   
    document.querySelector('.footer__new-way-form').reset();
}
footerNewWayForm.addEventListener('submit',footerNewWayFormSubmit);