const app = document.getElementById('app');
app.width = 600;
app.height = 300;
const context = app.getContext('2d');

const font = new FontFace('fifaks', 'url(font/fifaks.woff2)');
context.textAlign = 'center';

font.load().then(function () {
    context.font = '48px fifaks';
    context.fillText('Hello World!', app.width / 2, app.height / 2);
});
