import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded] = useState(false);

  const incrementar = () => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    }
  };

  const decrementar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    if (counter <= itemStock) {
      setItemStock(itemStock - counter);
      setCounter(1);
      onAdd(counter);
      setItemAdded(true);
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <>
      <div className="row my-1">
        <div className="col-md-4">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn text-bg-dark p-3"
              onClick={decrementar}
            >
              -
            </button>
            <button type="button" className="btn text-bg-dark p-3">
              {counter}
            </button>
            <button
              type="button"
              className="btn text-bg-dark p-3"
              onClick={incrementar}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col-md-5">
          {itemAdded ? (
            <Link to={"/cart"} className="btn text-bg-dark p-3">
              Terminar mi compra
            </Link>
          ) : (
            <button
              type="button"
              className="btn text-bg-dark p-3"
              onClick={addToCart}
            >
              Agregar al Carrito
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCount;
