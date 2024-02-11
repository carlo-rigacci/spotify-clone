import React, { useState } from 'react';
import LanguageSVG from '../../../../assets/svg/sidebar/Localization';
import LanguageModal from './LanguageModal';

const Language = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const changeLanguageSelect = (language) => {
    setSelectedLanguage(language);

    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className='mx-4 mt-4 justify-center items-center border-2 focus:text-[#fff]  focus:border-[#fff] focus:scale-110  p-1 px-3 rounded-2xl text-sm  flex gap-2 hover:text-[#fff] hover:border-[#fff] hover:scale-110'
      >
        <LanguageSVG />
        {selectedLanguage}
      </button>
      <LanguageModal
        changeLanguageSelect={changeLanguageSelect}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Language;
