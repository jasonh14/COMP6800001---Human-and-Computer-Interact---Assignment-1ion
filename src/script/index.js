const btn = document.getElementById("navbar-btn");
const navMenu = document.querySelector(".navbar-mobile");
const closeBtn = document.querySelector("#close-btn");

btn.addEventListener("click", () => {
  navMenu.classList.remove("d-none");
  closeBtn.classList.remove("d-none");
  btn.classList.add("d-none");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.add("d-none");
  closeBtn.classList.add("d-none");
  btn.classList.remove("d-none");
});

const chairBtn = document.getElementById("chair");
const cabinetBtn = document.getElementById("cabinet");
const lampBtn = document.getElementById("lamp");

const root = document.getElementById("root");

cabinetBtn.addEventListener("click", () => {
  if (chairBtn.classList.contains("active")) {
    chairBtn.classList.remove("active");
  }

  if (lampBtn.classList.contains("active")) {
    lampBtn.classList.remove("active");
  }

  cabinetBtn.classList.add("active");

  root.innerHTML = `
  <div class="card-product">
  <div class="card-img">
    <img src="../../images/cabinet.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>YMYHOUSE Storage Cabinet</p>
    <p>Cherry Wood Cabinets</p>
  </div>
  <div class="card-price">
    <p>Rp 400.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/cabinet-2.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Furnulem Industrial Storage Cabinet</p>
    <p>Oak Wood Cabinets</p>
  </div>
  <div class="card-price">
    <p>Rp 500.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/cabinet-3.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Sauder 419496 Miscellaneous Storage</p>
    <p>Birch Wood Cabinets</p>
  </div>
  <div class="card-price">
    <p>Rp 300.000</p>
    <button>Buy Now</button>
  </div>
</div>
`;
});

chairBtn.addEventListener("click", () => {
  if (cabinetBtn.classList.contains("active")) {
    cabinetBtn.classList.remove("active");
  }

  if (lampBtn.classList.contains("active")) {
    lampBtn.classList.remove("active");
  }

  chairBtn.classList.add("active");

  root.innerHTML = `
  <div class="card-product">
  <div class="card-img">
    <img src="../../images/chair.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>
     Elon Series White Plastic Chair
    </p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 400.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/chair-blck.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Armen Living Summer Chair</p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 500.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/chair-pink.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>HomePop Swoop Arm Chairs</p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 300.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/chair-brown.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Velvet Tufted Wingback Chair</p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 800.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/chair-dark.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Modern Mid-Century Side Chair</p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 670.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/chair-grey.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Chaise Lounge Cover Velvet</p>
    <p>Fabric</p>
  </div>
  <div class="card-price">
    <p>Rp 900.000</p>
    <button>Buy Now</button>
  </div>
  `;
});

lampBtn.addEventListener("click", () => {
  if (cabinetBtn.classList.contains("active")) {
    cabinetBtn.classList.remove("active");
  }

  if (chairBtn.classList.contains("active")) {
    chairBtn.classList.remove("active");
  }

  lampBtn.classList.add("active");

  root.innerHTML = `
  <div class="card-product">
  <div class="card-img">
    <img src="../../images/lamp.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>Kenroy Home Rustic Woven Pendant</p>
    <p>Ceramic</p>
  </div>
  <div class="card-price">
    <p>Rp 400.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/lamp-2.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>LIANSHUN 70.87" Billiard Light</p>
    <p>Ceramic</p>
  </div>
  <div class="card-price">
    <p>Rp 500.000</p>
    <button>Buy Now</button>
  </div>
</div>

<div class="card-product">
  <div class="card-img">
    <img src="../../images/lamp-3.jpg" alt="" />
  </div>
  <div class="card-desc">
    <p>DEWENWILS Plug in Pendant Light</p>
    <p>Ceramic</p>
  </div>
  <div class="card-price">
    <p>Rp 300.000</p>
    <button>Buy Now</button>
  </div>
</div>
`;
});
