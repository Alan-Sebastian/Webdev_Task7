function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
    var a=document.getElementById("screen").value;
    console.log(a)
}
function clearDisplay(){
    document.getElementById("screen").value="";
}
function equalClick(){
    var sum=document.getElementById("screen").value;
    var result=eval(sum);
    document.getElementById("screen").value=result;
}