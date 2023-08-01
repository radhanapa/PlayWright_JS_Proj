import {test, expect} from '@playwright/test'

test('dropDowns', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator('id=country').selectOption({label:'India'})

    // await page.locator('id=country').selectOption('India')

    // await page.locator('id=country').selectOption({value:'uk'})

    //Multiple vlues from select

    const options = await page.$$('//select[@id="country"]/option')

    console.log('number of options :'+ options.length)

    await page.waitForTimeout(5000)
})