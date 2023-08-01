const {test,expect} = require('@playwright/test')


test('test1@sanity',async ({page})=>{
    console.log('this is test1 in tag')
})

test('test2@reg', async ({page})=>{
    console.log('this is test2 in tag')
})

test('test3@fast', async ({page})=>{
    console.log('this is test3 in tag')
})

test('test4@@sanity@reg',async ({page})=>{
    console.log('this is test4 in tag')
})

test('test5@sanity@fast', async ({page})=>{
    console.log('this is test5 in tag')
})