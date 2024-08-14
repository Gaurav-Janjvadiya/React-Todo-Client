import axios from "axios";

const registerUser = (newUser) => {
  return axios
    .post("https://tasknode-api.onrender.com/signup", newUser)
    .then((res) => {
      console.log(res.data);
      return res.data; // Return the user data to be handled by the calling function
    })
    .catch((e) => {
      console.log(e);
      throw e; // Re-throw the error if you want to handle it upstream
    });
};

const LoginUser = async (newUser) => {
  try {
    const res = await axios.post("https://tasknode-api.onrender.com/login", newUser);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const Logout = () => {
  axios
    .get("https://tasknode-api.onrender.com/logout")
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};

export { registerUser, LoginUser, Logout };
