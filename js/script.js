// Fungsi untuk konversi Celcius ke Fahrenheit
function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById('inputCelcius').value;
    if (isNaN(celsius) || celsius.trim() === '') {
        document.getElementById('outputFahrenheit').value = "Error";
        document.getElementById('formula').value = "Error";
        document.getElementById('copyButton').style.display = 'none';
        alert('Input harus berupa angka');
        return;
    }
    celsius = parseFloat(celsius);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('formula').value = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('copyButton').style.display = 'inline-block';
}

// Fungsi untuk konversi Fahrenheit ke Celcius
function convertFahrenheitToCelsius() {
    var fahrenheit = document.getElementById('outputFahrenheit').value;
    if (isNaN(fahrenheit) || fahrenheit.trim() === '') {
        document.getElementById('inputCelcius').value = "Error";
        document.getElementById('formula').value = "Error";
        document.getElementById('copyButton').style.display = 'none';
        alert('Input harus berupa angka');
        return;
    }
    fahrenheit = parseFloat(fahrenheit);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('inputCelcius').value = celsius.toFixed(2);
    document.getElementById('formula').value = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
    document.getElementById('copyButton').style.display = 'inline-block';
}

// Fungsi untuk menyalin nilai di Formula
function copyToClipboard() {
    var copyText = document.getElementById("formula");
    if (copyText.value.trim() === '' || copyText.value === 'Error') {
        alert("Tidak ada teks yang valid untuk disalin");
        return;
    }
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

// Fungsi untuk mereset nilai semua textbox
function resetValues() {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('outputFahrenheit').value = '';
    document.getElementById('formula').value = '';
}
function copyToClipboard() {
    var copyText = document.getElementById("formula");
    if (copyText.value.trim() === '') {
        alert("Tidak ada teks untuk disalin");
        return;
    }
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
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
//SAYA SANGAT MENGHARGAI ANDA JIKA ANDA TIDAK COPY-PASTE PROJECT SAYA TANPA IZIN//