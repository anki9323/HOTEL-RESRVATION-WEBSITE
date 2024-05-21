const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

// My code Local STORAGE
const Name = document.getElementById('Your Name')
const Email = document.getElementById('Your Email')
const Contact = document.getElementById('Your Contact')
const checkin = document.getElementById('chekin-date')
const checkout = document.getElementById('chekout-date')
const adult = document.getElementById('adult')
const children = document.getElementById('children')
const rooms = document.getElementById('rooms')
const form = document.getElementById('form')

const submit = document.getElementById('submit')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const obj = {
        Name : Name.value,
        Email : Email.value,
        checkin : checkin.value,
        checkout : checkout.value,
        adult : adult.value,
        children : adult.value,
        rooms : rooms.value
    }
    if(!checkin.value || !checkin.value){
        alert("Please fill dates")
        return
    }
    var abc = []
    var arr = JSON.parse(localStorage.getItem("bookings") || "[]")
    abc = arr
    obj["id"] = Math.random()
    abc.push(obj)
    localStorage.setItem("bookings",JSON.stringify(abc))
    alert("data saved")
})


// Refresh every time you enter a new booking