console.log("hello")

const bookingsection = document.getElementById('bookingsection')
const data = JSON.parse(localStorage.getItem("bookings") || "[]")
bookingsection.innerHTML = ``

function dosomething(id){
    var abc = []
    var arr = JSON.parse(localStorage.getItem("bookings") || "[]")
    abc = arr
    var result = []
    for(let i=0;i<abc.length;i++){
        if(abc[i]["id"] != id){
            result.push(abc[i])
        }
    }
    localStorage.setItem("bookings",JSON.stringify(result))
    alert("booking cancelled")

}



data.map((d)=>{
    let str = `<div styles="display:flex width=100%">
        <p>Name : ${d.Name}</p>
        <p>Email : ${d.Email}</p>
        <p>Checkin : ${d.checkin}</p>
        <p>CheckOut : ${d.checkout}</p>
        <p>Adults : ${d.adult}</p>
        <p>Children : ${d.children}</p>
        <p>rooms : ${d.rooms}</p>
        <input type="button" value="Click" onclick="dosomething(${d.id})">
        <br>
    </div>`
    bookingsection.innerHTML += str
})

