import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../basicComponents/Button';
import { pagesData } from '../../../helpers/constants';

const PromoPageView = () => (
    <div className="promo-page">
      <section className="demonstration-container">
        <p className="demonstration-container__title">Что это и почему понравится пользователю</p>
        <video className="demonstration-container__video" controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4"></source>
          Извините, ваш браузер не поддерживает встроенное видео
        </video>
        <Link to={ pagesData.learnWords.path }>
          <Button className="demonstration-container__start-button" value="Учите английский с нами" />
        </Link>
      </section>
    </div>
);

export default PromoPageView;
