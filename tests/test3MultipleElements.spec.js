// const {test, expect } = require("@playwright/test");

import {test, expect} from '@playwright/test'

// test('PrintLinks Text', async ({page})=>{

//     await page.goto('https://demoblaze.com/index.html')

//     const links = await page.$$('a')

//     for(const link of links){

//         const linkText = await link.textContent();
//         console.log('linkText is'+ linkText)

//     }

// })

test('Print product names', async ({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    
    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a')

    const products = await page.$$('//div[@id="tbodyid"]//div//h4/a')

    for(const product of products){

        const productTitle = await product.textContent();
        console.log('productText is'+ productTitle)

    }

})