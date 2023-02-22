let coinFlip = Math.round(Math.random());
        console.log(coinFlip);
        let choice = prompt('Choose heads or tails');
        if(coinFlip) { //coinFlip = 1 (true)
        if(choice == 'heads') {
            alert('The flip was heads, you chose heads...you WIN!!!');             
            } else {
                alert('The flip was heads, you chose tails... you LOSE!');
                }
        } else { //coinFlip = 0 (false)
            if(choice == 'heads') {
                alert('The flip was tails, but you chose heads...you lose!');
            } else {
                alert('The flip was tails, you chose tails...you WIN!');
                }
        }