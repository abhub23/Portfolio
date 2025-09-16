export type Email = {
  email: string;
  setEmail: (newemail: string) => void;
};

export type Message = {
  message: string;
  setMessage: (newmessage: string) => void;
};

export type SendMessage = {
  sendMessage: boolean;
  setSendMessage: (newmessage: boolean) => void;
};
