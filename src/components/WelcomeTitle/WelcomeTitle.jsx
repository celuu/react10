import { useState } from "react";

const WelcomeTitle = ({user, primary}) => {
    let statement = user ? `Welcome ${user}` : "Welcome"
    return (
      <>
        <div>
          {primary ? (
            <h1>{statement}</h1>
          ) : (
            <h2>{statement}</h2>
          )}
        </div>
      </>
    );

}

export default WelcomeTitle;