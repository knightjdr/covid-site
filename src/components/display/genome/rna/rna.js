import PropTypes from 'prop-types';
import React from 'react';

import './rna.css';

const RNA = ({
  handleClick,
}) => (
  <div className="display__sequence-rna">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={540}
      width={250}
      viewBox="0 0 250 540"
    >
      <text
        dominantBaseline="hanging"
        fontSize={14}
        textAnchor="middle"
        x={125}
        y={0}
      >
        5&apos;
      </text>
      <g transform="translate(0, 20)">
        <g className="display__sequence-rna-orf1a">
          <g
            data-orf="ORF1a"
            onClick={handleClick}
          >
            <rect
              height={220.75}
              width={20}
              x={125}
              y={4.43}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={114.81}
            >
              ORF1a
            </text>
          </g>
          <g
            data-orf="ORF1ab"
            onClick={handleClick}
          >
            <rect
              height={355.97}
              width={20}
              x={105}
              y={4.43}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={100}
              y={182.42}
            >
              ORF1ab
            </text>
          </g>
        </g>
        <g className="display__sequence-rna-sp">
          <g
            data-orf="S"
            onClick={handleClick}
          >
            <rect
              height={63.89}
              width={20}
              x={125}
              y={360.53}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={392.48}
            >
              S
            </text>
          </g>
          <g
            data-orf="E"
            onClick={handleClick}
          >
            <rect
              height={3.8}
              width={20}
              x={105}
              y={438.82}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={50}
              y={440.72}
            >
              E
            </text>
            <line
              x1={55}
              x2={100}
              y1={440.72}
              y2={440.72}
            />
          </g>
          <g
            data-orf="M"
            onClick={handleClick}
          >
            <rect
              height={11.17}
              width={20}
              x={125}
              y={443.47}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={449.06}
            >
              M
            </text>
          </g>
          <g
            data-orf="N"
            onClick={handleClick}
          >
            <rect
              height={21.05}
              width={20}
              x={125}
              y={472.75}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={483.28}
            >
              N
            </text>
          </g>
        </g>
        <g className="display__sequence-rna-nsp">
          <g
            data-orf="ORF3a"
            onClick={handleClick}
          >
            <rect
              height={13.83}
              width={20}
              x={105}
              y={424.57}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={100}
              y={431.49}
            >
              ORF3a
            </text>
          </g>
          <g
            data-orf="ORF3b"
            onClick={handleClick}
          >
            <rect
              height={2.89}
              width={20}
              x={125}
              y={426.76}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={428.21}
            >
              ORF3b
            </text>
          </g>
          <g
            data-orf="ORF6"
            onClick={handleClick}
          >
            <rect
              height={3.09}
              width={20}
              x={105}
              y={454.82}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={100}
              y={456.37}
            >
              ORF6
            </text>
          </g>
          <g
            data-orf="ORF7a"
            onClick={handleClick}
          >
            <rect
              height={6.1}
              width={20}
              x={125}
              y={458.03}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={200}
              y={461.08}
            >
              ORF7a
            </text>
            <line
              x1={150}
              x2={195}
              y1={461.08}
              y2={461.08}
            />
          </g>
          <g
            data-orf="ORF7b"
            onClick={handleClick}
          >
            <rect
              height={2.19}
              width={20}
              x={105}
              y={464.08}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={50}
              y={465.18}
            >
              ORF7b
            </text>
            <line
              x1={55}
              x2={100}
              y1={465.18}
              y2={465.18}
            />
          </g>
          <g
            data-orf="ORF8"
            onClick={handleClick}
          >
            <rect
              data-orf="ORF8"
              height={6.1}
              width={20}
              x={125}
              y={466.39}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="start"
              x={150}
              y={469.44}
            >
              ORF8
            </text>
          </g>
          <g
            data-orf="ORF9b"
            onClick={handleClick}
          >
            <rect
              height={4.9}
              width={20}
              x={105}
              y={472.91}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={100}
              y={475.36}
            >
              ORF9b
            </text>
          </g>
          <g
            data-orf="ORF14"
            onClick={handleClick}
          >
            <rect
              height={3.7}
              width={20}
              x={105}
              y={480.44}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={50}
              y={482.29}
            >
              ORF14
            </text>
            <line
              x1={55}
              x2={100}
              y1={482.29}
              y2={482.29}
            />
          </g>
          <g
            data-orf="ORF10"
            onClick={handleClick}
          >
            <rect
              height={1.94}
              width={20}
              x={105}
              y={494.21}
            />
            <text
              dominantBaseline="middle"
              fontSize={14}
              textAnchor="end"
              x={100}
              y={495.18}
            >
              ORF10
            </text>
          </g>
        </g>
        <line
          strokeWidth={1}
          x1={125}
          x2={125}
          y1={0}
          y2={500}
        />
      </g>
      <text
        dominantBaseline="hanging"
        fontSize={14}
        textAnchor="middle"
        x={125}
        y={525}
      >
        3&apos;
      </text>
    </svg>
  </div>
);

RNA.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default RNA;
