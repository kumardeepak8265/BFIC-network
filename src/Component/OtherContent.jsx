import React from "react";

function OtherContent() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items center sm:mx-20 m-4">
        <div className="sm:w-1/2">
          <img src="https://bficnetwork.com/images/Mobile%20App%20Mining%20Off%20Mockup%201.png" />
        </div>
        <div className="flex justify-center sm:w-1/2 space-y-4 flex-col wrap">
          <div>
            <h1 className="text-4xl text-bold text-red-500">Stake and Mine</h1>
            <span className="text-4xl text-bold text-red-500">
              BFIC Every Day
            </span>
          </div>
          <p className="text-2xl">
            Login to your BFIC Network app every day and start stake-mining
            session with ease.
          </p>
          <p className="text-2xl">
            Regular logins result in regular rewards and higher BFIC yield. The
            App will show the time remaining in session expiry so you may keep
            track of time & utilize maximum yield time. Tap the “Power” button
            and start earning BFIC coins!
          </p>
        </div>
      </div>

      <div className="  flex flex-col sm:flex-row-reverse justify-center items center m-4 sm:mx-20">
        <div className="sm:w-1/2">
          <img src="https://bficnetwork.com/images/Mobile%20App%20Mining%20Reward%20Mockup%201.png" />
        </div>
        <div className="flex flex-col justify-center sm:w-1/2 space-y-4  wrap">
          <div>
            <h1 className="text-4xl text-bold text-red-500">
              Obtain Statements
            </h1>
            <span className="text-4xl text-bold text-red-500">
              for your rewards
            </span>
          </div>
          <p className="text-2xl">
            The BFIC Network App keeps you informed and updated about your
            rewards at all times.
          </p>
          <p className="text-2xl">
            You can easily maintain a check and balance over your staking and
            reward activites. The statements generated can be easily downloaded
            with a sinlge tap on the Download PDF button.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items center m-4 sm:mx-20">
        <div className="sm:w-1/2">
          <img src="https://bficnetwork.com/images/Mobile%20App%20Community%20Chat%20Mockup%201.png" />
        </div>
        <div className="flex justify-center sm:w-1/2 space-y-4 flex-col wrap">
          <div>
            <h1 className="text-4xl text-bold text-red-500">Chat with your</h1>
            <span className="text-4xl text-bold text-red-500">
              team members
            </span>
          </div>
          <p className="text-2xl">
            Invite members and build teams to earn team rewards for mining BFIC.
          </p>
          <p className="text-2xl">
            Use the Team Chat feature to stay connected with your team members
            at all times to motivate and encourage them. You can interact with
            any team member who is inactive and ask them to be active and
            contribute towards team rewards.
          </p>
        </div>
      </div>

      <div className="flex mb-8 flex-col-reverse sm:flex-row justify-center items center m-4 sm:mx-20">
        <div className="flex justify-center sm:w-1/2 space-y-4 flex-col wrap">
          <div>
            <h1 className="text-4xl text-bold text-red-500">Access news &</h1>
            <span className="text-4xl text-bold text-red-500">
              media portal
            </span>
          </div>
          <p className="text-2xl">
            Keep yourself updated regarding the latest news and content for BFIC
            Network & its ecosystem.
          </p>
          <p className="text-2xl">
            The News & Media portal comprises of all the latest videos, blog
            posts and social media posts regarding the Network. This helps you
            to learn more about updated features or relevant projects of the
            ecosystem.
          </p>
        </div>
        <div className="sm:w-1/2">
          <img src="https://bficnetwork.com/images/Mobile%20App%20Media%20Portal%20Mockup%201.png" />
        </div>
      </div>
    </div>
  );
}

export default OtherContent;
