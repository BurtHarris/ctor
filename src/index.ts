import YAML from "yaml";

export function stringify(value: any) {
  var src = YAML.stringify(value);
  return src;
}

export function parse(src: string) {
  throw new Error("not yet implemented");
}

export default {
  stringify,
  parse
};
