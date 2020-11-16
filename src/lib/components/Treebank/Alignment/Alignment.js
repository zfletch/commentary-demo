import React from 'react';

import SentenceContext from '../sentence-context';

import Alignment from '../../Alignment';

const AlignmentWithContext = ({ alignment, children }) => (
  <SentenceContext.Consumer>
    {({
      sentence, active, toggleActive
    }) => <Alignment alignment={alignment} children={children} sentence={sentence} active={active} toggleActive={toggleActive} />}
  </SentenceContext.Consumer>
);

export default AlignmentWithContext;
