'use strict'

export const METRIC_OPERATION_GREATER_OR_EQUAL = {
  label: 'Greater or equal than (>=)',
  value: 'gte',
  shortLabel: '>='
}

export const METRIC_OPERATION_GREATER = {
  label: 'Greater than (>)',
  value: 'gt',
  shortLabel: '>'
}

export const METRIC_OPERATION_BETWEEN = {
  label: 'Between (> && <)',
  value: 'bt',
  shortLabel: '> && <'
}

export const METRIC_OPERATION_LOWER_OR_EQUAL = {
  label: 'Lower or equal than (<=)',
  value: 'lte',
  shortLabel: '<='
}

export const METRIC_OPERATION_LOWER = {
  label: 'Lower than (<)',
  value: 'lt',
  shortLabel: '<'
}

export const METRIC_OPERATION_EQUAL = {
  label: 'Equal to (=)',
  value: 'eq',
  shortLabel: '='
}

export const METRIC_OPERATIONS = [
  METRIC_OPERATION_GREATER_OR_EQUAL,
  METRIC_OPERATION_GREATER,
  METRIC_OPERATION_BETWEEN,
  METRIC_OPERATION_LOWER_OR_EQUAL,
  METRIC_OPERATION_LOWER,
  METRIC_OPERATION_EQUAL
]
