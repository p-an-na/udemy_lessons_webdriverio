import {homeUrl, womenUrl} from "../../lib/pages";

describe("Lesson 2 - Checkbox", async () => {
    it("Should open automation practice page", async () => {
        await browser.url(homeUrl);
        await expect(browser).toHaveUrl(homeUrl + "index.php");
    })

    it("Should click on women page and verify url", async () => {
        const womenPage: WebdriverIO.Element = await $("a[title='Women']");
        await womenPage.click();
        await expect(browser).toHaveUrl(womenUrl)
    })

    it("Should click on checkbox Tops", async () => {
        const checkbox:WebdriverIO.Element = await $("#layered_category_4");
        await checkbox.click();
        await browser.pause(5000)
        await expect(await checkbox.isSelected).toBeTruthy();
    })

    it("Should check multiple checkboxes", async () => {

        const checkboxes:WebdriverIO.ElementArray = await $$("#ul_layered_id_attribute_group_1 li input");
        await checkboxes.map(async item => {
            await item.click();
        })

        await browser.pause(5000);

    })

    })
