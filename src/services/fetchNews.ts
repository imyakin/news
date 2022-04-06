import axios from "axios";
import { AppDispatch } from "../store/store";
import { newsSlice } from "../store/slices/newsSlice";

const {newsFetching, newsFetchingSuccess, newsFetchingError} = newsSlice.actions

export const fetchNews = (url: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(newsFetching())
        const {data} = await axios.get(url)
        dispatch(newsFetchingSuccess(data.articles))
    } catch (error: any) {
        dispatch(newsFetchingError(error.message))
    }
}