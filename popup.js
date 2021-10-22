





// runs js only after the Dom fully loads, this is a must!!!!!
window.onload=function(){

    let meeps = 0;
    let on_off = true;
    
    // type conversion  let meeps = String(total_meeps);
    
    /// this is very important for developing chrome extentions, chrome will 
    // not run inline script, it must be in a seperate js file
    // and then needs this line here, where chrome needs an event 
    // listener to allow a script will a function to happen. 
    // plus is the name of the function and the second plus is adding the event 
    // listener to the plus function
    
    document.getElementById("plus").addEventListener('click', plus1);
    document.getElementById("meep_noise").addEventListener('click', on_click_noise);
    
    
    function plus1() {
        let mes = Number(document.getElementById('total_meeps').innerHTML);
        mes++;
        document.getElementById('total_meeps').innerHTML = String(mes);
        
    
    
    

}

function on_click_noise(){
                
    let x =Math.floor( Math.random() * 4);
    
    switch(x) {
        case 0:
            audio = new Audio('audio/mee_1.mp3');
            audio.play();
            
            break;

        case 1:
            audio =  new Audio('audio/mee_2.mp3');
            audio.play();
            break;

        case 2:
            audio = new Audio('audio/mee_3.mp3');
            audio.play();
            break;

        case 3:
            audio = new Audio('audio/mee_4.mp3');
            audio.play();
            break;


         
    }


}



// == loose comparison

//=== stict comparison, values must be of the same data type to be compared
} // on window load
