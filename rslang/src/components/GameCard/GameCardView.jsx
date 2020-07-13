import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../basicComponents/Button';
import {getPath} from "../../helpers/functions";

const GameCardView = ({ data: { title, description, path, startPath } }) => (
    <div className="game-card">
      <h5 className="game-card__title">{title}</h5>
      <p className="game-card__description">{description}</p>
      <Link className="link-btn game-card__link-button-container" to={
        getPath(startPath ?? path)
      }>
        <Button type="secondary" value={`${title} →`}/>
      </Link>
    </div>
);

GameCardView.propTypes = {
  data: PropTypes.object,
};

export default GameCardView;
