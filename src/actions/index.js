import axios from "axios";

const getPoke =
  (value = "charmeleon") =>
  async (dispatch) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "CHANGE_REGION",
            data: res.data,
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: "Fetch_Error",
          data: "error",
        });
      });
  };
export default getPoke;
