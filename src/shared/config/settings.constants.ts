import type { TCurrencyCode } from '@/entities';

export const SETTINGS_INITIAL_STATE = {
  currencyCode: 'USD',
};

export const CURRENCIES: {
  code: TCurrencyCode;
  label: string;
}[] = [
  { code: 'USD', label: 'US Dollar (USD)' },
  { code: 'EUR', label: 'Euro (EUR)' },
  { code: 'GBP', label: 'British Pound (GBP)' },
  { code: 'KZT', label: 'Kazakhstani Tenge (KZT)' },
  { code: 'RUB', label: 'Russian Ruble (RUB)' },
  { code: 'UAH', label: 'Ukrainian Hryvnia (UAH)' },
  { code: 'JPY', label: 'Japanese Yen (JPY)' },
  { code: 'CNY', label: 'Chinese Yuan (CNY)' },
  { code: 'KRW', label: 'South Korean Won (KRW)' },
  { code: 'INR', label: 'Indian Rupee (INR)' },
  { code: 'TRY', label: 'Turkish Lira (TRY)' },
  { code: 'PLN', label: 'Polish Zloty (PLN)' },
  { code: 'CZK', label: 'Czech Koruna (CZK)' },
  { code: 'HUF', label: 'Hungarian Forint (HUF)' },
  { code: 'CHF', label: 'Swiss Franc (CHF)' },
  { code: 'SEK', label: 'Swedish Krona (SEK)' },
  { code: 'NOK', label: 'Norwegian Krone (NOK)' },
  { code: 'DKK', label: 'Danish Krone (DKK)' },
  { code: 'AUD', label: 'Australian Dollar (AUD)' },
  { code: 'CAD', label: 'Canadian Dollar (CAD)' },
  { code: 'NZD', label: 'New Zealand Dollar (NZD)' },
  { code: 'SGD', label: 'Singapore Dollar (SGD)' },
  { code: 'HKD', label: 'Hong Kong Dollar (HKD)' },
  { code: 'AED', label: 'UAE Dirham (AED)' },
  { code: 'SAR', label: 'Saudi Riyal (SAR)' },
  { code: 'ILS', label: 'Israeli Shekel (ILS)' },
  { code: 'BRL', label: 'Brazilian Real (BRL)' },
  { code: 'MXN', label: 'Mexican Peso (MXN)' },
  { code: 'ARS', label: 'Argentine Peso (ARS)' },
  { code: 'ZAR', label: 'South African Rand (ZAR)' },
  { code: 'THB', label: 'Thai Baht (THB)' },
  { code: 'MYR', label: 'Malaysian Ringgit (MYR)' },
  { code: 'IDR', label: 'Indonesian Rupiah (IDR)' },
  { code: 'PHP', label: 'Philippine Peso (PHP)' },
  { code: 'VND', label: 'Vietnamese Dong (VND)' },
];
