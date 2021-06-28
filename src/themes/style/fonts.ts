import { color } from "./color"

export interface FontsInterface {
  SansMedium: string
  SansBold: string
}

export const fonts: FontsInterface = {
  SansMedium: `
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  color: ${color.veryDark};
  `,

  SansBold: `
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${color.veryDark};
  `,
}
