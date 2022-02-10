const account = {
  accountName: "Mathilda Nilsson",
  balance: 100,
  getBalance (){
   return this.balance;
  },
  deposit(){
    /*We have to use a parseFloat due to prompt that will return a string and so we have to
    parse our input from the promt to a floating point number so we can work with numbers in our ATM*/
    let moneyToInsert = parseFloat(prompt("How much money do you want to deposit?"));
    if(moneyToInsert < 1 || moneyToInsert === '' || moneyToInsert === null || isNaN(moneyToInsert)){
      this.accountError();
      this.deposit();
    }else{
    this.balance += moneyToInsert;
    }
  },
  withdrawal(){
    let moneyToWithdraw = parseFloat(prompt("Insert Amount to withdraw"));
    if(moneyToWithdraw > this.balance || moneyToWithdraw < 1 || moneyToWithdraw === '' || moneyToWithdraw === null || isNaN(moneyToWithdraw)){
      this.accountError();
      this.withdrawal();
    }else{
    this.balance -= moneyToWithdraw;
    }
  },
  getAccountName(){
    return this.accountName;
  },
  accountError(){
    /* We build this function so we can call it when we need to alert an error.
    That way we can reuse this function everytime we need to alert an error and it
    will save us time to just call this function and minimize the code*/
    alert(`Not a valid entry, try again`);
  },
  exitAccount(){
    return atmRunning = false;
  },
}

atm();

function atm() {
let atmRunning = true;
do{
let menuChoice = parseFloat(prompt("Select a choice:\n1.See Balance\n2.Make a deposit\n3.Make a withdrawal\n4.Get account name\n5.Exit"));
/*I used a switch because I think it is the most appropriate to build a menu, it is easy to 
build up and get an overview of the options you want to have in every case*/
switch (menuChoice) {
  case 1:
    alert(`${account.getBalance()}`);
    break;
  case 2: 
    account.deposit();
    break;
  case 3:
    account.withdrawal();
    break;
  case 4:
    alert(`Name of account: ${account.getAccountName()}`);
    break;
  case 5:
    exitAccount;
    break;
  default:
    account.accountError();
    atm();
}
}while(atmRunning);
}