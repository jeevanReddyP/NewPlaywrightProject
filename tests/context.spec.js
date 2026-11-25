import {chromium, test} from "@playwright/test"


test("contextjs",async()=>{
  const context=await chromium.launch({
    headless:false,
  })
  const page1=await context.newPage()
  const page2=await context.newPage()
  
 await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
 await page2.goto("https://chatgpt.com/")
})