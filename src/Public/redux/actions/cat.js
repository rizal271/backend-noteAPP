import axios from "axios";

// let URL = "http://192.168.100.42:3343";
let URL = 'https://noteaja.herokuapp.com';

export const catALL = () => {
  return {
    type: "CAT_ALL",
    payload: axios.get(URL + "/cat")
  };
};
export const noteALL = () => {
    return {
      type: "NOTE_ALL",
      payload: axios.get(URL + "/note")
    };
  };

  export const addALL = (data) => {
      console.log('ini', data)
    return {
      type: "NOTE_ADD_ALL",
      payload: axios.post(URL + "/note/",data)
    };
  };