import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [paymentDetails, setPaymentDetails] = React.useState({
    name: 'Akshat Bhaskar',
    upiId: 'bhaskar03112000@okhdfcbank',
    amount: '1',
    currency: 'INR',
  })

  const handlePayRoute = (UPI_APP_NAME) => {
    let paymentURL = '';
    switch (UPI_APP_NAME) {
      case 'GOOGLE': paymentURL = 'tez://upi/'; break;
      case 'PHONE_PAY': paymentURL = 'tez://upi/'; break;
      case 'PAYTM': paymentURL = 'tez://upi/'; break;
      default: paymentURL = 'upi/'; break;
    }
    paymentURL = paymentURL + `pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&tn=HelloWorld&am=${paymentDetails.amount}&cu=${paymentDetails.currency}`;
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
