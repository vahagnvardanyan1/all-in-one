import getRequestConfig from './request';
import { routing } from './routing';

describe('i18n Request Configuration', () => {
  it('should load locale messages for the default locale when an unsupported locale is provided', async () => {
    const config = await getRequestConfig({ requestLocale: 'unsupported' });
    expect(config.locale).toBe(routing.defaultLocale);
  });

  it('should correctly set the locale to dadada if provided', async () => {
    const config = await getRequestConfig({ requestLocale: 'dadada' });
    expect(config.locale).toBe('dadada');
    const messages = config.messages;
    expect(messages).toBeDefined();
  });
});