import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomMessage,getRandomName } from "../utils/helper";

const LiveChat = () => {


    const dispatch = useDispatch();
    const chatmsg = useSelector((store) => store.chat.messages);

    const [LiveMsg,setLiveMsg]=useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(
                addMessage({
                    name: getRandomName(),
                    message: getRandomMessage(),
                })
            );
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full space-y-3">

            <div className="border border-gray-300 rounded-xl h-[500px] p-3 shadow-lg bg-white flex flex-col">
                <div className="flex-1 overflow-y-auto pr-2 flex flex-col-reverse">
                    {chatmsg.map((c, i) => (
                        <ChatMessage name={c.name} message={c.message} key={i} />
                    ))}
                </div>
            </div>

            <form className="w-full flex items-center gap-3 border border-gray-300 rounded-xl p-3 bg-white shadow-md"
            
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name:"Ritesh",
                    message:LiveMsg
                }));
                setLiveMsg("");
            }}>

                <input
                  type="text"
                  placeholder="Type your message..."
                  value={LiveMsg}
                  onChange={(e)=>setLiveMsg(e.target.value)}
                  className="
                    flex-1 px-4 py-2 text-sm border border-gray-300 
                    rounded-lg focus:outline-none focus:ring-2 
                    focus:ring-green-400 transition
                  "
                />

                <button
                  className="
                    bg-green-500 hover:bg-green-600 active:bg-green-700 
                    text-white font-semibold px-5 py-2 rounded-lg 
                    shadow-md transition-all
                  "
                >
                  Send
                </button>
            </form>

        </div>
    );
};

export default LiveChat;
