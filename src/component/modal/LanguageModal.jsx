import React, { useState } from "react";
import Modal from "react-modal";

const LanguageModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="mx-4 mt-4 justify-center items-center border-2 focus:text-[#fff]  focus:border-[#fff] focus:scale-110  p-1 px-3 rounded-2xl text-sm  flex gap-2 hover:text-[#fff] hover:border-[#fff] hover:scale-110"
      >
        <svg className=" w-[16px]" viewBox="0 0 16 16">
          <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
        </svg>
        English
      </button>
      <div className="h-screen flex flex-col justify-center items-center">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Language Modal"
          ariaHideApp={false}
          className=" bg-slate-900 p-8 rounded  w-96 mx-auto my-12 "
          overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-100 "
        >
           <div className="text-white">
          <h2 className="text-2xl mb-4 ">Select Your Language</h2>
          <div>
            italiano
          </div>
          <button
            onClick={closeModal}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
            </div> 
        </Modal>
      </div>
    </>
  );
};

export default LanguageModal;
