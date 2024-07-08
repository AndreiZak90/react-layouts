import BoxModule from "./BoxModule";

export default function AddModule({ values }) {
  return (
    <div className="module_box">{values.map((item) => BoxModule(item))}</div>
  );
}
