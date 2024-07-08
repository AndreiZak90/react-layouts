export default function BoxList(item) {
  return (
    <>
      <div className="box_list_item">
        <img src={item.img} className="list_img" />
        <p className="list_name">{item.name}</p>
        <p className="list_color">{item.color}</p>
        <p className="list_price">${item.price}</p>
        <button className="btn_add">add to cerd</button>
      </div>
    </>
  );
}
