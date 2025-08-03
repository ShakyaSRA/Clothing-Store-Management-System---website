//In product details the More info tabs
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.detail_tab');
  const contents = document.querySelectorAll('.details_tab_content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active_tab'));
      contents.forEach(c => c.classList.remove('active_tab'));

      // Add active to clicked
      tab.classList.add('active_tab');
      const target = document.querySelector(tab.dataset.target);
      if (target) target.classList.add('active_tab');
    });
  });
});

//Login form and registration form switching
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login_link');
  const registerLink = document.querySelector('.register_link');

  if (registerLink) {
    registerLink.addEventListener('click', () => {
      wrapper.classList.add('active');
    });
  }

  if (loginLink) {
    loginLink.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
  }

});

//login form and registration form regex validation
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".form_box.register form");
  const loginForm = document.querySelector(".form_box.login form");

  // REGEX patterns
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; //from 3-16 characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //like shakya@gmail.com
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; //at least 6 characters, includes both letters and numbers.

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      const username = registerForm.querySelector("input[type='text']").value.trim();
      const email = registerForm.querySelector("input[type='email']").value.trim();
      const password = registerForm.querySelector("input[type='password']").value.trim();

      if (!usernameRegex.test(username)) {
        alert("Username must be 3-16 characters and only contain letters, numbers, or underscores.");
        e.preventDefault();
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }

      if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters long and contain at least one letter and one number.");
        e.preventDefault();
        return;
      }

      alert("Registration successful!");
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      const email = loginForm.querySelector("input[type='email']").value.trim();
      const password = loginForm.querySelector("input[type='password']").value.trim();

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        e.preventDefault();
        return;
      }

      alert("Login successful!");
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.pathname.includes("sale.html")) return;
  // Target date - change this as needed
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);
  targetDate.setHours(0, 0, 0, 0);

  // Get countdown elements
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    //if the target date gets pased
    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  updateCountdown(); // run
  setInterval(updateCountdown, 1000); // update every second
});


//about us pg
function toggleContent(box) {
  const p = box.querySelector("p");
  p.classList.toggle("hidden");
}


//products boxes

//  function to format prices
function formatPrice(value) {
  return `Rs.${value.toFixed(2)}`;
}

function renderProducts(productList, containerId = "productContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  productList.forEach(product => {
    const hasDiscount = product.discount && product.originalPrice;

    const imageHtml = product.link
      ? `<a href="${product.link}"><img src="${product.image}" alt="${product.name}"></a>`
      : `<img src="${product.image}" alt="${product.name}">`;


    container.innerHTML += `
    <div class="box">
        ${hasDiscount ? `<span class="discount">-${product.discount}%</span>` : ""}
        <div class="image">
            ${imageHtml}
            <div class="icons">
                <a href="#" class="fas fa-heart" aria-label="Add to wishlist"></a>
                <a href="#" class="cart-btn">add to cart</a>
                <a href="#" class="fas fa-share" aria-label="Share"></a>
            </div>
        </div>
        <div class="content">
            <h3>${product.name}</h3>
            <div class="price">
                ${formatPrice(product.price)}
                ${hasDiscount ? `<span>${formatPrice(product.originalPrice)}</span>` : ""}
            </div>
        </div>
    </div>
  `;
  });
}

// INDEX PAGE
if (window.location.pathname.includes("index.html")) {
  window.onload = () => {
    const featured = window.products.slice(0, 12);
    renderProducts(featured);


  };
}

// NEW ARRIVALS PAGE
if (window.location.pathname.includes("newArivals.html")) {
  window.onload = () => {
    const arrivals = window.products.filter(p => p.newArrival === true);
    renderProducts(arrivals, "newArrivalsContainer");
  };
}

//FILTER FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  const filterIcon = document.getElementById("filterIcon");
  const dropdown = document.getElementById("typeFilter");

  if (filterIcon && dropdown) {
    filterIcon.addEventListener("click", () => {
      dropdown.classList.toggle("show");
    });

    dropdown.addEventListener("change", () => {
      const type = dropdown.value;
      localStorage.setItem("selectedType", type);
      window.location.href = "filtered.html";
    });
  }

  if (window.location.pathname.includes("filtered.html")) {
    const type = localStorage.getItem("selectedType");
    const products = window.products || [];

    if (!products.length) {
      console.error("No products found.");
      return;
    }

    const filtered = type === "all" || !type
      ? products
      : products.filter(p => p.type === type);

    renderProducts(filtered, "filteredProductsContainer");
  }
});



