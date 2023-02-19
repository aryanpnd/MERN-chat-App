
import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const history = useHistory();
  const [user, setUser] = useState();
  const [searchUsersIndex, setsearchUsersIndex] = useState()
  const [selectedChats, setSelectedChats] = useState()
  const [chats, setChats] = useState([])

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    
  //   const navigate = async () => {
  //     if (!userInfo) {
  //         history.push('/signup');
  //     }
  //  }
  //  navigate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        searchUsersIndex,
        setsearchUsersIndex,
        selectedChats,
        setSelectedChats,
        chats,
        setChats 
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;