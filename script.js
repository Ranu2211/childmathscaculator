const addition=()=>{
        var a=parseInt(prompt("enter steps"));
        var sum=0;
        for(var i=1;i<=a;i++)
        {
            var b=parseInt(prompt(`enter ${i}th step`))
               sum=sum+b;
        }
        document.getElementById("input").value=sum;
}
const subtract=()=>{
    var p=parseInt(prompt("enter larger of two numbers"));
    var q=parseInt(prompt("enter another number"));
    var r=p-q;
    document.getElementById("input").value=r;
}
const multiply=()=>{
    var d=parseInt(prompt("enter steps"));
    sum=1;
    for(var i=1;i<=d;i++)
        {
            var b=parseInt(prompt(`enter ${i}th step`))
               sum=sum*b;
        }
      
        document.getElementById("input").value=sum;
       

}
const devide=()=>{
    var p=parseInt(prompt("enter Dividend"));
    var q=parseInt(prompt("enter Divisor"));
      r=p/q;
      r=parseInt(r);
      s=p%q;
      document.getElementById("input").value="Quotient is"+r+",remainder is"+s;
}

const percentage=()=>{
     var p=parseInt(prompt("enter percent"));
     var q=parseInt(prompt("enter the number"));
     r=((p*q)/100);
     document.getElementById("input").value=r;
}
const table=()=>{
    var p=parseInt(prompt("enter number"));
    document.getElementById("input").value="";
    for(var i=1;i<=10;i++)
     {
         document.getElementById("input").value+=i*p+",";
     }

}