export const themes = ['human', 'bold', 'technical', 'intentional'] as const;
export type Theme = typeof themes[number];

export const themeLabels: Record<Theme, string> = {
  human: 'human',
  bold: 'bold',
  technical: 'technical',
  intentional: 'intentional',
};
