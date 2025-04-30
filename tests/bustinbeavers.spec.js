import { test, expect } from '@playwright/test';
import {
  waitForGameCanvas,
  clickCanvasPositions,
  interactWithInfoBar,
  openAndCloseHelp
} from './gameActions.js';

test.setTimeout(90000);

test.describe('Bustin Beavers Game Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://mobile-app1-gtp178.installprogram.eu/htmlGames/4.25.0/launch/bustinBeavers_NorthernLightsGaming_1_0_8_20/mgs/bustinBeavers?displayName=Bustin%27+Beavers%e2%84%a2&moduleId=101941&clientId=40300&gamePath=/mgs/bustinBeavers&clientTypeId=40&gameId=bustinBeavers&languageCode=en&productId=5007&market=dotcom&brand=islandparadise&loginType=InterimUPE&returnUrl=https://mobile-app1-gtp178.installprogram.eu/lobby/en/IslandParadise/games/&routerEndPoints=%C2%A4cyFormat=&isPracticePlay=False&username=talent178&password=test1234$&formFactor=mobile');
  });

  test('Perform Initial Clicks', async ({ page }) => {
    await waitForGameCanvas(page);
    await clickCanvasPositions(page, [
      { x: 702, y: 619 },
      { x: 1179, y: 304 },
      { x: 1172, y: 307 },
      { x: 1192, y: 179 },
      { x: 416, y: 164 }
    ]);
  });

  test('Perform Additional Clicks', async ({ page }) => {
    await clickCanvasPositions(page, [
      { x: 1178, y: 311 },
      { x: 1213, y: 463 },
      { x: 334, y: 543 },
      { x: 1219, y: 99 },
      { x: 1217, y: 97 },
      { x: 1222, y: 100 }
    ]);
  });

  test('Interact with Info Bar', async ({ page }) => {
    await interactWithInfoBar(page);
  });

  test('Open and Close Help', async ({ page }) => {
    await openAndCloseHelp(page);
  });

  test('Perform Final Clicks', async ({ page }) => {
    await clickCanvasPositions(page, [
      { x: 1175, y: 307 },
      { x: 1188, y: 310 },
      { x: 1179, y: 307 },
      { x: 1170, y: 303 }
    ]);
  });
});