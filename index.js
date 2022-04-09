

document.querySelector("#roll").addEventListener("click",myfunction)

var p1=document.createElement("p")
document.querySelector("#member1").append(p1)
var p2=document.createElement("p")
document.querySelector("#member2").append(p2)
var p3=document.createElement("p")
document.querySelector("#member3").append(p3)


function myfunction()
{
    console.log("hi")

   p1.innerText = Math.floor((Math.random()* 6)+1);
   var x=p1.innerText


   
    p2.innerText = Math.floor((Math.random()* 6)+1);
    var y=p2.innerText
  
    p3.innerText=Math.floor((Math.random()* 6)+1);
    var z=p3.innerText
    

    console.log(x,y,z)
    if((x>y)&&(x>z))
    {
        document.querySelector("#winner").innerText="Winner is : Member A"

    }
    if((y>x)&&(y>z))
    {
        document.querySelector("#winner").innerText="Winner is: Member B"
        
     
    }
    if((z>x)&&(z>y))
    {
        document.querySelector("#winner").innerText="Winner is : Member C"
  
    }

    if((x>y)&&(x>z)) p1.style.backgroundColor="green"
    if((y>x)&&(y>z)) p2.style.backgroundColor="green"
   if((z>x)&&(z>y)) p3.style.backgroundColor="green"
      
    if((x<y)&&(x<z)) p1.style.backgroundColor="red"
     if((y<x)&&(y<z)) p2.style.backgroundColor="red"
   if((z<x)&&(z<y)) p3.style.backgroundColor="red"

    if((x>y)&&(x<z)|| (x<y)&&(x>z)) p1.style.backgroundColor="yellow"
     if((y>x)&&(y<z)|| (y<x)&&(y>z)) p2.style.backgroundColor="yellow"
    if((z>x)&&(z<y)|| (z<x)&&(z>y)) p3.style.backgroundColor="yellow"

    if(x==y )
    {
p1.style.background="blue"
p2.style.background="blue"
    }
  if(x==z)
    {
p1.style.background="blue"
p3.style.background="blue"
    }
    if(y==z )
    {
p2.style.background="blue"
p3.style.background="blue"
    }
    if(x==y && x==z )
    {
p1.style.background="blue"
p2.style.background="blue"
p3.style.background="blue"
    }
    
}
