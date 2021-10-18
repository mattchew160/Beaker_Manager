$(function(){

    chrome.storage.sync.get(['total', 'limit'],function(beaker){
        $('#total').text(beaker.total);
        $('#limit').text(beaker.limit);
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

        var new_total = $('#total').val();
        chrome.storage.sync.set({'total': (new_total + 1)}, function(){
            
        
        });
       
        


    });

    
});