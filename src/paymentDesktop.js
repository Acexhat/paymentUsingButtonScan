import React from "react";
import './style.css';
import QRCode from 'qrcode.react';

export default function PaymentDesktop() {

    const [Qrvalue, setQrvalue] = React.useState('upi://pay?pa=9262561881@ybl&pn=Akshat Bhaskar&am=1&tn=442389749fhefh&cu=INR');

    return (
        <div className="desktop_root">
            <div className="card">
                <QRCode value={Qrvalue} size={256} bgColor={'#242625'} fgColor={'#c9caca'} />
            </div>
        </div>
    );
}
