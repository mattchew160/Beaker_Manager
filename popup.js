$(function(){

    chrome.storage.sync.get(['total_meeps', 'limit'],function(beaker){
        $('#total_meeps').val(beaker.total);
        $('#limit').val(beaker.limit);

        
    });

 

    $('#spent_amount').click(function(){
        chrome.storage.sync.get('total', function(beaker) {
            var newTotal = 0;
            if (beaker.total){
                newTotal += parseInt(beaker.newTotal);
            }

            var amount = $('#amount').val();
            if(amount){
                newTotal += parseInt(amount);

            }
            chrome.storage.sync.set({'total': newTotal});

            $('#total').text(newTotal);
            
            $('#amount').val('');
        });




    });



    $('#on_click').click(function(){
        
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

        
        chrome.storage.sync.set({'total_meeps': (total_meeps)}, function(){
            
        
        });
        console.log(total_meeps);
       
        


    });

    
});


