import App from '../node_modules/etsbox-canvas-lib/src/App.js';
import Text from '../node_modules/etsbox-canvas-lib/src/Text.js';

const config = {
    width: 600,
    height: 300
}
const app = new App(config);
const { context } = app;

const textParams = {
    context,
    fontFamily: 'fifaks',
    fontSize: 48,
    fontUrl: 'font/fifaks.woff2',
    textAlign: 'center',
    textColor: 'black',
    text: 'Hello World!',
    x: app.width / 2,
    y: app.height / 2
};

const text = new Text(textParams);

const appCycle = () => {
    app.clearBoard();
    text.draw();
}

app.start(appCycle);