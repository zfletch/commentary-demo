import React from 'react';
import { object, string } from 'prop-types';

import { wordType } from '../../types';

import styles from './Information.module.scss';

import { deconstructPostag } from '../Treebank/config';

const renderLemma = (lemma) => (
  <div className={styles.container}>
    <dt className={styles.dt}>Lemma</dt>
    <dd className={styles.dd}>{lemma}</dd>
  </div>
);

const renderPostag = ([name, value]) => (
  <div key={name} className={styles.container}>
    <dt className={styles.dt}>{name}</dt>
    <dd className={styles.postag}>{value}</dd>
  </div>
);

const renderData = (name, value) => (
  <div key={name} className={styles.container}>
    <dt className={styles.dt}>{name}</dt>
    <dd className={styles.dd}>{value}</dd>
  </div>
);

const Information = ({ active, field, config }) => {
  if (active) {
    const { $ } = active;
    if (field === 'postag') {
      const { postag, lemma } = $;

      return (
        <div className={styles.information}>
          <dl className={styles.dl}>
            {renderLemma(lemma)}
            {deconstructPostag(config, postag).map(renderPostag)}
          </dl>
        </div>
      );
    }

    if ($[field]) {
      return (
        <div className={styles.information}>
          <dl className={styles.dl}>
            {renderData(field, $[field])}
          </dl>
        </div>
      );
    }
  }

  return (
    <div />
  );
};

Information.propTypes = {
  active: wordType,
  field: string,
  // eslint-disable-next-line react/forbid-prop-types
  config: object.isRequired,
};

Information.defaultProps = {
  active: null,
  field: 'postag',
};

export default Information;
