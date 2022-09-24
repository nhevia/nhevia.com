// workaround for jest error when loading SVGs (next dev uses @svgr/webpack)
// more info https://github.com/vercel/next.js/issues/37542#issuecomment-1151075024
// Ideally I want another way to load SVGs (that can be used in jest) instead of a mock div
const div = 'div';
export default div;
export const ReactComponent = 'div';
