import React, { useState } from "react";
import Modal from "react-modal";
import Localization from "../../assets/svg/sidebar/Localization";
 
const LanguageModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English")
 
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
        className="mx-4 mt-4 justify-center items-center border-2 focus:text-[#fff]  focus:border-[#fff] focus:scale-110  p-1 px-3 rounded-2xl text-sm  flex gap-2 hover:text-[#fff] hover:border-[#fff] hover:scale-110"
      >
        <Localization/>    
        {selectedLanguage}
      </button>
      <div className="flex flex-col justify-center items-center">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Language Modal"
          ariaHideApp={false}
          className=" bg-gray-900 p-8 rounded w-3/4 mx-auto my-auto "
          overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-100 "
        >
           <div className="text-white ">
          <h2 className="text-2xl mb-4 font-bold ">Select Your Language</h2>
          <div className="flex-col grid grid-cols-4 overflow-y-auto max-h-96">                                
 
          <button onClick={() => changeLanguageSelect("English")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">English</div>
            <div className="text-gray-500">English</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Afrikaans")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Afrikaans</div>
            <div className="text-gray-500">Afrikaans</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("አማርኛ")} className="text-left pl-8 text-xl h-24 w-100 hover-bg-slate-700">
            <div className="font-bold">አማርኛ</div>
            <div className="text-gray-500">Amharic</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("العربية")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">العربية</div>
            <div className="text-gray-500">Arabic</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("مصري عربي")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">عربي مصري</div>
            <div className="text-gray-500">Arabic (Egypt)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("مغربي العَرَبِيَّة")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">العَرَبِيَّة مغربي</div>
            <div className="text-gray-500">Arabic (Morocco)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Arabic (العربيةالسعودية)")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">العربية السعودية</div>
            <div className="text-gray-500">Arabic (Saudi Arabia)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Azərbaycanca")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Azərbaycanca</div>
            <div className="text-gray-500">Azerbaijani</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Български")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Български</div>
            <div className="text-gray-500">Bulgarian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("भोजपुरी")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">भोजपुरी</div>
            <div className="text-gray-500">Bhojpuri</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("বাংলা")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">বাংলা</div>
            <div className="text-gray-500">Bengali</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Bosanski")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Bosanski</div>
            <div className="text-gray-500">Bosnian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Català")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Català</div>
            <div className="text-gray-500">Catalan</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Čeština")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Čeština</div>
            <div className="text-gray-500">Czech</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Dansk")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Dansk</div>
            <div className="text-gray-500">Danish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Deutsch")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Deutsch</div>
            <div className="text-gray-500">German</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Eλληνικά")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Eλληνικά</div>
            <div className="text-gray-500">Greek</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("English")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">English</div>
            <div className="text-gray-500">United Kingdom</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Español de España")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Español de España</div>
            <div className="text-gray-500">European Spanish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Español de Latinoamérica")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Español de Latinoamérica</div>
            <div className="text-gray-500">Latin American Spanish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Español (Argentina)")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Español (Argentina)</div>
            <div className="text-gray-500">Spanish (Argentina)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Español (México)")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Español (México)</div>
            <div className="text-gray-500">Spanish (Mexico)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Eesti")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Eesti</div>
            <div className="text-gray-500">Estonian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Euskara")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Euskara</div>
            <div className="text-gray-500">Basque</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("فارسی")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">فارسی</div>
            <div className="text-gray-500">Persian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Suomeksi")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Suomeksi</div>
            <div className="text-gray-500">Finnish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Filipino")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Filipino</div>
            <div className="text-gray-500">Filipino</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Français")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Français</div>
            <div className="text-gray-500">French</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Français Canadien")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Français Canadien</div>
            <div className="text-gray-500">Canadian French</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Galego")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Galego</div>
            <div className="text-gray-500">Galician</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("ગુજરાતી")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">ગુજરાતી</div>
            <div className="text-gray-500">Gujarati</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("עברית")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">עברית</div>
            <div className="text-gray-500">Hebrew</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("हिन्दी")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">हिन्दी</div>
            <div className="text-gray-500">Hindi</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Hrvatski")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Hrvatski</div>
            <div className="text-gray-500">Croatian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Magyar")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Magyar</div>
            <div className="text-gray-500">Hungarian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Bahasa Indonesia")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Bahasa Indonesia</div>
            <div className="text-gray-500">Indonesian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Íslenska")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Íslenska</div>
            <div className="text-gray-500">Icelandic</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Italiano")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Italiano</div>
            <div className="text-gray-500">Italian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("日本語")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">日本語</div>
            <div className="text-gray-500">Japanese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("ಕನ್ನಡ")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">ಕನ್ನಡ</div>
            <div className="text-gray-500">Kannada</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("한국어")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">한국어</div>
            <div className="text-gray-500">Korean</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Lietuvių")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Lietuvių</div>
            <div className="text-gray-500">Lithuanian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Latviešu")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Latviešu</div>
            <div className="text-gray-500">Latvian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Македонски")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Македонски</div>
            <div className="text-gray-500">Macedonian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("മലയാളം")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">മലയാളം</div>
            <div className="text-gray-500">Malayalam</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("मराठी")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">मराठी</div>
            <div className="text-gray-500">Marathi</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Melayu")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Melayu</div>
            <div className="text-gray-500">Malay</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Norsk")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Norsk</div>
            <div className="text-gray-500">Norwegian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("नेपाली")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">नेपाली</div>
            <div className="text-gray-500">Nepali</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Nederlands")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Nederlands</div>
            <div className="text-gray-500">Dutch</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("ଓଡ଼ିଆ")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">ଓଡ଼ିଆ</div>
            <div className="text-gray-500">Odia</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("ਪੰਜਾਬੀ")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">ਪੰਜਾਬੀ</div>
            <div className="text-gray-500">Punjabi</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("پنجابی")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">پنجابی</div>
            <div className="text-gray-500">Punjabi (Naskh)</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Polski")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Polski</div>
            <div className="text-gray-500">Polish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Português do Brasil")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Português do Brasil</div>
            <div className="text-gray-500">Brazilian Portuguese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Português")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Português</div>
            <div className="text-gray-500">European Portuguese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Română")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Română</div>
            <div className="text-gray-500">Romanian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Русский")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Русский</div>
            <div className="text-gray-500">Russian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Slovenčina")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Slovenčina</div>
            <div className="text-gray-500">Slovak</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Slovenski")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Slovenski</div>
            <div className="text-gray-500">Slovenian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Srpski")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Srpski</div>
            <div className="text-gray-500">Serbian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Svenska")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Svenska</div>
            <div className="text-gray-500">Swedish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Kiswahili")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Kiswahili</div>
            <div className="text-gray-500">Swahili</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("தமிழ்")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">தமிழ்</div>
            <div className="text-gray-500">Tamil</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("తెలుగు")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">తెలుగు</div>
            <div className="text-gray-500">Telugu</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("ภาษาไทย")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">ภาษาไทย</div>
            <div className="text-gray-500">Thai</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Türkçe")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Türkçe</div>
            <div className="text-gray-500">Turkish</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Українська")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Українська</div>
            <div className="text-gray-500">Ukrainian</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("اردو")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">اردو</div>
            <div className="text-gray-500">Urdu</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("Tiếng Việt")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">Tiếng Việt</div>
            <div className="text-gray-500">Vietnamese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("简体中文")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">简体中文</div>
            <div className="text-gray-500">Simplified Chinese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("繁體中文 (香港)")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">繁體中文 (香港)</div>
            <div className="text-gray-500">Chinese (Traditional) Hong Kong</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("中文")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">中文</div>
            <div className="text-gray-500">Traditional Chinese</div>
          </button>
 
          <button onClick={() => changeLanguageSelect("IsiZulu")} className="text-left pl-8 text-xl h-24 w-100 hover:bg-slate-700">
            <div className="font-bold">IsiZulu</div>
            <div className="text-gray-500">Zulu</div>
          </button>
 
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