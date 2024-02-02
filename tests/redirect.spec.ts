import { expect, test } from '@playwright/test'

test('has called server actions and redirect to /login', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: 'Click me' }).click()
  await page.waitForURL('/login')

  expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible()
})

test('has normal redirect', async ({ page }) => {
  await page.goto('/redirect')

  await page.waitForURL('/another-page')

  expect(page.getByRole('heading', { name: 'Another Page' })).toBeVisible()
})
