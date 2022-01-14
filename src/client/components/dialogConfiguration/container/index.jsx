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

  function isCheckedType(key) {
    return configuration.type === key;
  }

  const onChangeType = key => ev => {
    if (ev.target.checked) {
      setConfiguration({
        ...configuration,
        type: key,
      });
    }
  };

  const onChangeInsertionCell = index => ev => {
    const newInsertion = [...configuration.insertionCell];
    newInsertion[index] = parseInt(ev.target.value);

    setConfiguration({
      ...configuration,
      insertionCell: newInsertion,
    });
  };

  if (isMounting) {
    return 'Loading...';
  }

  if (!isLogged) {
    return 'You need to be logged to config your report';
  }

  return (
    <div className={'dialog_configuration'}>
      <div className={'dialog_configuration__insertion_cell'}>
        <label>
          <input
            value={configuration.insertionCell[0]}
            min={1}
            type="number"
            onChange={onChangeInsertionCell(0)}
          />
          {'row'}
        </label>

        <label>
          <input
            value={configuration.insertionCell[1]}
            min={1}
            type="number"
            onChange={onChangeInsertionCell(1)}
          />
          {'column'}
        </label>
      </div>

      <div className={'dialog_configuration__toggle'}>
        {REPORTS_TYPES.map(({ label, value }) => (
          <label>
            <input
              type="checkbox"
              onChange={onChangeType(value)}
              checked={isCheckedType(value)}
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
