import React from 'react';
import DagreGraph from 'dagre-d3-react';
import { curveBasis } from 'd3-shape';

import styles from './Graph.module.scss';

import TreebankContext from '../treebank-context';

const colorMap = {
  n: 'rgb(43, 114, 124)',
  a: 'blue',
  d: 'darkorange',
  c: 'deeppink',
  r: 'green',
  p: 'purple',
  i: 'gold',
  v: 'red',
  m: 'lightgreen',
  u: '#222',
  l: 'lightblue',
  g: 'lightcoral',
  x: 'gray',
  '-': '#222',
};

const config = {
  rankdir: 'TB',
};

const nodeConfig = ({ pos }) => (
  {
    labelStyle: `fill: ${colorMap[pos]}`,
  }
);

const configureNodes = (nodes) => (
  nodes.map((node) => {
    // eslint-disable-next-line no-param-reassign
    node.config = nodeConfig(node);

    return node;
  })
);

const linkConfig = {
  arrowheadStyle: 'display: none',
  curve: curveBasis,
};

const configureLinks = (links) => (
  links.map((link) => {
    // eslint-disable-next-line no-param-reassign
    link.config = linkConfig;

    return link;
  })
);

const Graph = () => (
  <TreebankContext.Consumer>
    {({ treebank: { nodes, links }, setActive }) => (
      <DagreGraph
        nodes={configureNodes(nodes)}
        links={configureLinks(links)}
        fitBoundaries
        zoomable
        className={styles.graph}
        config={config}
        onNodeClick={({ original }) => setActive(original)}

        height="600"
        width="1000"
      />
    )}
  </TreebankContext.Consumer>
);

export default Graph;
