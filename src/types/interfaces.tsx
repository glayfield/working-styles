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

export interface Groups {
    bePerfect: string,
    pleaseOthers: string,
    hurryUp: string,
    beStrong: string,
    tryHard: string
}

export interface Group {
    id: number,
    name: string,
    barName: string,
    key: string,
    color: string,
    imperative: string[],
    identification: string[],
    benefits: string[],
    problems: string[],
    treatment: string[]
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
    key: string,
    label: string,
    value: number,
}
