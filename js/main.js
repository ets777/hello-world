const app = document.getElementById('app');
app.width = 600;
app.height = 300;
const context = app.getContext('2d');
context.textAlign = 'center';
context.font = '48px arial';
context.fillText('Hello World!', app.width / 2, app.height / 2);