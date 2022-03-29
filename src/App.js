import logo from './logo.svg';
import './App.css';
import React from 'react';
import QRCode from "qrcode.react";

function App() {

  const [paymentDetails, setPaymentDetails] = React.useState({
    name: 'Akshat Bhaskar',
    upiId: '9262561881@ybl',
    amount: 1,
    currency: 'INR',
  })

  const [Qrvalue, setQrvalue] = React.useState('upi://pay?pa=9262561881@ybl&pn=Akshat Bhaskar&am=1&tn=442389749fhefh&cu=INR');

  const handlePayRoute = (UPI_APP_NAME) => {
    let paymentURL = '';
    switch (UPI_APP_NAME) {
      case 'GOOGLE': paymentURL = 'tez://upi/'; break;
      case 'PHONE_PAY': paymentURL = 'phonepe://'; break;
      case 'PAYTM': paymentURL = 'paytmmp://'; break;
      default: break;
    }
    let random_trxn_no = (Math.random() + 1).toString(36).substring(2);
    paymentURL = paymentURL + `pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&mc=0001&tr=${random_trxn_no}&am=${paymentDetails.amount}&cu=${paymentDetails.currency}`;
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
      {/* <QRCode value={Qrvalue} size={256} /> */}
    </div>
  );
}

// upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Aditi Singh K&amp;cu=INR

export default App;
