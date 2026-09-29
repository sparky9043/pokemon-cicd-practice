const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('Click on Venusaur moves page', async ({ page }) => {
    await page.goto('')
    
    await page.getByText('venusaur').click()
    await page.waitForURL('**/pokemon/venusaur')

    await expect(page.getByText('speed')).toBeVisible()
  })
})