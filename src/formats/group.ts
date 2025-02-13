export const 단어 = "word";
export const 문장 = "sentense";
export const 문단 = "paragraph";

export const Group = [단어, 문장, 문단] as const;
export type HangulGroup = typeof Group;
