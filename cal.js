(function(){
  
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    //retrieve data from numbers that are clicked
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });
    
    equal.addEventListener('click', function(e){
      if(screen.value === ''){
        screen.value = 'Please Enter a Value';
      } else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })
    
    document.getElementById("calc2-submit")
    .addEventListener("click", function (e) {
    e.preventDefault();
    const numX = document.getElementById("calc2-num-x").value;
    const numY = document.getElementById("calc2-num-y").value;
    const percentage = (numX / 100) * numY;
    document.getElementById("calc2-solution").value = percentage;
    });
    
    clear.addEventListener('click', function(e){
      screen.value = '';
    })
   
  })(); 