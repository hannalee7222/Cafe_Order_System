function Item({ item, clickHandler }) {
  return (
    <li
      className="item"
      onClick={() => {
        console.log('✅ 클릭됨:', item.name); // 여기에 추가
        clickHandler(); // 원래 코드
      }}
    >
      <img src={item.img} alt={item.name} />
      <div className="item-info">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{item.price.toLocaleString()}원</p>
      </div>
    </li>
  );
}

export default Item;
