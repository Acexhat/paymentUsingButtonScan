import './App.css';
import React from 'react';
import PaymentMob from './paymentMob';
import PaymentDesktop from './paymentDesktop';

function App() {

  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
  }, [])

  return (
    <div className="App">
      {isMobile ? <PaymentMob /> : <PaymentDesktop />}
    </div>
  );
}

// upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Aditi Singh K&amp;cu=INR

export default App;
