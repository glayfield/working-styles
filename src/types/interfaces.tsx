import { ScaleBand, ScaleLinear } from "d3";

export interface Question {
    id: number,
    group: number,
    text: string
}

export interface Answer {
    group: number,
    score: number
}

export interface Option {
    text: string,
    score: number
}

export interface Group {
    id: number,
    name: string,
    color: string,
    desc?: string
}

export interface AxisBottomProps {
    scale: ScaleBand<string>;
    transform: string;
}

export interface AxisLeftProps {
    scale: ScaleLinear<number, number, never>;
}

export interface BarChartProps {
    data: ChartResult[];
}

export interface BarsProps {
    data: BarChartProps["data"];
    height: number;
    scaleX: AxisBottomProps["scale"];
    scaleY: AxisLeftProps["scale"];
}

export interface ChartResult {
    label: string,
    value: number,
}
