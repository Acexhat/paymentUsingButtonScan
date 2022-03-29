import React from "react";
import './style.css';

export default function PaymentMob() {

    const [paymentDetails, setPaymentDetails] = React.useState({
        name: 'Akshat Bhaskar',
        upiId: '9262561881@ybl',
        amount: 1,
        currency: 'INR',
    })

    const handlePhonepe = () => {
        window.location.href = " upi://pay?pa=bhaskar03112000@okhdfcbankx&pn=AkshatBhaskar&am=1.00&mam=2.00&tid=YBLc6f12c2333b2495fbfd024b12ad43dc7&tr=T2002061921587731419308&tn=Payment%20for%20TX117785240954814000&mc=5311&mode=04&purpose=00"
    }

    const handlePayRoute = (UPI_APP_NAME) => {
        let paymentURL = '';
        let random_trxn_no = (Math.random() + 1).toString(36).substring(2);
        switch (UPI_APP_NAME) {
            case 'GOOGLE': paymentURL = `tez://upi/pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&mc=&tr=${random_trxn_no}&am=${paymentDetails.amount}&cu=${paymentDetails.currency}`; break;
            // case 'PHONE_PAY': paymentURL = `phonepe://pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&am=1&cu=INR`; break;
            case 'PAYTM': paymentURL = `paytmmp://pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&am=1&cu=INR`; break;
            case 'ANY': paymentURL = `upi://pay?pa=9262561881@ybl&pn=Akshat Bhaskar&am=1&tn=442389749fhefh&cu=INR`; break;
            // upi://pay?pa=bhaskar03112000@okhdfcbank&amp;pn=Akshat&amp;cu=INR
            default: break;
        }
        // paymentURL = paymentURL + `pay?pa=${paymentDetails.upiId}&pn=${paymentDetails.name}&mc=0001&tr=${random_trxn_no}&am=${paymentDetails.amount}&cu=${paymentDetails.currency}`;
        window.location.href = paymentURL;
    }

    return (
        <div className="mob_root">
                <button className="btn" onClick={() => handlePayRoute('GOOGLE')}>
                    Google Pay
                </button>
                <button className="btn" onClick={() => handlePhonepe()}>
                    PhonePe
                </button>
                <button className="btn" onClick={() => handlePayRoute('PAYTM')}>
                    Paytm
                </button>
                <button className="btn" onClick={() => handlePayRoute('ANY')}>
                    Any
                </button>
        </div>
    );
}
