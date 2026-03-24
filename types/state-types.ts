type ConnectType = {
  email: string;
  message: string;
  sendMessage: boolean;
  setEmail: (newemail: string) => void;
  setMessage: (newmessage: string) => void;
  setSendMessage: (newmessage: boolean) => void;
};

export default ConnectType;
