import { useDispatch } from "react-redux";
import { remove } from "../store/reducer/tableReducer";

function DeleteList({
  selectId,
  deleteListHandler,
}: {
  deleteListHandler: (bool: boolean) => void;
}) {
  const dispatch = useDispatch();
  return (
    <div className="delete-list">
      <h1 className="text-center text-3xl font-bold">Are you sure?</h1>
      <hr className="my-6 border-t-4" />
      <h4 className="text-center">
        Вы действительно хотите выполнить это действие?
      </h4>
      <div className="text-center mt-8">
        <button
          className="me-16 p-2 px-4 border border-red-600 text-red-600 text-xl"
          onClick={() => {
            deleteListHandler(false);
            dispatch(remove(selectId));
          }}
        >
          ДА
        </button>
        <button
          className="p-2 px-4 border border-green-600 text-green-600 text-xl"
          onClick={() => deleteListHandler(false)}
        >
          НЕТ
        </button>
      </div>
    </div>
  );
}

export default DeleteList;
