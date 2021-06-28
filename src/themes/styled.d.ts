import "styled-components"

import { ColorInterface } from "./style/color"
import { FontsInterface } from "./style/fonts"

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorInterface
    fonts: FontsInterface
  }
}
