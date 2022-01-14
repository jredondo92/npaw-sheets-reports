// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { useUser, useConfiguration, useSheets } from '@Hooks';

// Pages
import { DynamicReport, StaticReport } from '../pages';

// Constants
import { REPORTS_TYPES, INJECTION_CELL } from '@Constants';

export function ConfigurationDialog() {
  const { isMounting: isMountingSheets, sheets, activeSheet } = useSheets();
  const { isMounting: isMountingUser, user, isLogged } = useUser();
  const {
    configuration,
    setConfiguration,
    isLoading: isLoadingConfig,
    isMounting: isMountingConfig,
  } = useConfiguration();
  const isMounting = isMountingUser || isMountingConfig || isMountingSheets;

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

  function onChangeSheet(ev) {
    setConfiguration({
      ...configuration,
      sheet: ev.target.value,
    });
  }

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
      <div className={'dialog_configuration__sheet'}>
        <select
          value={configuration.sheet}
          onChange={onChangeSheet}
          name={'Sheet'}
        >
          {sheets.map(sheet => (
            <option value={sheet} selected={sheet === configuration.sheet}>
              {sheet}
            </option>
          ))}
        </select>
      </div>

      <div className={'dialog_configuration__insertion_cell'}>
        {INJECTION_CELL.map(({ label, index }) => (
          <label key={label}>
            <input
              value={configuration.insertionCell[index]}
              min={1}
              type="number"
              onChange={onChangeInsertionCell(index)}
            />
            {label}
          </label>
        ))}
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
      {JSON.stringify(sheets)}

      {configuration.type === 'static' ? <StaticReport /> : <DynamicReport />}
    </div>
  );
}
