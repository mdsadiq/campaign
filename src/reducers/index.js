import { combineReducers } from "redux";
import campaignsReducer from "./campaignsReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  campaigns: campaignsReducer,
  data: dataReducer,
});
