import logo from './logo.svg';
import './App.css';

function App() {
  const data1 = ["Android", "Blackberry", "iphone", "windows phone"];
  const data2 = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        {data1.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>

      <h1>Mobile Manufacturer</h1>
      <ul>
        {data2.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
