let c=0;

let div= $("#counter");

function counter(){
    c++;
    div.text(c);

}    

function init(){

    $("#div-info2").hide();

    $("#btn-counter").on('click',counter);
    $("#btn-counter").on('mouseover',function(){
        console.log("The user attempts to click");

    });
    
    $("#link-info1").on("click",function(){
       $("#div-info2").hide();
       $("#div-info1").show();
    });

    $("#link-info2").on("click", function(){
        $("#div-info1").hide();
        $("#div-info2").show();
        
    });




}

    
   window.onload=init;
   

   

