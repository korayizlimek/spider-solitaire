import React, { useEffect } from "react";

import SpadeA from "../assets/svg/images/Aceofspades.svg";
import Spade2 from "../assets/svg/images/2S.svg";
import Spade3 from "../assets/svg/images/3S.svg";
import Spade4 from "../assets/svg/images/4S.svg";
import Spade5 from "../assets/svg/images/5S.svg";
import Spade6 from "../assets/svg/images/6S.svg";
import Spade7 from "../assets/svg/images/7S.svg";
import Spade8 from "../assets/svg/images/8S.svg";
import Spade9 from "../assets/svg/images/9S.svg";
import Spade10 from "../assets/svg/images/10S.svg";
import SpadeJ from "../assets/svg/images/JS.svg";
import SpadeQ from "../assets/svg/images/QS.svg";
import SpadeK from "../assets/svg/images/KS.svg";
import cardBack from "../assets/svg/images/Card_back.svg";

import { useState } from "react";

const CardImage = ({ card }) => {
  const { name, suit, isOpen } = card;
  const [cardImage, setCardImage] = useState();
  const cardImages = {
    SpadeA,
    Spade2,
    Spade3,
    Spade4,
    Spade5,
    Spade6,
    Spade7,
    Spade8,
    Spade9,
    Spade10,
    SpadeJ,
    SpadeQ,
    SpadeK,
  };

  useEffect(() => {
    try {
      setCardImage(cardImages[`${suit}${name}`]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {isOpen ? (
        <img
          data-testid="cardImage"
          className="card-img"
          src={cardImage}
          alt={cardImage}
        />
      ) : (
        <img
          data-testid="cardBack"
          className="card-img"
          src={cardBack}
          alt={cardBack}
        />
      )}
    </div>
  );
};

export default CardImage;
