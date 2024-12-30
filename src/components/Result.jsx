import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom';
const Result = forwardRef(({ targetTime, remainingTime }, ref) => {
  const dialog = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      }
    };
  });

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
  createPortal(
    <dialog ref={dialog} className='result-modal'>
      <h2>You {userLost ? 'lost' : 'won'}</h2>
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped with <strong>{formattedRemainingTime} seconds left</strong></p>
      {!userLost && <p>You scored {score} points!</p>}
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("result")
  )
  );
});

export default Result;