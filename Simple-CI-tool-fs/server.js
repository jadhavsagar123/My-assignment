const fs=require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  
  function accountCreation() {
    const userData = {
      name: '',
      balance: 0,
      accountNumber: ''
    }
  
    readline.question(`What's your name?\n`, name => {
     userData.name = name;
     userData.accountNumber = Math.floor((Math.random() * 12345678) + 12345678)
     readline.question(`Enter amount to deposit?\n`, amount => {
        userData.balance=amount;

       
            console.log(`${userData.name} your account is created successfully`)
             console.log(`${userData.name} your accountnumber is ${userData.accountNumber} \n You have ₹${userData.balance} in your account\n\n`);
       

            readline.question(`Enter the choice what do you want to do with your account?\n
          1.credit
          2.debit\n`, ch => {
                if (ch == '1' || ch == 'credit') {
                  readline.question(`enter the amount you want to deposite\n`, bal => {
                   
                  
                 userData.balance=parseInt(bal) + parseInt(userData.balance)
                    fs.writeFileSync('user.json',JSON.stringify(userData))
                   
                    const data=fs.readFileSync('user.json','utf-8')
                    
                        const user= JSON.parse(data)
                        console.log(`transaction successfull your balance is ${user.balance}`)
                  })
                } else if (ch == '2' || ch == 'debit') {
                  readline.question(`enter the amount you want to withdraw\n`, bal => {
                    userData.balance=parseInt(userData.balance)-parseInt(bal)
                    fs.writeFileSync('user.json',JSON.stringify(userData))
                   
                    const data=fs.readFileSync('user.json','utf-8')
                    
                        const user= JSON.parse(data)
                        console.log(`transaction successfull your balance is ${user.balance}`)
                  })
                }
              }) 
     })
    })
   

}
  
  
  accountCreation()