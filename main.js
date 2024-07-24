const names = document.getElementById('name').value;
const password = document.getElementById('pass').value;
const gmail = document.getElementById('gmail').value;

if (names === " " || password === " " || gmail === " ") {
    alert('Please enter complete information!');
    return 0;
} else if (names.length < 5 || password.length < 5) {
    alert('Account and password must be at least five characters');
    return 0;
} else if (names !== password || password !== gmail) {
    alert('Account and password are incorrect');
    return 0;
} else {
    alert('Logged in successfully!');
    return 0;
}