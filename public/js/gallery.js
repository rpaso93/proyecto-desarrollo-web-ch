const gallery = document.querySelector('.galeria');

let modalWrap = null;
let ctr = 0;

const showModal = item => {
  const img = item.firstElementChild;

  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body">
            <img class="img-fluid" src="${img.src}" />
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.prepend(modalWrap);

  let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
};

for (let item of gallery.children) {
  item.style.animationDelay = `${ctr}ms`;
  ctr += 250;
  item.addEventListener('click', showModal.bind(null, item));
}
