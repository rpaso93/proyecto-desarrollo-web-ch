const callback = function (entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle('animate__fadeInRight');
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll('.article');
targets.forEach(function (target) {
  observer.observe(target);
});

const backwardsBtn = document.getElementById('backwards_btn');
const forwardsBtn = document.getElementById('forwards_btn');
const [productsList] = document.getElementsByClassName('products-list');

const scrollListTo = displacement => {
  productsList.scrollBy({ behavior: 'smooth', left: displacement });
};

ClickAndHold.apply(backwardsBtn, scrollListTo.bind(null, -20));
ClickAndHold.apply(forwardsBtn, scrollListTo.bind(null, 20));
