import React from 'react';

import SentenceContext from '../sentence-context';

import Information from '../../Information';

const InformationWithContext = ({ field }) => (
  <SentenceContext.Consumer>
    {({ active, config }) => <Information active={active} field={field} config={config} />}
  </SentenceContext.Consumer>
);

export default InformationWithContext;
