





// runs js only after the Dom fully loads, this is a must!!!!!
window.onload=function(){

    console.log('Loading finished, popup.js starting');

    storeUserPrefs();

    // gets function for local stored variable
    //attempt didn't work
    
    chrome.storage.sync.get(['myKey'], function(result) {

        try{
            console.log('Meeps currently is ' + result.meeps);
        }
        catch{
            let hi = 33;
            chrome.storage.sync.set({[meeps] : hi}, function() {

                console.log('Value is set to ' + meeps);
              });

        }
            

        

        console.log('Meeps currently is ' + result.Meeps_counter);
      });

      

      





      function storeUserPrefs() {
        var key = "myKey",
            testPrefs = JSON.stringify({
                'meeps': 0
            });
        var vals = {};
        vals[key] = testPrefs;
        chrome.storage.sync.set(vals, function () {
            console.log('Saved', key, testPrefs);
        });
    
    }
















    
    // type conversion  let meeps = String(total_meeps);
    
    /// this is very important for developing chrome extentions, chrome will 
    // not run inline script, it must be in a seperate js file
    // and then needs this line here, where chrome needs an event 
    // listener to allow a script to run for a function to happen. 
    // plus is the name of the function and the second plus is adding the event 
    // listener to the plus function
    
    document.getElementById("plus").addEventListener('click', plus1);
    document.getElementById("meep_noise").addEventListener('click', on_click_noise);
    document.getElementById("Create Floating Beaker").addEventListener('click', spawn_beaker);
    
    
    function plus1() {
        //this grabs the DOM of the popup html tag for the meeps
        let mes = Number(document.getElementById('total_meeps').innerHTML);
        mes++;
        //updates the meeps number and writes it back to the popup html
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
