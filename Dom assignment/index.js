const root = document.getElementById('root') ;
root.addEventListener('mouseover', function(){
    root.style.color='pink';
})


let element = document.getElementsByClassName('blue-white');
for (var i= 0;i<element.length;i++){
element[i].addEventListener('mouseover', function(event){
    event.target.style.backgroundColor='blue';
   event.target.style.color='white';
}) ;
}

const para = document.getElementsByTagName('p');
for (var i= 0; i<para.length;i++){
para[i].addEventListener('mouseover', function (event){
event.target.style.fontSize ='50px';
});
}