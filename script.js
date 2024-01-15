const btn=document.querySelector("button");
const hrt1=document.querySelector("#Li");
const hrt2=document.querySelector("#Fi");
btn.addEventListener("click",()=>{

    // btn.innerHTML="following";            only one time work
    // btn.style.backgroundColor="green";

if(btn.innerHTML==="Follow"){
    btn.innerHTML="Following";
    btn.style.backgroundColor="rgb(5, 205, 255)";
}
else{
    btn.innerHTML="Follow";
    btn.style.backgroundColor="rgb(158, 158, 158)";
}

});

hrt1.addEventListener("click",()=>{

    if(hrt1.innerHTML == hrt1.innerHTML){
        hrt1.style.display="none";
        hrt2.style.display="block";
        hrt2.style.color="red";
    }
    else{
        hrt2.style.display="none";
    }


});