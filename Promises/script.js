//Exercise 1
function display1() {
  function display(some) {
    document.getElementById("dis1").innerHTML = some;
  }

  let Promise1 = new Promise((Resolve, Reject) => {
    let value = 3;
    if (value == 3) {
      Resolve("promise resolved for value 3");
    } else {
      Reject("Error");
    }
  });

  Promise1.then((value) => display(value));
  Promise1.catch((error) => display(error));
}
document.getElementById("exer1").addEventListener("click", () => {
  display1();
});

//Exercise 2
function display2() {
  function Display(some) {
    document.getElementById("dis2").innerHTML = some;
  }

  let Promise1 = new Promise((Resolve, Reject) => {
    let value = 1;
    if (value == 3) {
      Resolve("promise resolved for value 3");
    } else {
      Reject("Promise rejected Boo!");
    }
  });

  Promise1.then((value) => Display(value));
  Promise1.catch((error) => Display(error));
}
document.getElementById("exer2").addEventListener("click", () => {
  display2();
});

//Exercise 3

function display3() {
  function Display(some) {
    document.getElementById("dis3").innerHTML = some;
  }

  let Promise1 = new Promise((Resolve, Reject) => {
   
    let itShouldResolve = true;

    if (itShouldResolve)
    {
      Resolve("itShouldResolve is truthy");
    } else if(value == falsy)  {
      Reject("itShouldResolve is falsy");
    }
  

  });

  Promise1.then((value) => Display(value));
  Promise1.catch((error) => Display(error));
}
document.getElementById("exer3").addEventListener("click", () => {
  display3();
});
//Exercise 4

function display() {
  function promise(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (value % 2 == 0) {
        resolve("Even Number");
      } else {
        reject("Not an event number");
      }
    }, 5000);
    });
  }


    let number = 12;

    promise(number)
      .then((data) => {
        document.getElementById("dis4").innerText = data;
      })
      .catch((err) => {
        document.getElementById("dis4").innerText = `Promise rejected${err}`;
      });
 
}
document.getElementById("exer4").addEventListener("click", () => {
  display();
});
