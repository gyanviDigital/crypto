var explorDlg=document.getElementById("explorDlg");
var learnDlg=document.getElementById("learnDlg");
var indiDlg=document.getElementById("indiDlg");
var busDlg=document.getElementById("busDlg");
var devDlg=document.getElementById("devDlg");
var comDlg=document.getElementById("comDlg");

function exDlg(number) {
       
    if (number==1) {
        explorDlg.open=true;  
       // explorDlg.open=false;
        learnDlg.open=false;
        indiDlg.open=false;
        busDlg.open=false;
        devDlg.open=false;
        comDlg.open=false;
    }
    else if(number==2){
        learnDlg.open=true;
        explorDlg.open=false;
       // learnDlg.open=false;
        indiDlg.open=false;
        busDlg.open=false;
        devDlg.open=false;
        comDlg.open=false;
        
        
    }
    else if(number==3){
        indiDlg.open=true;
        explorDlg.open=false;
        learnDlg.open=false;
       // indiDlg.open=false;
        busDlg.open=false;
        devDlg.open=false;
        comDlg.open=false;
        
        
    }
    else if(number==4){
        busDlg.open=true;
        explorDlg.open=false;
        learnDlg.open=false;
        indiDlg.open=false;
        //busDlg.open=false;
        devDlg.open=false;
        comDlg.open=false;
        
        
    }
    else if(number==5){
        devDlg.open=true;
        explorDlg.open=false;
        learnDlg.open=false;
        indiDlg.open=false;
        busDlg.open=false;
       // devDlg.open=false;
        comDlg.open=false;
        
        
    }  
     else if(number==6){
       comDlg.open=true;
       explorDlg.open=false;
        learnDlg.open=false;
        indiDlg.open=false;
        busDlg.open=false;
        devDlg.open=false;
       // comDlg.open=false;
       
       
    }
   
}
function exDlg2(number) {
    if (number==1) {
    explorDlg.open=false;   
    }
    else if(number==2){
        learnDlg.open=false;
    }
    else if(number==3){
        indiDlg.open=false;
    }
    else if(number==4){
        busDlg.open=false;
    }
    else if(number==5){
        devDlg.open=false;
    }  
     else if(number==6){
        comDlg.open=false;
    }
}