// Ambil elemen-elemen yang dibutuhkan
const subscribeCheckbox = document.querySelector("#subscribe");
const jsRadio = document.querySelector("#js");
const tsRadio = document.querySelector("#ts");
const reactjsRadio = document.querySelector("#reactjs");
const subIndicator = document.querySelector("#subIndicator");
const learnIndicator = document.querySelector("#learnIndicator");
const startCourseButton = document.querySelector("#btn");

// Menampilkan status checkbox saat halaman dimuat
subIndicator.textContent = `Berlangganan: ${subscribeCheckbox.checked}`;

// Event klik tombol
startCourseButton.addEventListener("click", function () {
  let selectedCourse = "";
  if (jsRadio.checked) {
    selectedCourse = "JavaScript";
  } else if (tsRadio.checked) {
    selectedCourse = "TypeScript";
  } else if (reactjsRadio.checked) {
    selectedCourse = "ReactJS";
  }

  // Cek apakah sudah subscribe
  if (!subscribeCheckbox.checked) {
    subIndicator.textContent = "Anda harus subscribe terlebih dahulu!";
    learnIndicator.textContent = "";
    return;
  }

  // Cek apakah sudah pilih course
  if (!selectedCourse) {
    learnIndicator.textContent = "Anda harus memilih course terlebih dahulu!";
    return;
  }

  subIndicator.textContent = `Berlangganan: ${subscribeCheckbox.checked}`;
  learnIndicator.textContent = `Anda akan belajar: ${selectedCourse}`;
});

// Memantau perubahan pada checkbox
subscribeCheckbox.addEventListener("change", function () {
  subIndicator.textContent = `Berlangganan: ${subscribeCheckbox.checked}`;
});
