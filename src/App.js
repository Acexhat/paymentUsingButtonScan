import logo from './logo.svg';
import './App.css';

function App() {

  const handlePayRoute = (UPI_APP_NAME) => {
    let paymentURL = '';
    switch (UPI_APP_NAME) {
      case 'GOOGLE': paymentURL = 'tez://upi/'; break;
      case 'PHONE_PAY': paymentURL = 'tez://upi/'; break;
      case 'PAYTM': paymentURL = 'tez://upi/'; break;
    }
    window.location.href = paymentURL;
  }

  return (
    <div className="App">
      <button onClick={() => handlePayRoute('GOOGLE')}>
        Google Pay
      </button>
      <button onClick={() => handlePayRoute('PHONE_PAY')}>
        Phone Pay
      </button>
      <button onClick={() => handlePayRoute('PAYTM')}>
        Paytm
      </button>

    </div>
  );
}

// upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Aditi Singh K&amp;cu=INR

export default App;
