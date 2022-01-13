// Dependencies
import { useState, useEffect } from 'react';

// Hooks
import { useStorage, useUser } from '@Hooks';

export function StaticReport() {
  const userData = useUser();
  const [reports, setReports] = useStorage('NPAW_REPORTS__REPORTS', []);
  return <span>{JSON.stringify(userData)}</span>;
}
