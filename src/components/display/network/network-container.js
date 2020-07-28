import cytoscape from 'cytoscape';
import React, { useRef, useEffect } from 'react';
import { cloneDeep } from 'lodash';

import Network from './network';

import useFetch from '../../hooks/fetch/use-fetch';

const NetworkContainer = () => {
  const ref = useRef();
  const { fetching, response: network } = useFetch('/files/network.json');

  const cy = network
    ? cytoscape({
      container: ref.current,
      elements: cloneDeep(network.elements),
      layout: {
        name: 'preset',
      },
      style: network.style,
    })
    : null;

  const handleReset = () => {
    cy.elements().remove();
    cy.add(cloneDeep(network.elements));
    cy.fit([], 30);
  };

  const startingZoom = cy ? cy.zoom() : 1;

  useEffect(() => {
    if (cy) {
      cy.on('zoom', () => {
        const zoomFactor = cy.zoom() / startingZoom;
        console.log(zoomFactor);
      });
    }
  }, [cy]);

  return (
    <Network
      cy={cy}
      handleReset={handleReset}
      isLoading={fetching}
      ref={ref}
    />
  );
};

export default NetworkContainer;
