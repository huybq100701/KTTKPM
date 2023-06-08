import React from "react";
import "../../styles/sections/shopBanner/shopBanner.scss";
import ButtonShop from "../../components/button/ButtonShop";
const ShopBanner = () => {
  return (
    <div className="shopBanner">
      <div className="shopBanner__image-container">
        <img
          src="https://cdn.shopify.com/s/files/1/0011/0778/7894/files/white-pearl-gold-jewelry_1440x640.jpg?v=1685602405"
          alt=""
          className="shopBanner__img"
        />
      </div>

      <div className="shopBanner__container">
        <div className="shopBanner__content">
          <div className="shopBanner__content-wrapper">
            <div className="shopBanner__content-text">LIMITED JEWELRY</div>
            <div className="shopBanner__content-button">
              <ButtonShop name="BUY" />
            </div>
            {/* <canvas width={480} height={164}></canvas> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
