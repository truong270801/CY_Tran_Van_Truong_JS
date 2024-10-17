function getResult(calculate) {
    const num1 = document.getElementsByClassName('num-1')[0].value;
    const num2 = document.getElementsByClassName('num-2')[0].value;
    let result = 0;
    if(num1 == '' || num2 == ''){
        alert('Không để trống');
        return;
    }

    if (calculate == 'plus') {
        result = parseFloat(num1) + parseFloat(num2);
    }
    else if(calculate =='sub'){

        result = parseFloat(num1) - parseFloat(num2);
       
    }
    else if(calculate =='multiple'){

        result = parseFloat(num1) * parseFloat(num2);
       
    }
    else if(calculate =='divide' ){
        if(num2 == 0){
            alert('Không được chia cho 0');
            return;
        }

        result = parseFloat(num1) / parseFloat(num2);
       
    }
    
    document.getElementById('result').textContent = result;
}