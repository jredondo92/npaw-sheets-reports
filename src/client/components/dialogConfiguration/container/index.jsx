// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { useUser, useConfiguration } from '@Hooks';

// Pages
import { DynamicReport, StaticReport } from '../pages';

// Constants
import { REPORTS_TYPES } from '@Constants';

export function ConfigurationDialog() {
  const { isMounting: isMountingUser, user, isLogged } = useUser();
  const {
    configuration,
    setConfiguration,
    isLoading: isLoadingConfig,
    isMounting: isMountingConfig,
  } = useConfiguration();
  const isMounting = isMountingUser || isMountingConfig;

  function isChecked(key) {
    return configuration.type === key;
  }

  const onChange = key => ev => {
    if (ev.target.checked) {
      setConfiguration({
        ...configuration,
        type: key,
      });
    }
  };

  if (isMounting) {
    return 'Loading...';
  }

  if (!isLogged) {
    return 'You need to be logged to config your report';
  }

  return (
    <div className={'dialog_configuration'}>
      <div className={'dialog_configuration__toggle'}>
        {REPORTS_TYPES.map(({ label, value }) => (
          <label>
            <input
              type="checkbox"
              onChange={onChange(value)}
              checked={isChecked(value)}
            />
            {label}
          </label>
        ))}
      </div>

      {isLoadingConfig && 'Loading...'}

      {configuration.type === 'static' ? <StaticReport /> : <DynamicReport />}
    </div>
  );
}
