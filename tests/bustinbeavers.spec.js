import { test, expect } from '@playwright/test';
test.setTimeout(90000);

let browserContext;
let page; // Declare a single page to be reused

test.describe('Bustin Beavers Game Tests', () => {
  test.beforeAll(async ({ browser }) => {
    // Create a single browser context and page to be shared across all tests
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
  });

  test.afterAll(async () => {
    // Close the shared page and browser context after all tests
    await page.close();
    await browserContext.close();
  });

  test('Navigate to Game', async () => {
    await page.goto('https://mobile-app1-gtp178.installprogram.eu/htmlGames/4.25.0/launch/bustinBeavers_NorthernLightsGaming_1_0_8_20/mgs/bustinBeavers?displayName=Bustin%27+Beavers%e2%84%a2&moduleId=101941&clientId=40300&gamePath=/mgs/bustinBeavers&clientTypeId=40&gameId=bustinBeavers&languageCode=en&productId=5007&market=dotcom&brand=islandparadise&loginType=InterimUPE&returnUrl=https://mobile-app1-gtp178.installprogram.eu/lobby/en/IslandParadise/games/&routerEndPoints=%C2%A4cyFormat=&isPracticePlay=False&username=talent178&password=test1234$&formFactor=mobile');
  });

  test('Perform Initial Clicks', async () => {
    await page.locator('canvas').waitFor({ state: 'visible', timeout: 60000 });
    await page.locator('canvas').click({ position: { x: 702, y: 619 } });
    await page.locator('canvas').click({ position: { x: 1179, y: 304 } });
    await page.locator('canvas').click({ position: { x: 1172, y: 307 } });
    await page.locator('canvas').click({ position: { x: 1192, y: 179 } });
    await page.locator('canvas').click({ position: { x: 416, y: 164 } });
  });

  test('Perform Additional Clicks', async () => {
    await page.locator('canvas').click({ position: { x: 1178, y: 311 } });
    await page.locator('canvas').click({ position: { x: 1213, y: 463 } });
    await page.locator('canvas').click({ position: { x: 334, y: 543 } });
    await page.locator('canvas').click({ position: { x: 1219, y: 99 } });
    await page.locator('canvas').click({ position: { x: 1217, y: 97 } });
    await page.locator('canvas').click({ position: { x: 1222, y: 100 } });
  });

  test('Interact with Info Bar', async () => {
    await page.locator('#titan-infobar-element-ce0d7198-8d75-4224-a925-94b839ab8151').getByRole('img').click({ timeout: 90000 });
    await page.locator('#titan-infobar-element-ce0d7198-8d75-4224-a925-94b839ab8151').getByRole('img').waitFor();
    await page.locator('#titan-infobar-element-ce0d7198-8d75-4224-a925-94b839ab8151').getByRole('img').click();
  });

  test('Open and Close Help', async () => {
    await page.getByText('Help X').click();
    await page.locator('iframe[name="titan-framea39c39120fce4fc2a3466dc0fe26a17c-iframe"]').contentFrame().locator('#close-button').click();
  });

  test('Perform Final Clicks', async () => {
    await page.locator('canvas').click({ position: { x: 1175, y: 307 } });
    await page.locator('canvas').click({ position: { x: 1188, y: 310 } });
    await page.locator('canvas').click({ position: { x: 1179, y: 307 } });
    await page.locator('canvas').click({ position: { x: 1170, y: 303 } });
  });
});