import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
