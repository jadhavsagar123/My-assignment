const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
  
  function accountCreation() {
    let userData = {
      name: '',
      balance: 0,
      accountNumber: ''
    }
  
    readline.question(`What's your name?\n`, name => {
      userData.name = name;
  
      showAccInfo(acInfo)
      function acInfo(acno, bal, ch) {
        userData.accountNumber = acno;
        if (ch == '1' || ch == 'credit') {
          userData.balance += parseInt(bal)
  
        } else if ((ch == '2' || ch == 'debit') && userData.balance > 0) {
          userData.balance -= parseInt(bal)
        } else {
          console.log(`you cant withdraw you have 0 balance in your account\n\n`)
        }
  
  
        console.log(`${name} your accountnumber is ${acno} \n You have ₹${userData.balance} in your account\n\n`)
  
        reuse(function(ch) {
  
          if (ch == 'y') {
            showAccInfo(acInfo)
          } else if (ch == 'n') {
            console.log('thankyou for visiting')
            process.exit()
          } else {
            console.log(`you had entered invalid choice`)
            reuse(function() { })
          }
  
        })
      }
    });
  
  }
  
  function showAccInfo(ac) {
    accountNumber = Math.floor((Math.random() * 12345678) + 12345678)
    readline.question(`Enter the choice what do you want to do with your account?\n
  1.credit
  2.debit\n`, ch => {
        ch
        if (ch == '1' || ch == 'credit') {
          readline.question(`enter the amount you want to deposite\n`, balance => {
            balance
            ac(accountNumber, balance, ch)
          })
        } else if (ch == '2' || ch == 'debit') {
          readline.question(`enter the amount you want to withdraw\n`, balance => {
            balance
            ac(accountNumber, balance, ch)
          })
        }
  
      })
  }
  
  function reuse(cb) {
    readline.question(`You want to continue 'y' for yes and 'n' for no \n`, choice => {
      choice
  
      cb(choice)
    })
  }
  
  
  accountCreation()