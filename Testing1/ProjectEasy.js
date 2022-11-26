//Customer name = send value to local onchange
// your order = send value to local onchange
// Ask for cheef = read data from local to table
// remove table content = delete the table (hide it)
// delete local storage = clear data from storage

// localStorage.clear()




let eve = document.getElementById('AskFood').addEventListener('click',submitt)

 document.getElementById('custName').value
 document.getElementById('selcetFood').value

let arrr;

if (localStorage.pro != null) {
    arrr = JSON.parse(localStorage.pro)
}else {
    arrr = []
}


function submitt(e) {
        e.preventDefault()
        
let price

    if (selcetFood.value == 'Burger') {
         price = 4
    }
    
    if (selcetFood.value == 'HotDogs') {
         price = 3
    }
    
    if (selcetFood.value == 'Pizza') {
         price = 7
    }

    let obj = {
        name:custName.value,
        food:selcetFood.value,
        price:price
    }
    
   arrr.push(obj)
   localStorage.setItem('pro',JSON.stringify(arrr))

   let y = JSON.parse(localStorage.getItem('pro'))
   document.getElementById('p1').innerHTML = y
}









