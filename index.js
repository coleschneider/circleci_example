import React from 'react';
import {render} from 'react-dom';
import {sum, squareItemsInArr} from './sum'
import App from './components/App'


const renderApp = Component => render(<Component />, document.getElementById("app"))

renderApp(App)


if(module.hot){
    const NewHotModule = require('./components/App')
    module.hot.accept('./components/App', () =>renderApp(NewHotModule))
}

render(<App />, document.getElementById("app"))