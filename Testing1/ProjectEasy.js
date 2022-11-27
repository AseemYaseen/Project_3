//Customer name = send value to local onchange
// your order = send value to local onchange
// Ask for cheef = read data from local to table
// remove table content = delete the table (hide it)
// delete local storage = clear data from storage

// localStorage.clear()




let eve = document.getElementById('AskFood')
eve.addEventListener('click',submitt)



let arrr;

if (localStorage.pro != null) {
    arrr = JSON.parse(localStorage.pro)
}else {
    arrr = []
}


function submitt(e) {
        e.preventDefault()

        let Namee = document.getElementById('custName').value
        let foood = document.getElementById('selcetFood').value
        console.log(Namee)
        
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
   let table = `<table>`
   table += `<tr><th>Name</th><th>Food</th><th>Price</th></tr>`
   arrr.forEach(element => {
       table += `<tr><td>${element.name}</td><td>${element.food}</td><td>${element.price}</td></tr>`
   });
   table += `</table>`

//    arrr.map(function (ele){
//     console.log(ele.name,ele.price,ele.food)
//    })
   document.getElementById('p1').innerHTML = table
}










