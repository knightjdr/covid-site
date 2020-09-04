import React, { useEffect, useRef, useState } from 'react';
import { cloneDeep } from 'lodash';

import Network from './network';
import isTouchDevice from '../../../utils/is-touch-device';
import useFetch from '../../hooks/fetch/use-fetch';

const ZOOM_INCREMENT = 0.1;
const ZOOM_MIN = 0.1;

const NetworkContainer = () => {
  const [selectedNode, setSelectedNode] = useState({ id: '', data: {} });
  const cy = useRef();
  const ref = useRef();
  const { fetching, response: network } = useFetch('files/network.json');

  const isTouch = isTouchDevice();

  const getElementCenter = () => {
    const rect = ref.current.getBoundingClientRect();
    return { x: rect.width / 2, y: rect.height / 2 };
  };

  const handleClear = () => {
    cy.current.$('*').neighborhood().removeClass('hidden');
    setSelectedNode({ id: '', data: {} });
  };

  const handleReset = () => {
    cy.current.elements().remove();
    cy.current.add(cloneDeep(network.elements));
    cy.current.fit([], 30);
    setSelectedNode({ id: '', data: {} });
  };

  const handleZoomIn = () => {
    const currentZoom = cy.current.zoom();
    cy.current.zoom({
      level: currentZoom + ZOOM_INCREMENT,
      renderedPosition: getElementCenter(),
    });
  };

  const handleZoomOut = () => {
    const currentZoom = cy.current.zoom();
    cy.current.zoom({
      level: Math.max(currentZoom - ZOOM_INCREMENT, ZOOM_MIN),
      renderedPosition: getElementCenter(),
    });
  };

  useEffect(() => {
    if (network && ref.current && !cy.current) {
      const drawNetwork = async () => {
        const cytoscape = (await import('cytoscape')).default;
        cy.current = cytoscape({
          container: ref.current,
          boxSelectionEnabled: false,
          elements: cloneDeep(network.elements),
          layout: {
            name: 'preset',
          },
          minZoom: ZOOM_MIN,
          style: network.style,
        });
        cy.current.on('tap', 'node', (e) => {
          const node = cy.current.$(`#${e.target.id()}`);

          if (isTouch || e.originalEvent.shiftKey) {
            cy.current.elements().not(e.target).unselect();
            cy.current.$('*').neighborhood().addClass('hidden');
            node.removeClass('hidden');
            node.neighborhood().removeClass('hidden');
          } else {
            setSelectedNode({ id: e.target.id(), data: node.data() });
          }
        });
      };

      drawNetwork();
    }
  }, [cy.current, network, ref.current]);

  return (
    <Network
      handleClear={handleClear}
      handleReset={handleReset}
      handleZoomIn={handleZoomIn}
      handleZoomOut={handleZoomOut}
      isLoading={fetching}
      ref={ref}
      selectedNode={selectedNode.data.name}
    />
  );
};

export default NetworkContainer;
