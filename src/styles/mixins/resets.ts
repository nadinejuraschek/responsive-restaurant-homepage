import { css, FlattenSimpleInterpolation } from "styled-components";

export function linkReset(): FlattenSimpleInterpolation {
  return css`
    cursor: pointer;
    text-decoration: none;
  `
};
