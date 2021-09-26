import axios from "axios";

const loadCountry =
  (value = "charmeleon") =>
  async (dispatch) => {
    // console.log(value);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          dispatch({
            type: "CHANGE_REGION",
            data: res.data,
          });
        }
        // return res.data;
      })
      .catch((error) => {
        return dispatch({
          type: "Fetch_Error",
          data: "error",
        });
      });
  };
export default loadCountry;
