import { useState } from 'react';
import Item from './Item';
import OrderModal from './OrderModal';

function Menu({ menu, cart, setCart }) {
  if (!menu)
    return (
      <div style={{ textAlign: 'center', margin: '80px' }}>
        {' '}
        메뉴 정보가 없습니다.
      </div>
    );

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const categories = Object.keys(menu);
  return (
    <>
      {categories.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <>
          {console.log('✅ 모달 열림')} {/* 추가 */}
          <OrderModal
            cart={cart}
            setCart={setCart}
            modalMenu={modalMenu}
            setModalOn={setModalOn}
          />
        </>
      ) : null}
    </>
  );
}

export default Menu;
