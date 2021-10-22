
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
    
    
    
    function plus1() {
        let mes = Number(document.getElementById('total_meeps').innerHTML);
        mes++;
        document.getElementById('total_meeps').innerHTML = String(mes);
        }
    
    


}






// == loose comparison

//=== stict comparison, values must be of the same data type to be compared
