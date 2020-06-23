import React from 'react';
import PropTypes from 'prop-types';

import classes from './AnswerItem.module.scss';

const AnswerItem = ({
  id, guessedWords, trueAnswer, state, value,
}) => {
  const cls = [classes.AnswerItem];
  if (state) {
    cls.push(classes[state]);
  }
  if (trueAnswer) {
    cls.push(classes[trueAnswer]);
  }

  return (

    <span
      className={cls.join(' ')}
      id={id}
      onClick={guessedWords}
      key={Math.random()}
    >
      {value}
    </span>
  );
};

AnswerItem.propTypes = {
  id: PropTypes.string,
  guessedWords: PropTypes.func,
  trueAnswer: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,

};

export default AnswerItem;
