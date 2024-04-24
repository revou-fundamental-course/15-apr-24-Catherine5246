
function convert(){

    const number = parseFloat(document.getElementById('number').value);
    const original = document.getElementById('original').value;
    const converted = document.getElementById('converted').value;
    
    const reverse = document.getElementById('reverse');
    
    const result = document.getElementById('result').value;
    
    const method = document.getElementById('method').value;
    
    let convertedTemp;
    let formula;
    
    switch (original){
        case 'C':
            if (converted === 'F'){
                convertedTemp = (number * 9/5) +32;
                formula = "(" + number + "* 9/5) + 32";
            }
            else if (converted === 'K'){
                convertedTemp = (number + 273.15);
                formula = number + " + 273.15";
            }
            else {
                convertedTemp = number;
                formula = number;
            }
    
            break;
    
        case 'F':
            if (converted === 'C'){
                    convertedTemp = (number - 32)*5/9;
                    formula = "(" + number + " - 32)*5/9";
                }
            else if (converted === 'K'){
                    convertedTemp = (number - 32)*5/9 + 273.15;
                    formula = "(" + number + " -32)*5.9 + 273.15";
                }
            else {
                    convertedTemp = number;
                    formula = number;
                }
    
            break;
    
        case 'K':
            if (converted === 'C'){
                    convertedTemp = (number - 273.15);
                    formula = number + " - 273.15";
                }
            else if (converted === 'F'){
                    convertedTemp = (number - 273.15) *9/5 + 32;
                    formula = "(" + number + "- 273.15) * 9/5 +32";
                }
            else {
                    convertedTemp = number;
                    formula = number;
                }
    }
    
    document.getElementById('result').value = convertedTemp;
    document.getElementById('method').value = formula;
    
    }
    
    function reset(){
        number.value = null;
        result.value = null;
        method.value = null;
    }
    
    function reverse(){
        const temp = original.value;
        original.value = converted.value;
        converted.value = temp;
        calculate();
    }
    
    