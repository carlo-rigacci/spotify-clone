export default function Notification({ header, content, buttonText, onClick }) {
  return (
    <div className='w-full mt-4 mb-3 p-4 rounded-xl text-white bg-[rgba(36,36,36,255)] flex justify-between flex-col items-start gap-3'>
      <div className='text-l font-bold'>{header}</div>
      <div className='text-sm'>{content}</div>
      <button
        className='text-black text-sm font-bold bg-white mt-2 p-2 rounded-full hover:scale-110'
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
