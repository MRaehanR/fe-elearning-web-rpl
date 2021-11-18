import React from "react";

const Home = (props) => {
  if (props.user) {
    return <h2>You are Logged in</h2>;
  }

  return (
    <div>
      <h2>You are not logged in</h2>
    </div>
  );
};

export default Home;
