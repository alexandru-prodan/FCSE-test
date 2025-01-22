import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <SelectorContainer>
      <Selector
        id="language-selector"
        onChange={handleChangeLanguage}
        value={i18n.language} // Set the current language as selected
      >
        <option value="en">English</option>
        <option value="de">Deutschland</option>
        <option value="fr">Français</option>
      </Selector>
    </SelectorContainer>
  );
};

export default LanguageSelector;

const SelectorContainer = styled.div`
  position: absolute;
  width: 150px;
  right: 0;
  top: 10px;

  display: flex;
`;

const Selector = styled.select`
  padding: 10px;
`;
