import { useEffect, useRef } from "react";
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";

import GROUPS from "@/data/groups";
import {
  AxisBottomProps,
  AxisLeftProps,
  BarChartProps,
  BarsProps,
  Group,
} from "@/types/interfaces";

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  let colors: Array<string> = [];

  GROUPS.map((group: Group) => colors.push(group.color));

  return (
    <>
      {data.map(({ value, label }, index) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill={colors[index]}
        />
      ))}
    </>
  );
}

export function BarChart({ data }: BarChartProps) {
  const margin = { top: 10, right: 20, bottom: 20, left: 20 };
  const width = 300 - margin.left - margin.right;
  const height = 270 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.4);
  const scaleY = scaleLinear().domain([0, 10]).range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}
