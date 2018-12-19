export function toClassNames(...args) {
  return args.filter(name => !!name).join(' ');
}

export function toClassNameObj(...args) {
  const className = toClassNames(...args);
  return className ? { className } : {};
}

export function normalize(data, key = 'id') {
  return data.reduce((accum, value) => {
    accum[value[key]] = value;
    return accum;
  }, {});
}
