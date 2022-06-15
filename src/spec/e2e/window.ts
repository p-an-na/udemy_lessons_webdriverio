import {homeUrl} from "../../lib/pages"
import {womenUrl} from "../../lib/pages"

describe("Lekcja 4 - Window", async () => {
    it("Should open home page", async () => {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "index.php")
    })

    it("Should open women page in new card", async () => {
        await browser.newWindow(womenUrl);
        
    })
    it("Should verify title pages", async () => {
        const openWindows = await browser.getWindowHandles();
        await browser.switchToWindow(openWindows[0]);
        await expect(browser).toHaveTitle("My Store");


    })
})