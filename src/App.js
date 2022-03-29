import logo from './logo.svg';
import './App.css';

function App() {

  const handlePayRoute = () => {
    window.location = "upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Aditi Singh K&am=1&amp;cu=INR";
  }

  return (
    <div className="App">
      <button onClick={() => handlePayRoute()}>
        Pay Now!
      </button>
    </div>
  );
}

// upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Aditi Singh K&amp;cu=INR

export default App;
