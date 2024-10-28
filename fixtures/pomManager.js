
import{LoginPage, paymentAddress, common,fastCheckout, productInfo, specialoffers,store, subscribe } from "../fixtures/pages";

export class PomManager {
    constructor(page) {
        this.page = page;
        this.pageObjects = {};
    }

    /**
     * Get the instance of LoginPage.
     * @returns {LoginPage} The LoginPage instance.
     */
    getLoginPage() {
        // Lazy loading for the LoginPage instance
        if (!this.pageObjects.loginPage) {
            this.pageObjects.loginPage = new LoginPage(this.page);
        }
        return this.pageObjects.loginPage;
    }


    /**
     * Get the instance of paymentAddress.
     * @returns {paymentAddress} The paymentAddress instance.
     */
    getPaymentAddressPage()
    {
        if (!this.pageObjects.paymentAddress) {
            this.pageObjects.paymentAddress = new paymentAddress(this.page);
        }
        return this.pageObjects.paymentAddress;
    }

    /**
     * Get the instance of common.
     * @returns {common} The common instance.
     */
    getCommonMethods()
    {
        if (!this.pageObjects.common) {
            this.pageObjects.common = new common(this.page);
        }
        return this.pageObjects.common;
    }

    /**
     * Get the instance of fastCheckout.
     * @returns {fastCheckout} The fastCheckout instance.
     */
    getFastCheckoutPage()
    {
        if (!this.pageObjects.fastCheckout) {
            this.pageObjects.fastCheckout = new fastCheckout(this.page);
        }
        return this.pageObjects.fastCheckout;
    }

    /**
     * Get the instance of productInfo.
     * @returns {productInfo} The productInfo instance.
     */
    getProductInfoPage()
    {
        if (!this.pageObjects.productInfo) {
            this.pageObjects.productInfo = new productInfo(this.page);
        }
        return this.pageObjects.productInfo;
    }

    /**
     * Get the instance of specialoffers.
     * @returns {specialoffers} The specialoffers instance.
     */
    getSpecialOfferPage()
    {
        if (!this.pageObjects.specialoffers) {
            this.pageObjects.specialoffers = new specialoffers(this.page);
        }
        return this.pageObjects.specialoffers;
    }

    /**
     * Get the instance of store.
     * @returns {store} The store instance.
     */
    getStorePage()
    {
        if (!this.pageObjects.store) {
            this.pageObjects.store = new store(this.page);
        }
        return this.pageObjects.store;
    }

    /**
     * Get the instance of subscribe.
     * @returns {subscribe} The subscribe instance.
     */
    getSubscribePage()
    {
        if (!this.pageObjects.subscribe) {
            this.pageObjects.subscribe = new subscribe(this.page);
        }
        return this.pageObjects.subscribe;
    }

    // Add more methods for other page objects if needed
    clearPageObjects() {
        this.pageObjects = {}; // Clear the instance to free up memory
    }
}
