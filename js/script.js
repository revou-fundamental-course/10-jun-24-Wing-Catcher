// Fungsi untuk mengonversi suhu dari Celsius ke Fahrenheit
function convertCelsiusToFahrenheit() {
    // Ambil nilai dari input dengan ID 'inputCelcius'
    var celsius = parseFloat(document.getElementById('inputCelcius').value);
    
    // Lakukan konversi Celsius ke Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
    
    // Tampilkan hasil konversi di input dengan ID 'outputFahrenheit'
    document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2); // Menampilkan hingga 2 angka di belakang koma
    
    // Update nilai formula
    document.getElementById('formula').value = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celsius
function convertFahrenheitToCelsius() {
    // Ambil nilai dari input dengan ID 'outputFahrenheit'
    var fahrenheit = parseFloat(document.getElementById('outputFahrenheit').value);
    
    // Lakukan konversi Fahrenheit ke Celsius
    var celsius = (fahrenheit - 32) * 5/9;
    
    // Tampilkan hasil konversi di input dengan ID 'inputCelcius'
    document.getElementById('inputCelcius').value = celsius.toFixed(2); // Menampilkan hingga 2 angka di belakang koma
    
    // Update nilai formula
    document.getElementById('formula').value = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
}

// Fungsi untuk mereset nilai semua textbox
function resetValues() {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('outputFahrenheit').value = '';
    document.getElementById('formula').value = '';
}

function copyToClipboard() {
    // Ambil nilai dari formula
    var copyText = document.getElementById("formula");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    // Salin teks di dalam bidang teks ke clipboard
    document.execCommand("copy");
  
    // Membuat pesan alert setelah copy berhasil
    alert("Copied the text: " + copyText.value);
}

// Tambahkan event listener ke tombol konversi Celsius ke Fahrenheit
document.getElementById('convertButton').addEventListener('click', convertCelsiusToFahrenheit);

// Tambahkan event listener ke tombol konversi Fahrenheit ke Celsius
document.getElementById('convertReverse').addEventListener('click', convertFahrenheitToCelsius);

// Tambahkan event listener ke tombol reset
document.getElementById('resetButton').addEventListener('click', resetValues);

// Tambahkan event listener ke tombol Copy to Clipboard
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

//Dibuat oleh Raffy Ahmad Jaliyyan//
//Saya sangat menghargai Anda jika Anda tidak Copy-Paste project saya tanpa izin//