function showPrice(productName, price) {
    alert(`${productName} harganya adalah ${price}`);
  }

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("show");
  });
  