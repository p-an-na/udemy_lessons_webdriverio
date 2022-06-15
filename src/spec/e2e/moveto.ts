import { homeUrl } from "../../lib/pages";

describe ("Lesson 7 - Moveto, MoveIntoView", async () => {
    it("Should open automation practice page and verify url", async() => {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "index.php");
    })

    it("Should scroll into Facebook icon", async () => {
        const fbIcon:WebdriverIO.Element = await $("li.facebook");
        await fbIcon.scrollIntoView();
        
    })

    it("Should hover on Women tab", async () => {
        const tab:WebdriverIO.Element = await $("div#block_top_menu a");
        await tab.scrollIntoView();
        await tab.moveTo();
        await browser.pause(4000);

    } )

})