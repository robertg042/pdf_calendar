import i18n from 'i18n';
import { LOCALE, PATHS, SUPPORTED_LOCALES } from './constants/config';

export function initI18n() {
	i18n.configure({
		locales: SUPPORTED_LOCALES,
		directory: PATHS.locales,
		objectNotation: true,
	});

	i18n.setLocale(LOCALE);
}
