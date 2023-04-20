import React from "react";
import "./qr-code-card.styles.css";
import qrCodeImage from "../../assets/images/image-qr-code.png";

const QrCodeCard = () => {
  return (
    <div className="qr-code-card">
      <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />

      <div className="textQrCode">
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCodeCard;
