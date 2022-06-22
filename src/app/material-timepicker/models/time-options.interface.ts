import { LocaleOptions } from 'luxon';

export interface TimeOptions extends LocaleOptions {
    format?: number;
    locale?: string | undefined;
    numberingSystem?: string | undefined;
}
