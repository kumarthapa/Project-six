import React, { useContext, useState } from "react";
const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [input, setInput] = useState({
    title: "",
    text: "",
  });
  const [newinput, setNewinput] = useState([]);
  const onChangehandler = (name) => (e) => {
    setInput({
      ...input,
      [name]: e.target.value,
    });
  };
  const onclickhandler = (e) => {
    if (input.title == "" || input.text == "") {
      alert("Please fill all the fields!");
    } else {
      setNewinput([input, ...newinput]);
      setInput({
        title: "",
        text: "",
      });
    }
  };
  const onclearhandler = (e) => {
    setNewinput([]);
  };
  const value = {
    onChangehandler,
    onclickhandler,
    onclearhandler,
    newinput,
    input,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
