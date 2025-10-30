import { createContext, useState } from "react";

export const ChatVisibilityContext = createContext({});


export const ChatVisibility = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  return <ChatVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
    {children}
  </ChatVisibilityContext.Provider>;
}