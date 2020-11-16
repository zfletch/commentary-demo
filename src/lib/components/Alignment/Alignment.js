import React, { useState } from 'react';

import { xmlToJson } from '../../utils/parsing';

import AlignmentContext from './alignment-context';

const Alignment = ({ alignment, children, sentence, active, toggleActive }) => {
  const [aligned, setAligned] = useState('1-1');
  const json = xmlToJson(alignment);

  const toggleAligned = (id) => {
    if (aligned && id === aligned) {
      // setAligned(null);
    } else {
      setAligned(id);
    }
  };

  return (
    <AlignmentContext.Provider value={{ json, sentence, active, aligned, toggleActive, toggleAligned }}>
      {children}
    </AlignmentContext.Provider>
  );
};

export default Alignment;
