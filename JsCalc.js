let numb = '';
let keeper = '';

function type(evn) {
    if(typeof keeper === 'number') keeper = '';
    if (!(numb.includes('.') && evn.srcElement.innerHTML === '.' ||
     numb === '' && evn.srcElement.innerHTML === '.' ||
     numb === '0' && evn.srcElement.innerHTML !== '.')) {
        numb += evn.srcElement.innerHTML;
    }
    document.getElementById('display').innerHTML = numb;
}


function sum() {
    if(typeof keeper === 'number') {
        keeper += numb + '+';
        numb = '';
    }
    if (!(numb === '' || numb[numb.length - 1] === ".")) {
        if (keeper[keeper.length - 1] === '+' 
        || keeper[keeper.length - 1] === '-'
        || keeper[keeper.length - 1] === '*'
        || keeper[keeper.length - 1] === '/') {    
            keeper += numb
            numb = '';
            keeper = calculator() + '+';
        } else { 
             keeper += numb + '+';
             numb = '';
            
        }
    }
  
}

function subtr() {
    if(typeof keeper === 'number') {
        keeper += numb + '-';
        numb = '';
    }
    if (!(numb === '' || numb[numb.length - 1] === ".")) {
        if (keeper[keeper.length - 1] === '+' 
        || keeper[keeper.length - 1] === '-'
        || keeper[keeper.length - 1] === '*'
        || keeper[keeper.length - 1] === '/') {
            keeper += numb
            numb = '';
            keeper = calculator() + '-';
        } else { 
             keeper += numb + '-';
             numb = '';
            
        }
    }
  
  }

function mult(){
    if(typeof keeper === 'number') {
        keeper += numb + '*';
        numb = '';
    }
    if (!(numb === '' || numb[numb.length - 1] === ".")) {
        if (keeper[keeper.length - 1] === '+' 
        || keeper[keeper.length - 1] === '-'
        || keeper[keeper.length - 1] === '*'
        || keeper[keeper.length - 1] === '/') {
            keeper += numb
            numb = '';
            keeper = calculator() + '*';
        } else { 
             keeper += numb + '*';
             numb = '';
            
        }
    }
  
  }

function div() {
    if(typeof keeper === 'number') {
        keeper += numb + '/';
        numb = '';
    }
    if (!(numb === '' || numb[numb.length - 1] === ".")) {
        if (keeper[keeper.length - 1] === '+' 
        || keeper[keeper.length - 1] === '-'
        || keeper[keeper.length - 1] === '*'
        || keeper[keeper.length - 1] === '/') {
            keeper += numb
            numb = '';
            keeper = calculator() + '/';
        } else { 
             keeper += numb + '/';
             numb = '';
            
        }
    }
    }
  

function calculator() {
    if (numb.length !== 0 && keeper.length !== 0) keeper += numb;
    if (numb.length !== 0 && keeper.length === 0) return clean();
    if (keeper[keeper.length - 1] === '+' 
    || keeper[keeper.length - 1] === '-' 
    || keeper[keeper.length - 1] === '*' 
    || keeper[keeper.length - 1] === '/') return clean();
        for (let i = 0; i < keeper.length; i++) {
            if ((keeper[i] === '+' 
            || keeper[i] === '-' 
            || keeper[i] === '*' 
            || keeper[i] === '/') 
            && i !== 0) {
                let operator = keeper[i];
                let leftNum = +keeper.slice(0,i);
                let rightNum = +keeper.slice(i + 1);
                if(operator === '+') keeper = leftNum + rightNum;
                if(operator === '-') keeper = leftNum - rightNum;
                if(operator === '*') keeper = leftNum * rightNum;
                if(operator === '/') keeper = leftNum / rightNum;
            }
    }
    document.getElementById('display').innerHTML = keeper;
    numb = ''
    return keeper;
}

function clean() {
    keeper = '';
    numb = '';
    document.getElementById('display').innerHTML = 0;
}