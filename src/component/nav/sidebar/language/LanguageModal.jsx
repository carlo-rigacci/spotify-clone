import lang from '../../../../assets/lang.json';
import Modal from 'react-modal';

export default function LanguageModal({
  changeLanguageSelect,
  modalIsOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Language Modal'
      ariaHideApp={false}
      className=' bg-gray-900 p-8 rounded w-3/4 mx-auto my-auto '
      overlayClassName='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-100 '
    >
      <div className='text-white '>
        <h2 className='text-2xl mb-4 font-bold '>Select Your Language</h2>
        <div className='flex-col grid grid-cols-4 overflow-y-auto max-h-96'>
          {lang.map((button, index) => (
            <button
              onClick={() => changeLanguageSelect(button.lang)}
              className='text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700'
              key={button}
            >
              <div className='font-bold'>{button.lang}</div>
              <div className='text-gray-500'>{button.english}</div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
