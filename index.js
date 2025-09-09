let data = JSON.parse(localStorage.getItem("biodata")) || [];

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

// Cek apakah intro sudah pernah dimainkan
window.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem("introPlayed")) {
    // Mainkan intro
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = '-100vh';
        sessionStorage.setItem("introPlayed", "true"); // tandai sudah pernah
      }, 2000);
    });
  } else {
    // Kalau udah pernah, langsung ilangin intro
    intro.style.display = "none";
  }
});

function renderTable() {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";

  data.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.asal}</td>
      <td>${item.nama}</td>
      <td>${item.umur}</td>
      <td>
        <button class="edit" onclick="editData(${index})">EDIT</button>
        <button class="delete" onclick="hapusData(${index})">DELETE</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function hapusData(index) {
  data.splice(index, 1);
  localStorage.setItem("biodata", JSON.stringify(data));
  renderTable();
}

function editData(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "tambah.html";
}

renderTable();
