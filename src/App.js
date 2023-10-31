import logo from './logo.svg';
import './App.css';
import './global.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className='table'>{/*anglu*/}
            <table>
              <thead>
                <tr>
                  <td>Feature</td>
                </tr>
                <tr>
                  <td>Background</td>
                </tr>
                <tr>
                  <td>scenario</td>
                </tr>
                <tr>
                  <td>scenarioOutline</td>
                </tr>
                <tr>
                  <td>examples</td>
                </tr>
                <tr>
                  <td>given</td>
                </tr>
                <tr>
                  <td>when</td>
                </tr>
                <tr>
                  <td>then</td>
                </tr>
                <tr>
                  <td>and</td>
                </tr>
                <tr>
                  <td>but</td>
                </tr>
                <tr>
                  <td>rule</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className='table'>{/*lv*/}
            <table>
              <thead>
                <tr>
                  <td>Funkcionālā iezīme</td>
                </tr>
                <tr>
                  <td>Konteksts</td>
                </tr>
                <tr>
                  <td>Scenārijs</td>
                </tr>
                <tr>
                  <td>Scenārijs pēc parauga</td>
                </tr>
                <tr>
                  <td>Piemēri</td>
                </tr>
                <tr>
                  <td>Kad</td>
                </tr>
                <tr>
                  <td>Ja</td>
                </tr>
                <tr>
                  <td>Tad</td>
                </tr>
                <tr>
                  <td>Un</td>
                </tr>
                <tr>
                  <td>Bet</td>
                </tr>
                <tr>
                  <td>Rule</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
