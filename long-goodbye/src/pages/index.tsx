import { EB_Garamond } from "next/font/google";
import React, { useMemo } from "react";
import Head from "next/head";
const eb_Garamond = EB_Garamond({ subsets: ["latin"] });

const HomePage: React.FC = () => {
  const greatWallLengthInPixels = 21196000 * 37.795275591;

  return (
    <>
      <Head>
        <title>Long goodbye</title>
        <meta property="og:title" content="Long goodbye" key="title" />
        <meta property="twitter:title" content="Long goodbye" />
        <meta name="theme-color" content="#000000" />
        <meta property="description" content="Until we meet again." />
        <meta property="og:description" content="Until we meet again" />
        <meta property="twitter:description" content="Until we meet again" />
        <meta property="og:url" content="https://work.tom.so/long-goodbye" />
        <meta property="og:image" content="og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="min-h-screen bg-black text-white md:h-[801557220px] relative">
        <main
          className={`flex min-h-screen flex-col text-left justify-between p-24 ${eb_Garamond.className}`}
        >
          <p className="text-2xl mb-[1320rem]">It is going to be a while</p>
          <p className="text-4xl mb-4">until we can meet again,</p>
          <p className="text-lg mb-[2500rem]">
            no longer in this life but in the next.
          </p>
          <p className="text-2xl mb-[1320rem]">
            Here I walk the bridge towards you,
          </p>
          <p className="text-3xl mb-[1000rem]">
            with the knowledge that you continue to watch over me.
          </p>
          <p className="text-xl mb-[3000rem]">
            I hope that you are doing better now.
          </p>
          <p className="text-2xl mb-[2800rem]">
            While I wish I could have gotten to know you better, you have
            continued to guide me through my own journey.
          </p>
          <p className="text-2xl mb-[4800rem]">
            There have been others that have gone after you too. People that I
            have deeply cared about.
          </p>
          <p className="text-lg mb-[4400rem]">Not much left to do but sing.</p>
          <p className="text-lg mb-[3800rem]">See you again soon.</p>
        </main>
      </div>
    </>
  );
};

export default HomePage;
