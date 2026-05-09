import { describe, expect, it } from 'bun:test';
import { sitemap } from '../src/index';

describe('@manicjs/sitemap', () => {
  it('creates sitemap plugin with expected name', () => {
    const plugin = sitemap({ hostname: 'https://example.com' });
    expect(plugin.name).toBe('sitemap');
  });
});
