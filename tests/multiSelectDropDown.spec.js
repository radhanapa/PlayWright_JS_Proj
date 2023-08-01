const {test, expect} = require('@playwright/test')

test('multiSelectDropDown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('id=colors',['Red','Blue','White'])

    await page.waitForTimeout(5000)

})