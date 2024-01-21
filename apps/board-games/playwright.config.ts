import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './e2e' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    cwd: workspaceRoot,
    reuseExistingServer: !process.env.CI,
  },
});
