import {homeUrl} from "../../lib/pages";
import {searchPhrase} from "../../lib/wordData";


describe("Lesson 1 - Input", async () => {

    it("Should open automationpractice page", async () => {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "index.php");
    })

    it("Should type value to search input", async() => {
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.setValue(searchPhrase);
        await browser.pause(4000);
        expect(await input.getValue()).toContain(searchPhrase)

    })

    it("Should clear search input", async () => {
        const input:WebdriverIO.Element = await $("#search_query_top");
        await input.clearValue();
        await browser.pause(3000);
        await expect(await input.getValue()).toContain("");

    })
})