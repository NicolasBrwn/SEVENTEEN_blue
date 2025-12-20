/* =========================
   BEFORE / AFTER SLIDER
========================= */
let isBefore = true;

function changeSlide() {
  const img = document.getElementById("sliderImage");
  if (!img) return;

  img.src = isBefore ? "assets/after.jpg" : "assets/before.jpg";
  isBefore = !isBefore;
}

/* =========================
   CART SYSTEM (SESSION)
========================= */
function addToCart(productName) {
  let cart = sessionStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];

  cart.push(productName);
  sessionStorage.setItem("cart", JSON.stringify(cart));

  alert(productName + " added to cart");
}

function toggleCart() {
  const cartPopup = document.getElementById("cartPopup");
  if (!cartPopup) return;

  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";

  loadCart();
}

function loadCart() {
  const list = document.getElementById("cartItems");
  if (!list) return;

  list.innerHTML = "";
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "Cart is empty";
    list.appendChild(empty);
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function clearCart() {
  sessionStorage.removeItem("cart");
  loadCart();
}

/* =========================
   CONTACT FORM VALIDATION
========================= */
function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name || !email || !message) return true;

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("All fields are required.");
    return false;
  }

  if (!validateEmail(email.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* =========================
   SPA-LIKE SMOOTH LOADING
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade");
});
/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (!nav) return;
  nav.classList.toggle("show");
}