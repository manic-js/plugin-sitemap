# `@manicjs/sitemap`

Official Manic plugin for sitemap.xml generation.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Plugin docs: [manicjs.tech/docs/framework/plugins/sitemap](https://www.manicjs.tech/docs/framework/plugins/sitemap)

## Install

```bash
bun add @manicjs/sitemap
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { sitemap } from '@manicjs/sitemap';

export default defineConfig({
  plugins: [sitemap({ hostname: 'https://example.com' })],
});
```

## License

GPL-3.0
