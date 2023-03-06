import withSolid from "rollup-preset-solid";
import css from "rollup-plugin-import-css";

export default withSolid({
  targets: ["esm", "cjs"],
  plugins: [css()],
});

// TODO: add server support
// TODO: svg support
// TODO: tree shake
// TODO: source maps
