import { useSelector } from "react-redux";

export const useTableSelector = () => useSelector((state) => state.tableReducer);