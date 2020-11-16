import React, { Fragment } from 'react';

import styles from './Original.module.scss';

import AlignmentContext from '../alignment-context';

const findWord = (wordId, sentence) => (
  sentence.word.find(({ $: { id } }) => id === wordId)
);

const renderText = (n, id, text, toggleActive, toggleAligned, ii, sentence, active) => {
  const onClick = () => {
    toggleActive(findWord(id, sentence));
    toggleAligned(n);
  };
  const isActive = active && active.$.id === id;
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;

  if (text[0] === '\n') {
    return <br key={ii} />;
  }

  return (
    <Fragment key={ii}>
      <span key={ii} onClick={onClick} className={className}>
        {text}
      </span>
      {' '}
    </Fragment>
  );
};

const OriginalComponent = ({ json, sentence, active, toggleActive, toggleAligned }) => {
  const words = json['aligned-text'].sentence[0].wds[0].w;

  return (
    <div>
      <p>
        {words.map(({ $: { n, id }, text }, ii) => (
          renderText(n, id, text, toggleActive, toggleAligned, ii, sentence, active)
        ))}
      </p>
    </div>
  );
};

const Original = () => (
  <AlignmentContext.Consumer>
    {({ json, sentence, active, toggleActive, toggleAligned }) => <OriginalComponent json={json} sentence={sentence} active={active} toggleActive={toggleActive} toggleAligned={toggleAligned} />}
  </AlignmentContext.Consumer>
);

export default Original; 
