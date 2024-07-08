import BoxList from "./BoxList";

export default function AddList({ values }) {
  return <div className="box_list">{values.map((item) => BoxList(item))}</div>;
}
