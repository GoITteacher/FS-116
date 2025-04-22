let colorPalette = [];
const LENGTH = 9;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
//!======================================================

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

//!======================================================

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  renderColors();
});

//!======================================================

function colorTemplate(color) {
  return `<li class="color-item" data-color="${color.hex}">
          <button class="color-body" style="background-color: ${color.hex};"></button>
          <div class="color-footer">
            <div>HEX: ${color.hex}</div>
            <div>RGB: ${color.rgb}</div>
            <div></div>
          </div>
        </li>`;
}

function colorsTemplate(colors) {
  return colors.map(colorTemplate).join('\n');
}

function renderColors() {
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
}

renderColors();

//!======================================================

// function showModal() {
//   document.body.classList.add('show-modal');
// }

// function hideModal() {
//   document.body.classList.remove('show-modal');
// }

//!======================================================

// refs.itemList.addEventListener('click', e => {
//   const colorElem = e.target.closest('.color-item');
//   if (!colorElem) return;

//   const color = colorElem.dataset.color;
//   openModal(color);
// });

// refs.backdropElem.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     hideModal();
//   }
// });

//!======================================================

function openModal(color) {
  const instance = basicLightbox.create(`
    <div class="modal" style="background-color: ${color};">
    <h1>${color}</h1>
  </div>`);

  instance.show();
}
