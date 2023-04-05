//MENGHITUNG LUAS SEGITIGA
function hitungluasSegitiga() {
  event.preventDefault();
  let alas = document.getElementById("alasSegitiga").value;
  let tinggi = document.getElementById("tinggiSegitiga").value;

  let luas = 0.5 * alas * tinggi;

  document.getElementById("rumusluasSegitiga").innerHTML =
    "L = 1/2 x a x t <br/>" + "L = 1/2 x " + alas + " x " + tinggi;
  document.getElementById("hasilluasSegitiga").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING SEGITIGA
function hitungkelilingSegitiga() {
  event.preventDefault();
  let sisi1 = parseInt(document.getElementById("sisi1").value);
  let sisi2 = parseInt(document.getElementById("sisi2").value);
  let sisi3 = parseInt(document.getElementById("sisi3").value);

  let keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("rumuskelilingSegitiga").innerHTML =
    "K = S1 + S2 + S3 <br/>" + "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
  document.getElementById("hasilkelilingSegitiga").innerHTML =
    "K = " + keliling;
}

//MENGHITUNG LUAS JAJAR GENJANG
function hitungluasJajar() {
  event.preventDefault();
  let alas = document.getElementById("alasJajar").value;
  let tinggi = document.getElementById("tinggiJajar").value;

  let luas = alas * tinggi;
  document.getElementById("rumusluasJajar").innerHTML =
    "L = a x t <br/>" + "L = " + alas + "x" + tinggi;
  document.getElementById("hasilluasJajar").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING JAJAR GENJANG
function hitungkelilingJajar() {
  event.preventDefault();
  let panjang = parseInt(document.getElementById("panjangJajar").value);
  let lebar = parseInt(document.getElementById("lebarJajar").value);

  let keliling = 2 * (panjang + lebar);
  document.getElementById("rumuskelilingJajar").innerHTML =
    "K = 2 x (a + b) <br/>" + "K = 2 x (" + panjang + " + " + lebar + ")";
  document.getElementById("hasilkelilingJajar").innerHTML = "K = " + keliling;
}

//RESET LUAS SEGITIGA
function resetluasSegitiga() {
  document.getElementById("alasSegitiga").value = "";
  document.getElementById("tinggiSegitiga").value = "";
  document.getElementById("rumusluasSegitiga").innerHTML = "";
  document.getElementById("hasilluasSegitiga").innerHTML = "";
}

//RESET KELILING SEGITIGA
function resetkelilingSegitiga() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("rumuskelilingSegitiga").innerHTML = "";
  document.getElementById("hasilkelilingSegitiga").innerHTML = "";
}

//RESET LUAS JAJAR GENJANG
function resetluasJajar() {
  document.getElementsById("alasJajar").value = "";
  document.getElementsById("tinggiJajar").value = "";
  document.getElementsById("rumusluasJajar").innerHTML = "";
  document.getElementsById("hasilluasJajar").innerHTML = "";
}

//RESET KELILING JAJAR GENJANG
function resetkelilingJajar() {
  document.getElementById("panjangJajar").value = "";
  document.getElementById("lebarJajar").value = "";
  document.getElementById("rumuskelilingJajar").innerHTML = "";
  document.getElementById("hasilkelilingJajar").innerHTML = "";
}
