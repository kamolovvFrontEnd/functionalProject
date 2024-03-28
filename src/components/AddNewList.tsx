import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/reducer/tableReducer";
import { useTableSelector } from "./hooks/useTableSelector";

function AddNewList({
  addNewListHandler,
}: {
  addNewListHandler: (bool: boolean) => void;
}) {
  const [allChecked, setAllChecked] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState<number>();
  const [email, setEmail] = useState("");
  const [rules, setRules] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [showCity, setShowCity] = useState("");
  const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const showCityHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setShowCity(e.target.value);
  };

  const offAddList = () => {
    let checkenOnTrue;
    let checkenOnTrueSec;

    if (name.length === 0 || name.length > 15 || name.trim() === "") {
      checkenOnTrue = false;
    } else if (emailTest.test(email) === false) {
      checkenOnTrueSec = false;
    } else {
      checkenOnTrue = true;
      checkenOnTrueSec = true;
    }

    return checkenOnTrue && checkenOnTrueSec ? false : true;
  };

  const { data } = useTableSelector();
  const dispatch = useDispatch();

  return (
    <div className="p-3 border rounded new-list">
      <p className="text-right me-4">
        <button
          className="border p-1 px-5 border-red-600 text-red-600 rounded"
          onClick={() => addNewListHandler(false)}
        >
          X
        </button>
      </p>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onClick={() => setRules(true)}
          onChange={(e) => setName(e.target.value)}
          className={`mx-3 px-3 border border-black rounded ${
            (rules && name.length > 15) ||
            (rules && name == "") ||
            (rules && name.trim() === "")
              ? "border border-red-700 rounded"
              : ""
          }`}
        />
        {rules && name.length > 15 ? (
          <span className="text-xs text-red-600">
            Максимальная длина 15 букв
          </span>
        ) : rules && name.length == 0 ? (
          <span className="text-xs text-red-600">
            Поле не может быть пустым
          </span>
        ) : rules && name.trim() === "" ? (
          <span className="text-xs text-red-600">
            Поле не может состоять только из пробелов
          </span>
        ) : (
          ""
        )}
      </label>
      <label>
        Supplier email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mx-3 px-3 border border-black rounded ${
            emailTest.test(email) === false && email.length > 0
              ? "border border-red-700 rounded"
              : ""
          }`}
        />
        {emailTest.test(email) === false && email.length > 0 ? (
          <span className="text-xs text-red-600">
            Не соответствует формату e-mail!
          </span>
        ) : (
          ""
        )}
      </label>
      <label>
        Count:
        <input
          type="number"
          className="mx-3 px-3 border border-black rounded"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          className="mx-3 px-3 border border-black rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <h3>Delivery:</h3>
      <div className="flex justify-around">
        <select
          className="border border-black rounded p-2 px-4 h-10"
          onChange={(e) =>
            e.target.value !== "country"
              ? setDelivery(false)
              : setDelivery(true)
          }
        >
          <option value={"no-delivery"}>Доставки нет</option>
          <option value={"country"}>Страна</option>
        </select>
        <hr />
        <div
          className={`grid border border-black rounded p-2 px-4 h-28 ${
            delivery ? "grid" : "hidden"
          }`}
        >
          <label>
            <input
              type="radio"
              className="me-2"
              name="a"
              value="russia"
              onChange={showCityHandler}
            />
            Россия
          </label>
          <label>
            <input
              type="radio"
              className="me-2"
              name="a"
              value="usa"
              onChange={showCityHandler}
            />
            США
          </label>
          <label>
            <input
              type="radio"
              className="me-2"
              name="a"
              value="japan"
              onChange={showCityHandler}
            />
            Япония
          </label>
        </div>
        <hr />
        <div className={delivery ? "" : "hidden"}>
          {showCity === "russia" && (
            <div className="grid border border-black rounded p-2 px-4 w-48">
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  onClick={() => setAllChecked(!allChecked)}
                />
                Select All
              </label>
              <hr className="text-black" />
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Саратов
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Москва
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Питер
              </label>
            </div>
          )}
          {showCity === "usa" && (
            <div className="grid border border-black rounded p-2 px-4 w-48">
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  onClick={() => setAllChecked(!allChecked)}
                />
                Select All
              </label>
              <hr className="text-black" />
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Нью-Йорк
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Вашингтон
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Лос-Анджелес
              </label>
            </div>
          )}
          {showCity === "japan" && (
            <div className="grid border border-black rounded p-2 px-4 w-48">
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  onClick={() => setAllChecked(!allChecked)}
                />
                Select All
              </label>
              <hr className="text-black" />
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Токие
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Киото
              </label>
              <label>
                <input
                  type="checkbox"
                  className="me-2"
                  checked={allChecked || onclick}
                />
                Осата
              </label>
            </div>
          )}
        </div>
      </div>
      <button
        className={`${
          offAddList() ? "border-opacity-30 text-gray-500" : ""
        } border border-black rounded mt-4 w-32 h-8`}
        type="submit"
        disabled={offAddList()}
        onClick={() =>
          dispatch(
            setData([
              ...data,
              {
                name: name,
                count: count,
                price: Number(price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                }),
                id: Math.random(),
              },
            ])
          )
        }
      >
        Add / Uptade
      </button>
    </div>
  );
}

export default AddNewList;
