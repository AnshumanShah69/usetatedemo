import React, { useState } from "react";

const MyFunction = () => {
  const [newCount, changedCount] = useState(0); //state 1 for inc of val
  const [newPrevCount, prevOldCount] = useState(0); ///here for prev val

  const incrementCounter = () => {
    prevOldCount(newCount); // Save the previous newCount
    changedCount(newCount + 1); // Update the newCount
  };

  return (
    <div>
      {/* here printing my old value */}
      <p>Previous Count: {newPrevCount}</p>
      {/* printing my new incremented val */}
      <p>Current Count: {newCount}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default MyFunction;
