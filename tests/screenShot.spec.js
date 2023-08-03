import test, {page,expect} from '@playwright/test'

test('page screenshot', async ({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})

})

test('Ful page screenshot', async ({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true })

})

test.only('element screenshot', async ({page})=>{
 await page.goto('https://demo.opencart.com/')
 await page.locator('//*[@id="content"]/div[2]/div[1]/form/div/div[2]').screenshot({path:'tests/screenshots/'+Date.now()+'element.png'})
})