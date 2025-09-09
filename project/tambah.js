let data = JSON.parse(localStorage.getItem("biodata")) || [];
let editIndex = localStorage.getItem("editIndex");

if (editIndex !== null) {
  const item = data[editIndex];
  document.getElementById("asal").value = item.asal;
  document.getElementById("nama").value = item.nama;
  document.getElementById("umur").value = item.umur;
}

function simpanData() {
  const asal = document.getElementById("asal").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const umur = document.getElementById("umur").value.trim();

  if (!asal || !nama || !umur || umur <= 0) {
    alert("Isi semua field dengan benar!");
    return;
  }

  if (editIndex !== null) {
    data[editIndex] = { asal, nama, umur };
    localStorage.removeItem("editIndex");
  } else {
    data.push({ asal, nama, umur });
  }

  localStorage.setItem("biodata", JSON.stringify(data));
  window.location.href = "index.html";
}
