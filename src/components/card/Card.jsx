// Disable prop-types validation for this component (eslint-disable directive)
/* eslint-disable react/prop-types */

function Card({ id, title, description, handleClick, type, timeStamp }) {
  // Define content based on the card type (pending, in progress, or completed)
  let content =
    type === 'completed' ? (
      // Completed card: display a tick image
      <img src="./tick.png " className="h-4 w-4 bg-green-100" />
    ) : (
      // Pending or in-progress card: display a button
      <button
        onClick={() => {
          handleClick(id)
        }}
        className="font-sans bg-green-300 rounded-md p-2 hover:bg-sky-300"
      >
        {type == 'pending' ? 'Start' : 'Complete'}
      </button>
    )
  // Define background color based on the card type
  let cardColor = type !== 'inProgress' ? 'bg-green-100' : 'bg-[#7469B6]'
  return (
    <div
      className={`card mt-4 p-2 h-auto text-wrap flex flex-col gap-4  ${cardColor} rounded-md w-full`}
    >
      <div className="flex flex-row justify-between ">
        <h2 className="text-2xl break-words break-all font-sans">{title}</h2>
        {content}
      </div>
      <div className="flex flex-row justify-between ">
        <p className="break-words break-all font-sans">{description}</p>
        {timeStamp && <p className="text-right">{timeStamp}</p>}
      </div>
    </div>
  )
}

export default Card
