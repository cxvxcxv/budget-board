import type { TDateRangeType } from './dashboard.types';

export interface IUserSettingsState {
  currencyCode: string;
  defaultDateRangeType: TDateRangeType;
}

export type TCurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'KZT'
  | 'RUB'
  | 'UAH'
  | 'JPY'
  | 'CNY'
  | 'KRW'
  | 'INR'
  | 'TRY'
  | 'PLN'
  | 'CZK'
  | 'HUF'
  | 'CHF'
  | 'SEK'
  | 'NOK'
  | 'DKK'
  | 'AUD'
  | 'CAD'
  | 'NZD'
  | 'SGD'
  | 'HKD'
  | 'AED'
  | 'SAR'
  | 'ILS'
  | 'BRL'
  | 'MXN'
  | 'ARS'
  | 'ZAR'
  | 'THB'
  | 'MYR'
  | 'IDR'
  | 'PHP'
  | 'VND';
