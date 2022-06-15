import {alertHomePage} from "../../lib/pages"

describe("Lekcja 5 - Alerts", async () =>{
    it("Should open alert home page and verify url", async () => {
        await browser.url(alertHomePage);
        await expect(browser).toHaveUrl(alertHomePage)
    })

    it("Should click on the button and get text on the alert", async () => {
       const button: WebdriverIO.Element = await $(".btn-danger")
       await button.click();
       const alertText: string = await browser.getAlertText();
       await expect(await alertText).toContain("I am an alert box!");
       await expect(await browser.isAlertOpen()).toBeTruthy();
       await browser.acceptAlert();
       await expect(await browser.isAlertOpen()).toBeFalsy();

    })

    it("Should verify confirm alert", async () => {
        const tabConfigAlert: WebdriverIO.Element = await $("//a[contains(text(), 'Alert with OK & Cancel' )] ");
        await tabConfigAlert.click()
        const button: WebdriverIO.Element = await $("button.btn-primary");
        await button.click();
        await browser.dismissAlert();
        const p: WebdriverIO.Element = await $("#demo")
        const validationMesage: string = await p.getText();
        await expect(await validationMesage).toContain("You Pressed Cancel");

    })

    it("Shoul verify prompt alert", async () => {
        const tabPromptAlert: WebdriverIO.Element = await $("//a[contains(text(), 'Alert with Textbox ' )]");
        await tabPromptAlert.click();
        const button: WebdriverIO.Element = await $(".btn-info");
        await button.click();
        await browser.sendAlertText("Bartosz");
        await browser.acceptAlert();
        const p:WebdriverIO.Element = await $("#demo1");
        await expect(await p.getText()).toContain("Hello Bartosz How are you today");
    })


})