// // Product Filter JS


let all_btn = document.getElementById("all-btn");
let pot_btn = document.getElementById("pot-btn");
let led_btn = document.getElementById("led-btn");
let room_btn = document.getElementById("room-btn");

let pot_cards = document.getElementsByClassName("pot");
let led_cards = document.getElementsByClassName("led");
let room_cards = document.getElementsByClassName("room");

all_btn.onclick = function () {
  for (let pot_card of pot_cards) {
    pot_card.style.display = "block";
  }
  for (let led_card of led_cards) {
    led_card.style.display = "block";
  }
  for (let room_card of room_cards) {
    room_card.style.display = "block";
  }

  this.classList.add("active");
  pot_btn.classList.remove("active");
  led_btn.classList.remove("active");
  room_btn.classList.remove("active");
};

pot_btn.onclick = function () {
  for (let pot_card of pot_cards) {
    pot_card.style.display = "block";
    // pot_card.setAttribute("data-aos", "fade-up");
  }
  for (let led_card of led_cards) {
    led_card.style.display = "none";
  }
  for (let room_card of room_cards) {
    room_card.style.display = "none";
  }

  this.classList.add("active");
  all_btn.classList.remove("active");
  led_btn.classList.remove("active");
  room_btn.classList.remove("active");
};

led_btn.onclick = function () {
  for (let pot_card of pot_cards) {
    pot_card.style.display = "none";
  }
  for (let led_card of led_cards) {
    led_card.style.display = "block";
  }
  for (let room_card of room_cards) {
    room_card.style.display = "none";
  }

  this.classList.add("active");
  all_btn.classList.remove("active");
  pot_btn.classList.remove("active");
  room_btn.classList.remove("active");
};

room_btn.onclick = function () {
  for (let pot_card of pot_cards) {
    pot_card.style.display = "none";
  }
  for (let led_card of led_cards) {
    led_card.style.display = "none";
  }
  for (let room_card of room_cards) {
    room_card.style.display = "block";
  }

  this.classList.add("active");
  all_btn.classList.remove("active");
  led_btn.classList.remove("active");
  pot_btn.classList.remove("active");
};


// Up arrow

let upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll',() => {
  if(window.pageYOffset > 100) {
    upArrow.classList.add('active');
  }else {
    upArrow.classList.remove('active');
  }
});
