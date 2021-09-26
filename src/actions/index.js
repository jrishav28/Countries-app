import axios from "axios";

const loadCountry =
  (value = "charmeleon") =>
  async (dispatch) => {
    // console.log(value);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/charizard`)
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          dispatch({
            type: "CHANGE_REGION",
            data: res.data,
          });
        }
        // return res.dat;
      })
      .catch((error) => {
        return dispatch({
          type: "Fetch_Error",
          data: false,
        });
      });
  };
export default loadCountry;
