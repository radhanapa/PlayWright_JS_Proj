// const{test, expect} = require ('@playwright/test')

// (or)
import {test, expect} from '@playwright/test'

test('test2Locators', async ({page})=>{
    await page.goto('https://demoblaze.com/')

    await page.locator('id=login2').click()

    // await page.locator('//input[@id="loginusername"]').fill('abcdefg')

    await page.fill('#loginusername','pavanol')

    await page.locator('//input[@id="loginpassword"]').fill('test@123')

    await page.getByRole('button', { name: 'Log in' }).click();

    const logoutLink = await page.locator('id=logout2')

    await expect(logoutLink).toBeVisible()

    //multiple elements
    //const elements = await page.$$(locator)
})