function appendNumber(num) {
    document.getElementById('input').value += num;
}
 
function appendOperator(operator) {
    document.getElementById('input').value += operator;
}
 
function calculate() {
    let input = document.getElementById('input').value;
    let url = '/calculate?input=' + encodeURIComponent(input);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ans').value = data.result;
        })
        .catch(error => console.error(error));
}
 
function calculatePercentage() {
    let input = document.getElementById('input').value;
    let url = '/calculatePercentage?input=' + encodeURIComponent(input);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ans').value = data.result;
        })
        .catch(error => console.error(error));
}
 
function calculateSin() {
    let input = document.getElementById('input').value;
    let url = '/calculateSin?input=' + encodeURIComponent(input);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ans').value = data.result;
        })
        .catch(error => console.error(error));
}
 
function calculateCos() {
    let input = document.getElementById('input').value;
    let url = '/calculateCos?input=' + encodeURIComponent(input);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ans').value = data.result;
        })
        .catch(error => console.error(error));
}
 
function calculateLog() {
    let input = document.getElementById('input').value;
    let url = '/calculateLog?input=' + encodeURIComponent(input);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ans').value = data.result;
        })
        .catch(error => console.error(error));
}
 
function showHistory() {
    fetch('/history')
        .then(response => response.json())
        .then(data => {
            alert(data.history);
        })
        .catch(error => console.error(error));
}
 
function clearInput() {
    document.getElementById('input').value = '';
    document.getElementById('ans').value = '';
}
 
function deleteLastCharacter() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.slice(0, -1);
}
