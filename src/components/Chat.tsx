/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useState } from "react";
import { Button } from "./Button";
import {  ChatLine, LoadingChatLine } from "./ChatLine";
import { api } from "../utils/api";

import { useSession } from "next-auth/react";
// default first message to display in UI (not necessary to define the prompt)

interface Mesage {
  message: string;
  userId: string;
}
const InputMessage = ({ input, setInput, sendMessage }: any) => (
  <div className="clear-both mt-6 flex">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage(input);
          setInput("");
        }
      }}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input);
        setInput("");
      }}
    >
      Say
    </Button>
  </div>
);

export function Chat(data: any) {

  const { data: sessionData } = useSession();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const mutation = api.example.createM.useMutation();
  const mutation_bot = api.example.createBotM.useMutation();
  
  const sendMessage = async (message: string) => {
    setLoading(true);

    data.data?.data.push({ message: message, userId: sessionData?.user?.id });
  
    mutation.mutateAsync({
      message: message,
    });


    const last10messages =   data.data?.data?.slice(-20);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: last10messages,
      }),
    });
    const data2 = await response.json();
    mutation_bot.mutateAsync({
      message:data2.text.trim(),
      userId: "bot",
      usersId:sessionData?.user?.id as string
    });
    // strip out white spaces from the bot message
    const botNewMessage = data2.text.trim();

    data.data?.data.push({ message: botNewMessage, userId: "bot" });
    setLoading(false);
  };

  return (
    <div className="rounded-2xl border-zinc-100  lg:border lg:p-6">
      {data.data?.data.map(({ message, id, userId }: any) => (
        <div key={id} className="text-xl text-black">
          <div
            className={
              userId != "bot"
                ? "float-right clear-both"
                : "float-left clear-both"
            }
          >
            <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
              <div className="flex space-x-3">
                <div className="flex-1 gap-4">
                  <p className="font-large text-xxl text-gray-900">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    {userId == "bot" ? (
                      <span className="hover:underline">Ai</span>
                    ) : (
                      <a href="/profile" className="hover:underline">
                        {sessionData && sessionData.user?.name}
                      </a>
                    )}
                  </p>
                  <p
                    className={
    
                      userId == "bot" ? "font- font-semibold " : "text-gray-400"
                    }
                  >
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {loading && <LoadingChatLine name="Ai" />}

      {data.data?.data?.length < 2 && (
        <span className="clear-both mx-auto flex flex-grow text-gray-600">
          Type a message to start the conversation
        </span>
      )}
      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  );
}
