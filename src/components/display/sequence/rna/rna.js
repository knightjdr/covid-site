import PropTypes from 'prop-types';
import React from 'react';

import './rna.css';

const RNA = ({}) => (
  <div className="display__sequence-rna">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={540}
      width={200}
      viewBox="0 0 200 540"
    >
      <text
        dominantBaseline="hanging"
        fontSize={14}
        textAnchor="middle"
        x={100}
        y={0}
      >
        5&apos;
      </text>
      <g transform="translate(0, 20)">
        <g className="display__sequence-rna-orf1a">
          <g data-orf="ORF1a">
            <rect
              height={220.75}
              width={15}
              x={100}
              y={4.43}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={114.81}
            >
              ORF1a
            </text>
          </g>
          <g data-orf="ORF1ab">
            <rect
              height={355.97}
              width={15}
              x={85}
              y={4.43}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={80}
              y={182.42}
            >
              ORF1ab
            </text>
          </g>
        </g>
        <g className="display__sequence-rna-sp">
          <g data-orf="S">
            <rect
              height={63.89}
              width={15}
              x={100}
              y={360.53}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={392.48}
            >
              S
            </text>
          </g>
          <g data-orf="E">
            <rect
              height={3.8}
              width={15}
              x={85}
              y={438.82}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={80}
              y={440.72}
            >
              E
            </text>
          </g>
          <g data-orf="M">
            <rect
              height={11.17}
              width={15}
              x={100}
              y={443.47}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={449.06}
            >
              M
            </text>
          </g>
          <g data-orf="N">
            <rect
              height={21.05}
              width={15}
              x={100}
              y={472.75}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={483.28}
            >
              N
            </text>
          </g>
        </g>
        <g className="display__sequence-rna-nsp">
          <g data-orf="ORF3a">
            <rect
              height={13.83}
              width={15}
              x={85}
              y={424.57}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={80}
              y={431.49}
            >
              ORF3a
            </text>
          </g>
          <g data-orf="ORF6">
            <rect
              height={3.09}
              width={15}
              x={85}
              y={454.82}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={80}
              y={456.37}
            >
              ORF6
            </text>
          </g>
          <g data-orf="ORF7a">
            <rect
              height={6.1}
              width={15}
              x={100}
              y={458.03}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={461.08}
            >
              ORF7a
            </text>
          </g>
          <g data-orf="ORF8">
            <rect
              data-orf="ORF8"
              height={6.1}
              width={15}
              x={100}
              y={466.39}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={120}
              y={469.44}
            >
              ORF8
            </text>
          </g>
          <g data-orf="ORF10">
            <rect
              height={1.94}
              width={15}
              x={85}
              y={494.21}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={80}
              y={494.21}
            >
              ORF10
            </text>
          </g>
        </g>
        <line
          strokeWidth={1}
          x1={100}
          x2={100}
          y1={0}
          y2={500}
        />
      </g>
      <text
        dominantBaseline="hanging"
        fontSize={14}
        textAnchor="middle"
        x={100}
        y={525}
      >
        3&apos;
      </text>
    </svg>
  </div>
);

RNA.propTypes = {};

export default RNA;
