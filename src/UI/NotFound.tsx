import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center mt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl">{t("NotFound")}</p>
      </div>
    </div>
  );
};

export default NotFound;