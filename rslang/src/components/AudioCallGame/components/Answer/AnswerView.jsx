import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './AnswerView.module.scss';

const AnswerView = ({
  answer,
  handleClickAnswer,
  question,
  currentAnswerId,
  isRightAnswer,
  isFalseAnswer,
}) => {
  const answerItem = classNames(
    style.item,
    { [style.right]: ((isRightAnswer || isFalseAnswer) && answer.id === question.id) },
    { [style.wrong]: isFalseAnswer && answer.id === currentAnswerId },
    { [style.disable]: isRightAnswer || isFalseAnswer },
  );
  return (
  <li className={answerItem}
    key={answer.id}
    onClick = {() => handleClickAnswer(answer.id)}
  >{answer.wordTranslate}</li>
  );
};

AnswerView.propTypes = {
  answer: PropTypes.object,
  handleClickAnswer: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  currentAnswerId: PropTypes.string,
};

export default AnswerView;
