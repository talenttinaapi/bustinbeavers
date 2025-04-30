// Reusable game actions for Bustin Beavers Playwright tests

/**
 * Wait for the game canvas to be visible
 * @param {import('@playwright/test').Page} page
 */
export async function waitForGameCanvas(page) {
  await page.locator('canvas').waitFor({ state: 'visible', timeout: 60000 });
}

/**
 * Click a series of positions on the canvas
 * @param {import('@playwright/test').Page} page
 * @param {Array<{x: number, y: number}>} positions
 */
export async function clickCanvasPositions(page, positions) {
  for (const pos of positions) {
    await page.locator('canvas').click({ position: pos });
  }
}

/**
 * Interact with the info bar
 * @param {import('@playwright/test').Page} page
 */
export async function interactWithInfoBar(page) {
  const infoBar = page.locator('#titan-infobar-element-ce0d7198-8d75-4224-a925-94b839ab8151').getByRole('img');
  await infoBar.click({ timeout: 90000 });
  await infoBar.waitFor();
  await infoBar.click();
}

/**
 * Open and close the help dialog
 * @param {import('@playwright/test').Page} page
 */
export async function openAndCloseHelp(page) {
  await page.getByText('Help X').click();
  const frame = await page.locator('iframe[name^="titan-frame"]').contentFrame();
  await frame.locator('#close-button').click();
}
