import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADED":
    case "SIGN_IN":
    case "SIGN_UP":
      toast("Welcome...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Signed out successfully...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        toeken: null,
        name: null,
        email: null,
        _id: null,
      };

    default:
      return state;
  }
};

export default authReducer;
