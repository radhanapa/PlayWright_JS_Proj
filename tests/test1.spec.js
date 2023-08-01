const{ test, expect } = require('@playwright/test')

test('test1', async ({page})=>{

   await page.goto('https://demoblaze.com/')

   var pageTitle = await page.title()

   console.log('page title is', pageTitle)

   await expect(page).toHaveTitle('STORE')

   await expect(page).toHaveURL('https://demoblaze.com/')

   console.log('pageurl is :'+ await page.url())

   await page.close()
    
})