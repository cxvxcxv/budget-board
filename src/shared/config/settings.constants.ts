import type { TCurrencyCode } from '@/entities';

export const SETTINGS_INITIAL_STATE = {
  currencyCode: 'USD',
};

export const CURRENCIES: {
  code: TCurrencyCode;
  label: string;
}[] = [
  { code: 'ARS', label: 'Argentine Peso (ARS)' },
  { code: 'AUD', label: 'Australian Dollar (AUD)' },
  { code: 'BRL', label: 'Brazilian Real (BRL)' },
  { code: 'GBP', label: 'British Pound (GBP)' },
  { code: 'CAD', label: 'Canadian Dollar (CAD)' },
  { code: 'CNY', label: 'Chinese Yuan (CNY)' },
  { code: 'CZK', label: 'Czech Koruna (CZK)' },
  { code: 'DKK', label: 'Danish Krone (DKK)' },
  { code: 'EUR', label: 'Euro (EUR)' },
  { code: 'HKD', label: 'Hong Kong Dollar (HKD)' },
  { code: 'HUF', label: 'Hungarian Forint (HUF)' },
  { code: 'INR', label: 'Indian Rupee (INR)' },
  { code: 'IDR', label: 'Indonesian Rupiah (IDR)' },
  { code: 'ILS', label: 'Israeli Shekel (ILS)' },
  { code: 'JPY', label: 'Japanese Yen (JPY)' },
  { code: 'KZT', label: 'Kazakhstani Tenge (KZT)' },
  { code: 'MYR', label: 'Malaysian Ringgit (MYR)' },
  { code: 'MXN', label: 'Mexican Peso (MXN)' },
  { code: 'NZD', label: 'New Zealand Dollar (NZD)' },
  { code: 'NOK', label: 'Norwegian Krone (NOK)' },
  { code: 'PHP', label: 'Philippine Peso (PHP)' },
  { code: 'PLN', label: 'Polish Zloty (PLN)' },
  { code: 'RUB', label: 'Russian Ruble (RUB)' },
  { code: 'SAR', label: 'Saudi Riyal (SAR)' },
  { code: 'SGD', label: 'Singapore Dollar (SGD)' },
  { code: 'ZAR', label: 'South African Rand (ZAR)' },
  { code: 'KRW', label: 'South Korean Won (KRW)' },
  { code: 'SEK', label: 'Swedish Krona (SEK)' },
  { code: 'CHF', label: 'Swiss Franc (CHF)' },
  { code: 'THB', label: 'Thai Baht (THB)' },
  { code: 'TRY', label: 'Turkish Lira (TRY)' },
  { code: 'UAH', label: 'Ukrainian Hryvnia (UAH)' },
  { code: 'AED', label: 'UAE Dirham (AED)' },
  { code: 'USD', label: 'US Dollar (USD)' },
  { code: 'VND', label: 'Vietnamese Dong (VND)' },
];
