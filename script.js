var arrawlist= Array.from(document.querySelectorAll("#shirt"))
console.log(arrawlist);
var nextbtn =document.getElementById('next')
var prevbtn =document.getElementById('pre')
var imgCurrent=-1;
var itemBox=document.getElementById("photo")
var openn=Array.from(document.querySelectorAll("#view"))

console.log(openn);
const styles = window.getComputedStyle(itemBox);
const image = styles.backgroundImage;
const url = image.slice(27, -2);
var exit=document.getElementById("exit")
var overlay=document.getElementById("shade")
var submit=document.getElementById("submits")


console.log(image);
console.log(url);



function next(){
    imgCurrent++;
    // console.log(imgCurrent)
    if(imgCurrent>arrawlist.length-1){
        imgCurrent=0;
        itemBox.style.backgroundImage=`url('${url}')`;
    }
    var img=arrawlist[imgCurrent].getAttribute('src');
    console.log(img);
    itemBox.style.backgroundImage=`url('${img}')`;   
    
}
prevbtn.addEventListener('click',function(){
    imgCurrent--;
    if(imgCurrent<0){
        imgCurrent=arrawlist.length-1;
    }
    console.log(imgCurrent)
    var img=arrawlist[imgCurrent].getAttribute('src');
    itemBox.style.backgroundImage=`url('${img}')`;   
    
})
nextbtn.addEventListener('click',next)

exit.addEventListener("click",function(){
  overlay.style.display='none';
})

for(var i=0;i<openn.length;i++){
openn[i].addEventListener("click",function(e){
  overlay.style.display='block';
})}
var back=document.getElementById("back")
submit.addEventListener("click" ,function(e){
    e.preventDefault();
    
    var gmail = document.getElementById('mail')
 
    
    var gmail_pattern = /^\w{5,13}@(gmail|yahoo)\.com$/;
    if (gmail.value.length !=0) {
        if (!gmail_pattern.test(gmail.value)) {
            back.nextElementSibling.innerHTML = `${gmail.name} is invalid`
            // error = true;

        }
        else{
            back.style.display="none";
            back.nextElementSibling.innerHTML = `Thanks for signing up for the
             newsletter! We'll be in touch soon.`;
             back.nextElementSibling.style.color="gray";
             back.nextElementSibling.style.marginTop="29px";
        }

    }else{
        back.nextElementSibling.innerHTML = `${gmail.name} is empty`
    }

})




// nav bar section


//search
var search=document.getElementById("search")
console.log(search);
var searchContent =document.getElementById("searchcont")
console.log(searchContent);
var close =document.getElementById("close")
// console.log(close);
var header =document.getElementById("head")
console.log(header);
var x =document.getElementById("head");
search.addEventListener('click',function(){
    searchContent.style.display="flex"
    // console.log("done");
})
close.addEventListener('click',function(){
    searchContent.style.display="none";
})

close.addEventListener('click',function(){
    if(x.className === "headerresp"){
        x.className = "header"
        console.log(x.className)
    }
})

//nav responsive
function myFunction(){
    if(x.className === "header" ){
        x.className += "resp";
    }
}