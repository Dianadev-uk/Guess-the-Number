let numberToFind = 0;
let attempts = 0;

function refresh() {
    // creates a random number
    attempts = 0;
    
    numberToFind = parseInt(Math.random() * 100); //parseInt works to just creat whole numbers, not decimals (ex: 39,757567493)
    console.log(numberToFind)
}

function verifyNumber() {
    
    let bet = document.getElementById('bet').value;

    if (bet > 100 || bet < 1) {
        alert('Invalid bet!');
        return;
    }
    if (bet > numberToFind) {
        attempts++;
        alert('⚠️ The number to be found is SMALLER!');
    }
    else if (bet < numberToFind) {
        attempts++;
        alert('⚠️ The number to be found is BIGGER');
    }
    else {
        alert('✅ Well done, you got it right! With ' + attempts + ' mistakes');
        refresh();
    }
}

refresh();