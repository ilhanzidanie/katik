//MENGHITUNG LUAS SEGITIGA
function hitungluasSegitiga() {
  event.preventDefault();
  let alas = document.getElementById("alassegitiga").value;
  let tinggi = document.getElementById("tinggisegitiga").value;

  let luas = 0.5 * alas * tinggi;

  document.getElementById("rumusluassegitiga").innerHTML =
    "L = 1/2 x a x t <br/>" + "L = 1/2 x " + alas + " x " + tinggi;
  document.getElementById("hasilluassegitiga").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING SEGITIGA
function hitungkelilingSegitiga() {
  event.preventDefault();
  let sisi1 = parseInt(document.getElementById("sisi1").value);
  let sisi2 = parseInt(document.getElementById("sisi2").value);
  let sisi3 = parseInt(document.getElementById("sisi3").value);

  let keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("rumuskelilingsegitiga").innerHTML =
    "K = S1 + S2 + S3 <br/>" + "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
  document.getElementById("hasilkelilingsegitiga").innerHTML =
    "K = " + keliling;
}

//MENGHITUNG LUAS JAJAR GENJANG
function hitungluasJajar() {
  event.preventDefault();
  let alas = document.getElementById("alasjajar").value;
  let tinggi = document.getElementById("tinggijajar").value;

  let luas = alas * tinggi;
  document.getElementById("rumusluasjajar").innerHTML =
    "L = a x t <br/>" + "L = " + alas + "x" + tinggi;
  document.getElementById("hasilluasjajar").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING JAJAR GENJANG
function hitungkelilingJajar() {
  event.preventDefault();
  let panjang = parseInt(document.getElementById("panjangjajar").value);
  let lebar = parseInt(document.getElementById("lebarjajar").value);

  let keliling = 2 * (panjang + lebar);
  document.getElementById("rumuskelilingjajar").innerHTML =
    "K = 2 x (a + b) <br/>" + "K = 2 x (" + panjang + " + " + lebar + ")";
  document.getElementById("hasilkelilingjajar").innerHTML = "K = " + keliling;
}

//RESET LUAS SEGITIGA
function resetluasSegitiga() {
  document.getElementById("alassegitiga").value = "";
  document.getElementById("tinggisegitiga").value = "";
  document.getElementById("rumusluassegitiga").innerHTML = "";
  document.getElementById("hasilluassegitiga").innerHTML = "";
}

//RESET KELILING SEGITIGA
function resetkelilingSegitiga() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("rumuskelilingsegitiga").innerHTML = "";
  document.getElementById("hasilkelilingsegitiga").innerHTML = "";
}

//RESET LUAS JAJAR GENJANG
function resetluasJajar() {
  document.getElementsById("alasjajar").value = "";
  document.getElementsById("tinggijajar").value = "";
  document.getElementsById("rumusluasjajar").innerHTML = "";
  document.getElementsById("hasilluasjajar").innerHTML = "";
}

//RESET KELILING JAJAR GENJANG
function resetkelilingJajar() {
  document.getElementById("panjangjajar").value = "";
  document.getElementById("lebarjajar").value = "";
  document.getElementById("rumuskelilingjajar").innerHTML = "";
  document.getElementById("hasilkelilingjajar").innerHTML = "";
}
