import React from "react";

function Home() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row p-4 justify-center items-center bg-red-600 ">
        <img src="https://bficnetwork.com/images/Mobile%20App%20Mockup%201.png" />
        <div className="space-y-4">
          <h1 className="text-5xl text-white font-bold">
            An Easy to Use Interface For Everyone
          </h1>
          <p className="text-2xl font-bold">
            The App has a very user friendly interface that enables anyone to
            join despite not having any technical knowledge.
          </p>
          <button className="rounded-full p-4 font-bold bg-white">
            DOWNLOAD ANDROID APPLICATION NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
