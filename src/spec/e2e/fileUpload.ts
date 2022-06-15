import { uploaderUrl } from "../../lib/pages";
const path = require("path");

describe("Lekcja 6 - Upload file", async () => {
    it("Should open uploader page and verify url", async () => {
        await browser.url(uploaderUrl);
        await expect(browser).toHaveUrl(uploaderUrl);
    })
    it("Should upload file and click upload button", async () => {
        const input: WebdriverIO.Element = await $("#file-upload");
        const buttonUpload:WebdriverIO.Element = await $("#file-submit");
        const filePath = path.join(__dirname, "../../images/ziemia.jpg");
        const uploadedFile = await browser.uploadFile(filePath);
        await input.setValue(uploadedFile);
        await buttonUpload.click();
        const h3:WebdriverIO.Element = await $("div#content h3");
        await expect(await h3.getText()).toContain("File Uploaded!");
        const p:WebdriverIO.Element = await $("#uploaded-files")
        await expect (await p.getText()).toContain("ziemia.jpg");


    })
})