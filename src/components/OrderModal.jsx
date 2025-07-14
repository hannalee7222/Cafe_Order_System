import { useState } from 'react';
import data from '../assets/data';
import SelectOption from './SelectOption';

function OrderModal({ cart, setCart, modalMenu, setModalOn }) {
  const [options, setOptions] = useState({
    온도: 0,
    진하기: 0,
    사이즈: 0,
  });
  const [quantity, setQuantity] = useState(1);
  const itemOptions = data.options;
  console.log(options);
  return (
    <>
      {modalMenu ? (
        <section className="modal-backdrop" onClick={() => setModalOn(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-item">
              <img src={modalMenu.img} />
              <div>
                <h3>{modalMenu.name}</h3>
                <div>{modalMenu.description}</div>
              </div>
            </div>
            <ul className="options">
              {Object.keys(itemOptions).map((el) => (
                <SelectOption
                  key={el}
                  options={options}
                  setOptions={setOptions}
                  name={el}
                  itemOptions={itemOptions[el]}
                />
              ))}
            </ul>
            <div className="submit">
              <div>
                <label htmlFor="count">개수</label>
                <input
                  type="number"
                  id="count"
                  value={quantity}
                  min="1"
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
              </div>
              <button
                onClick={() => {
                  setCart([...cart, { quantity, options, id: modalMenu.id }]);
                  setModalOn(false);
                }}
              >
                장바구니 넣기
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default OrderModal;
