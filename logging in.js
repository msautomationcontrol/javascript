// triggerChange forces the text to update on the page.
const triggerChange = new Event('input', {bubbles: true});
const loginField = document.querySelectorAll('#username')[0];
const passwordField = document.querySelectorAll('#password')[0];

loginField.value = 'mhr_automate';
loginField.dispatchEvent(triggerChange);

passwordField.value = 'fake_password';
passwordField.dispatchEvent(triggerChange);

// One way of clicking the login button. Find a better way to click with the Id in the future possibly.
document.forms[0][2].click();

