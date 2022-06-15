import {productUrl} from "../../lib/pages"

describe("Lekcja3 - Select", async () => {
    it("Should open product page and verify url", async () =>{
        await browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);

    })

    it("should select product size", async () => {
        const select: WebdriverIO.Element = await $("#group_1");
        await select.selectByIndex(0);
        await expect(await select.getValue()).toContain("1");



    })

})
