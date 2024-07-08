export default function BoxModule(item) {
  return (
    <>
      <div className="item_module_box">
        <h2 className="module_title">{item.name}</h2>
        <p className="module_color">{item.color}</p>
        <img src={item.img} className="module_img" />
        <div className="module_price_box">
          <p className="module_price_num">${item.price}</p>
          <button className="btn_add">add to cerd</button>
        </div>
      </div>
      ;
    </>
  );
}
