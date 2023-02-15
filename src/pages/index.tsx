/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { Chat } from "../components/Chat";
import LayoutPage from "../components/Layout";

import { useSession } from "next-auth/react";
// import AccessDenied from "../components/AccessDenied";
import { api } from "../utils/api";
import { LoadingChatLine } from "../components/ChatLine";

export default function Home() {
  const session = useSession();
  // if (session.status == "unauthenticated") {
  //   stop()
  //   return <AccessDenied />;

  const data = api.example.getallmessage.useQuery();
 
  return (
    <>
      <Head>
        <title>Create T3 App</title>

        <meta
          name="description"
          content="GCB - AI Chatbot: Enhance your customer experience with our advanced AI-powered chatbot. Get instant and personalized responses to your queries 24/7. Boost your efficiency, reduce response time, and increase customer satisfaction with GCB's AI technology. Start improving your customer service today with GCB AI Chatbot."
        />
        <meta
          name="keywords"
          content="ChatGPT, OpenAI, nextjs, chatbot, friendly AI bot"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tl from-blue-300 to-cyan-200">
        

          <div className="container flex flex-col justify-center gap-12 px-6 py-12 ">
            <section className="mt-3 flex flex-col">
              <h1>OpenAI GPT-3 text model usage example</h1>
              <span className="text-zinc-600">
                In this example, a simple chat bot is implemented using Next.js,
                API Routes, and OpenAI API.
              </span>
            </section>

            <section className="flex flex-col gap-3">
              <h2>AI Chat Bot:</h2>
              <div className="lg:w-full">
                {!data.data ? <LoadingChatLine /> : <Chat {...data} />}
              </div>
            </section>
          </div>

        
        </main>
      </LayoutPage>
    </>
  );
}
