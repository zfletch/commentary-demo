import React, { useState } from 'react';

import styles from './App.module.scss';

import {
  Treebank,
  Sentence,
  Text,
  Graph,
  Information,
  Xml,
  Collapse,
  Alignment,
  Original,
  Translation,
} from '../../lib';

import treebank from './treebank.js';
import alignment from './alignment.js';

import { xmlToJson } from '../../lib/utils/parsing';

const App = () => {
  return (
    <div className={styles.treebank}>
      <Treebank treebank={treebank}>
        <Sentence id="1">
          <Alignment alignment={alignment}>
            <div className={styles.row}>
              <div className={styles.left}>
                <Original />
              </div>
              <div className={styles.right}>
                <Information field="gloss" />
                <Information />
                <Information field="notes" />
                <Collapse title="Translation">
                  <Translation />
                </Collapse>
                <Collapse title="Treebank">
                  <div className={styles.graph}>
                    <Graph />
                  </div>
                </Collapse>
                <Collapse title="XML">
                  <Xml />
                </Collapse>
              </div>
            </div>
          </Alignment>
        </Sentence>
      </Treebank>
    </div>
  );
};

export default App;
