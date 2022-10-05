import { camelCase, startCase } from "lodash";

export const toPascalCase = (str: string) =>
  startCase(camelCase(str)).replace(/ /g, "");

const stringUtils = {
  toPascalCase,
};

export default stringUtils;
