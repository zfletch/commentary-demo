import React, { useState } from 'react';
import {
  arrayOf, shape, string, element,
} from 'prop-types';

import TreebankContext from './treebank-context';

const Treebank = ({ treebank, children }) => {
  const [active, setActive] = useState(null);

  return (
    <TreebankContext.Provider value={{ treebank, active, setActive }}>
      {children}
    </TreebankContext.Provider>
  );
};

Treebank.propTypes = {
  treebank: shape({
    nodes: arrayOf(shape({
      id: string.isRequired,
      label: string.isRequired,
      pos: string.isRequired,
    })).isRequired,
    links: arrayOf(shape({
      source: string.isRequired,
      target: string.isRequired,
      label: string.isRequired,
    })).isRequired,
  }).isRequired,
  children: element,
};

Treebank.defaultProps = {
  children: null,
};

export default Treebank;
