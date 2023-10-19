const {test, expect} =require('@playwright/test')

test('Locate Multiple Elements', async ({page})=> {
    
    await page.goto('https://demoqa.com/');

    const links= await page.$$('a')

    // for (const link of links)
    // {
    //     const linktext=await link.textContent()
    //     console.log(linktext)
    // }

    //To wait until all topics on web page are loaded
    page.waitForSelector('//div/h5');

    const topics= await page.$$('//div/h5');

    for (const topic of topics)
    {
        const topic_text=await topic.textContent()
        console.log(topic_text)
    }
})