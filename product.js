let button=document.querySelectorAll("#tabcont .buttoncont button");
let panel=document.querySelectorAll("#tabcont .pannel")

// above this catch all the elemnents,classes, ids etc.


function clickpannel(pindex,colorcode){
    button.forEach(function (data){
        data.style.backgroundColor="";
        data.style.color="";
        
    })
    button[pindex].style.backgroundColor=colorcode;
    button[pindex].style.Color="white";
    panel.forEach(function (data){
        data.style.display="none";
    });
    panel[pindex].style.display="block";


}
clickpannel(0,'#e5b95f')
function toHome(){
    document.location.href="index.html"
}