//Accounts page tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("accountTabs");
  const contentContainer = document.getElementById("tabsContent");

  fetch("accounts.json")
    .then(res => res.json())
    .then(data => {
      data.forEach((tab, index) => {
        const isActive = index === 0 ? "active-tab" : "";

        // Tab button
        const tabButton = document.createElement("p");
        tabButton.className = `account_tab ${isActive}`;
        tabButton.dataset.target = `#${tab.id}`;
        tabButton.innerHTML = `<i class="${tab.icon}"></i>${tab.label}`;
        tabsContainer.appendChild(tabButton);

        // Tab content
        const tabContent = document.createElement("div");
        tabContent.className = `tab_content ${isActive}`;
        tabContent.id = tab.id;
        tabContent.innerHTML = tab.content;
        contentContainer.appendChild(tabContent);
      });

      // Tab switching
      document.querySelectorAll(".account_tab").forEach(tab => {
        tab.addEventListener("click", () => {
          const target = tab.dataset.target;

          document.querySelectorAll(".account_tab").forEach(t => t.classList.remove("active-tab"));
          document.querySelectorAll(".tab_content").forEach(c => c.classList.remove("active-tab"));

          tab.classList.add("active-tab");
          const content = document.querySelector(target);
          if (content) content.classList.add("active-tab");
        });
      });
    })
    .catch(err => console.error("Failed to load account data:", err));
});



//payment form validation
document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input elements
  const cardNumberInput = document.querySelector("input[placeholder='1234 1234 1234 1234']");
  const expiryInput = document.querySelector("input[placeholder='MM / YY']");
  const cvcInput = document.querySelector("input[placeholder='CVC']");
  const zipInput = document.querySelector("input[placeholder='90210']");

  // Get span elements for error messages
  const cardError = document.getElementById("card-error");
  const expiryError = document.getElementById("expiry-error");
  const cvcError = document.getElementById("cvc-error");
  const zipError = document.getElementById("zip-error");

  // Clear all previous errors
  cardError.textContent = "";
  expiryError.textContent = "";
  cvcError.textContent = "";
  zipError.textContent = "";

  // Get values
  const cardNumber = cardNumberInput.value.trim();
  const expiry = expiryInput.value.trim();
  const cvc = cvcInput.value.trim();
  const zip = zipInput.value.trim();

  // Regular Expressions
  const cardRegex = /^(\d{4}[- ]?){3}\d{4}$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\s*\/\s*[0-9]{2}$/;
  const cvcRegex = /^\d{3,4}$/;
  const zipRegex = /^\d{4,6}$/;

  let valid = true;

  if (!cardRegex.test(cardNumber)) {
    cardError.textContent = "Invalid card number (e.g., 1234 5678 9012 3456)";
    valid = false;
  }

  if (!expiryRegex.test(expiry)) {
    expiryError.textContent = "Invalid expiry (use MM / YY)";
    valid = false;
  }

  if (!cvcRegex.test(cvc)) {
    cvcError.textContent = "CVC must be 3 or 4 digits";
    valid = false;
  }

  if (!zipRegex.test(zip)) {
    zipError.textContent = "ZIP code must be 4 to 6 digits";
    valid = false;
  }

  if (valid) {
    alert("Payment submitted successfully!");
  }
});


//checkoout validation
document.getElementById("checkout_container").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value.trim();
  const postcode = document.getElementById("postcode").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  // Error spans
  const errors = {
    name: document.getElementById("name-error"),
    address: document.getElementById("address-error"),
    city: document.getElementById("city-error"),
    country: document.getElementById("country-error"),
    postcode: document.getElementById("postcode-error"),
    phone: document.getElementById("phone-error"),
    email: document.getElementById("email-error"),
  };

  // Clear all errors
  Object.values(errors).forEach(span => span.textContent = "");

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const postcodeRegex = /^[A-Za-z0-9]{4,10}$/;
  const phoneRegex = /^\d{10}$/; // <-- Only 10 digits
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!nameRegex.test(name)) {
    errors.name.textContent = "Please enter a valid name (letters only, min 2 characters).";
    valid = false;
  }

  if (address.length < 5) {
    errors.address.textContent = "Address must be at least 5 characters.";
    valid = false;
  }

  if (city.length < 2) {
    errors.city.textContent = "Please enter a valid city.";
    valid = false;
  }

  if (country.length < 2) {
    errors.country.textContent = "Please enter a valid country.";
    valid = false;
  }

  if (!postcodeRegex.test(postcode)) {
    errors.postcode.textContent = "Enter a valid postcode (4–10 characters).";
    valid = false;
  }

  if (!phoneRegex.test(phone)) {
    errors.phone.textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    errors.email.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (valid) {
    alert("Billing form submitted successfully!");
    window.location.href = "payment.html";
  }
});

//newsletter validation
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('newsletter_submit').addEventListener('click', function () {
    const email = emailInput.value.trim();

if (!email || !email.includes("@") || !email.includes(".")) {
  errorSpan.textContent = "Please enter a valid email address.";
  emailInput.focus();
  return;
}

  });
});
