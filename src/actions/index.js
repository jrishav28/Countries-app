import axios from "axios";

const loadCountry =
  (value = "charmeleon") =>
  async (dispatch) => {
    console.log(value);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return dispatch({
            type: "CHANGE_REGION",
            data: res.data,
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: "Fetch_Error",
          data: false,
        });
      });
  };
export default loadCountry;
