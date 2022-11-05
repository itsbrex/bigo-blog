import { XIcon } from '@heroicons/react/outline'

const SuccessMessage = ({ handleReset }) => (
  <p className="flex p-3 text-lg">
    <span>You're subscribed!</span>
    <span className="flex self-center mr-1">
      <button
        onClick={() => handleReset()}
        className="w-4 h-4 mt-auto ml-1 text-white transition-colors duration-200 rounded-full bg-success hover:bg-red-500"
      >
        <XIcon className="w-2 h-2 mx-auto" />
      </button>
    </span>
  </p>
)

export default SuccessMessage
