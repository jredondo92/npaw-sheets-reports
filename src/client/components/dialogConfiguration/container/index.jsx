// Dependencies
import { useState, useEffect } from 'react';

// Utils
import { useUser } from '@Hooks';

// Pages
import { DynamicReport, StaticReport } from '../pages';

// Constants
const REPORTS_TYPES = [
  { label: 'Static Report', value: 'static' },
  { label: 'Dynamic Report', value: 'dynamic' },
];

export function ConfigurationDialog() {
  const [type, setType] = useState('static');
  const { isMounting, user } = useUser();
  function isChecked(key) {
    return type === key;
  }

  const onChange = key => ev => {
    if (ev.target.checked) {
      setType(key);
    }
  };

  if (isMounting) {
    return 'Loading...';
  }

  if (!isMounting && !user) {
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
      {type === 'static' ? <StaticReport /> : <DynamicReport />}
    </div>
  );
}
