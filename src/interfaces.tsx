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
    desc?: string
}
