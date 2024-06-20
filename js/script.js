// Fungsi untuk konversi Celcius ke Fahrenheit | Function for converting Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById('inputCelcius').value;
    if (isNaN(celsius) || celsius.trim() === '') {
        document.getElementById('outputFahrenheit').value = "Error";
        document.getElementById('formula').value = "Error";
        document.getElementById('copyButton').style.display = 'none';
        alert("Input invalid. (Cek kembali input Anda)");
        return;
    }
    celsius = parseFloat(celsius);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('formula').value = `${celsius} °C × 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('copyButton').style.display = 'inline-block';
}

// Fungsi untuk konversi Fahrenheit ke Celcius | Function for Fahrenheit to Celsius conversion
function convertFahrenheitToCelsius() {
    var fahrenheit = document.getElementById('outputFahrenheit').value;
    if (isNaN(fahrenheit) || fahrenheit.trim() === '') {
        document.getElementById('inputCelcius').value = "Error";
        document.getElementById('formula').value = "Error";
        document.getElementById('copyButton').style.display = 'none';
        alert("Input invalid. (Cek kembali input Anda)");
        return;
    }
    fahrenheit = parseFloat(fahrenheit);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('inputCelcius').value = celsius.toFixed(2);
    document.getElementById('formula').value = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
    document.getElementById('copyButton').style.display = 'inline-block';
}

// Fungsi untuk menyalin nilai di Formula | Function to copy values ​​in Formula
function copyToClipboard() {
    var copyText = document.getElementById("formula");
    if (copyText.value.trim() === '' || copyText.value === 'Error') {
        alert("Tidak ada teks yang valid untuk disalin");
        return;
    }
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.exeCommand("copy");
    alert("Copied the text: " + copyText.value);
}

// Fungsi untuk mereset nilai semua textbox | Function to reset the values ​​of all textboxes
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
    alert("Formula berhasil disalin: " + copyText.value);
}

// Tambahkan event listener ke tombol konversi Celsius ke Fahrenheit | Add an event listener to the convert Celsius to Fahrenheit button
document.getElementById('convertButton').addEventListener('click', convertCelsiusToFahrenheit);

// Tambahkan event listener ke tombol konversi Fahrenheit ke Celsius | Add an event listener to the convert Fahrenheit to Celsius button
document.getElementById('convertReverse').addEventListener('click', convertFahrenheitToCelsius);

// Tambahkan event listener ke tombol reset | Add an event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetValues);

// Tambahkan event listener ke tombol Copy to Clipboard | Add an event listener to the Copy to Clipboard button
document.getElementById('copyButton').addEventListener('click', copyToClipboard);