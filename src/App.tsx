import { useEffect, useState } from "react";
import { useTableSelector } from "./components/hooks/useTableSelector";
import { useLocation, Link } from "react-router-dom";
import AddNewList from "./components/AddNewList";
import DeleteList from "./components/DeleteList";
import "./App.css";
import ProductsInfo from "./components/ProductsInfo";

function App() {
  const { data } = useTableSelector();
  const [list, setList] = useState(false);
  const [deleteList, setDeleteList] = useState(false);
  const [deleteProductInfo, setDeleteProductInfo] = useState(false);
  const [selectId, setSelectId] = useState();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchParam = queryParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(searchParam);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchValue]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    const params = new URLSearchParams(location.search);
    params.set("search", searchValue);
    window.history.replaceState({}, "", `?${params.toString()}`);
  };

  return (
    <>
      {list ? <AddNewList addNewListHandler={setList} /> : ""}
      {deleteProductInfo ? <ProductsInfo setDeleteProductInfo={setDeleteProductInfo}/> : ""}
      {deleteList ? (
        <DeleteList deleteListHandler={setDeleteList} selectId={selectId} />
      ) : (
        ""
      )}
      <div
        className={`w-full h-screen ${
          list || deleteList || deleteProductInfo
            ? "bg-black bg-opacity-70 pointer-events-none"
            : ""
        } pt-6`}
      >
        <div className={`w-2/3 m-auto`}>
          <div className="flex justify-between">
            <div>
              <input
                type="search"
                className="p-2 border border-black rounded me-2 bg-inherit placeholder:text-black"
                placeholder="Enter ..."
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button className="p-2 border border-black rounded">
                Искать
              </button>
            </div>
            <button
              className={`p-2 border border-black rounded ${
                list ? "disabled" : ""
              }`}
              onClick={() => setList(!list)}
            >
              Add new
            </button>
          </div>
          <table className="w-full table-style">
            <th>
              <tr>NAME</tr>
            </th>
            <th>
              <tr>PRICE</tr>
            </th>
            <th>
              <tr>ACTIONS</tr>
            </th>
            {filteredData.map((dates: []) => {
              return (
                <>
                  <td className="flex justify-between">
                    <Link to={`/`} onClick={() => setDeleteProductInfo(true)}>
                      {dates.name}
                    </Link>
                    <span className="border border-black rounded bg-red-600 text-white px-2">
                      {dates.count}
                    </span>
                  </td>
                  <td>
                    <tr>{dates.price}</tr>
                  </td>
                  <td>
                    <tr>
                      <button className="me-6 px-3 border border-black rounded">
                        EDIT
                      </button>
                      <button
                        className="px-3 border border-black rounded"
                        onClick={() => {
                          setSelectId(dates.id);
                          setDeleteList(true);
                        }}
                      >
                        DELETE
                      </button>
                    </tr>
                  </td>
                </>
              );
            })}
          </table>
          {data.length === 0 && (
            <h1 className="text-center text-2xl font-bold mt-8">
              Пока товаров нет
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
