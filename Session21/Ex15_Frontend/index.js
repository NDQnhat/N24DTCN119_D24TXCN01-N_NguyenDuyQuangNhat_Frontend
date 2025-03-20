let inputMoney = 0;
while(!inputMoney){
    inputMoney = +prompt("Enter your money: ");
    if(isNaN(inputMoney) || inputMoney % 1000 !== 0){
        alert("Invalid. Please enter again");
        inputMoney = 0;
    }
}
let count = 0;
// let 
while(inputMoney > 0){
    if(inputMoney >= 500000){
        inputMoney -= 500000;
        count++;
        if(inputMoney < 500000){
            alert(`You have ${count} 500.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 200000){
        inputMoney -= 200000;
        count++;
        if(inputMoney < 200000){
            alert(`You have ${count} 200.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 100000){
        inputMoney -= 100000;
        count++;
        if(inputMoney < 100000){
            alert(`You have ${count} 100.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 50000){
        inputMoney -= 50000;
        count++;
        if(inputMoney < 50000){
            alert(`You have ${count} 50.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 20000){
        inputMoney -= 20000;
        count++;
        if(inputMoney < 20000){
            alert(`You have ${count} 20.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 10000){
        inputMoney -= 10000;
        count++;
        if(inputMoney < 10000){
            alert(`You have ${count} 10.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 5000){
        inputMoney -= 5000;
        count++;
        if(inputMoney < 5000){
            alert(`You have ${count} 5.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 2000){
        inputMoney -= 2000;
        count++;
        if(inputMoney < 2000){
            alert(`You have ${count} 2.000 VND`);
            count = 0;
        }
    }else if(inputMoney >= 1000){
        inputMoney -= 1000;
        count++;
        if(inputMoney < 1000){
            alert(`You have ${count} 1.000 VND`);
            count = 0;
        }
    }
}