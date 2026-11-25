const {test,expect, chromium} = require('@playwright/test')

test('my first playwright code', async ({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{
        waitUntil:"domcontentloaded",
        timeout:15000
    })
    await expect(page).toHaveTitle("OrangeHRM")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='Admin']").click()
    const username= page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
    await username.waitFor({state:"visible",timeout:1500})
    await username.fill("Admin")
    await page.locator("//button[@type='submit']").click()
    await page.locator("//span[text()='(1) Record Found']").isVisible()
    await page.locator("//span[text()='PIM']").click()
    await page.locator("(//input[@placeholder='Type for hints...'])[1]").fill("Admin")
     console.log("inside pmi page")
     await page.locator("//button[text()=' Search ']").click()
  await page.locator("//span[text()='No Records Found']").isVisible()
  console.log("Next time page")
    await page.getByText("Time").click();
    await page.getByPlaceholder("Type for hints...").fill("User")
    await page.locator("//button[@type='submit']").click()
    const res=await page.getByText("Invalid").isVisible()
    console.log("Ivalid "+ res)
    page.close()
})