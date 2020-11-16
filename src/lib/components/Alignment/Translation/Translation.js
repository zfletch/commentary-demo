import React, { Fragment } from 'react';

import styles from './Translation.module.scss';

import AlignmentContext from '../alignment-context';

const renderText = (n, text, refs, ii, aligned) => {
  const isActive = refs && refs.some(({ $: { nrefs } }) => nrefs === aligned);
  const className = isActive ? [styles.word, styles.active].join(' ') : styles.word;

  if (text[0] === '\n') {
    return <br key={ii} />;
  }

  return (
    <Fragment key={ii}>
      <span key={ii} className={className}>
        {text}
      </span>
      {' '}
    </Fragment>
  );
};

const TranslationComponent = ({ json, aligned }) => {
  const words = json['aligned-text'].sentence[0].wds[1].w;

  return (
    <div>
      <p>
        {words.map(({ $: { n }, text, refs }, ii) => (
          renderText(n, text, refs, ii, aligned)
        ))}
      </p>
    </div>
  );
};

const Translation = () => (
  <AlignmentContext.Consumer>
    {({ json, aligned }) => <TranslationComponent json={json} aligned={aligned} />}
  </AlignmentContext.Consumer>
);

export default Translation; 
