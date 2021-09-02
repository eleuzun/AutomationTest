describe ('libris.ro', async() =>{

    it('should not log in with incorrect credentials', async() => {
        
        await browser.url ('https://libris.ro/auth/login.jsp');
        const userInput = await $('#date-inregistrare-user');
        const passInput = await $('#parola');
        const loginButton = await $('.log-in-cont-inregistrare-btn');
        await userInput.setValue('uzun_elena@yahoo.com');
        await passInput.setValue('1234567');
        await loginButton.click();
        const errorMessage = await $('/html/body/main/div/section[1]/div/section[2]/div/section[2]/p[2]');
        await expect(errorMessage).toBePresent();
    
     });
     
    it ('should log in with the correct credentials', async() => {
        
        await browser.url ('https://libris.ro/');
        await browser.newWindow('https://libris.ro/auth/login.jsp')
        const userInput = await $('#date-inregistrare-user');
        const passInput = await $('#parola');
        const loginButton = await $('.log-in-cont-inregistrare-btn');
        await userInput.setValue('uzun_elena@yahoo.com');
        await passInput.setValue('123456');
        await loginButton.click();
        await browser.newWindow('https://libris.ro/account/personalInformations');
        await expect(browser).toHaveUrlContaining('https://libris.ro/account/personalInformations');
       const myAccount = await $('.cont-pg-title');
        await expect(myAccount).toExist();

     });


    
it('should add a book to wishlist', async() =>{
    
    await browser.url('https://libris.ro/prima-iubire-alina-sfirlea-LIB978-606-029-417-7--p21797361.html');
    await expect(browser).toHaveTitle('Prima iubire - Alina Sfirlea - Libris');
    const wishButton = await $('/html/body/main/section[1]/div/div[3]/div/div[2]/div[2]/a/img');
    await wishButton.doubleClick();
    const wishList = await $('.header-nav-wishlist-item');
    await wishList.doubleClick();
    await browser.newWindow('https://libris.ro/account/myWishlist');
    await expect(browser).toHaveUrlContaining('https://libris.ro/account/myWishlist');
    const wishListPage = await $('.wishlist-section-ct');
    await expect(wishListPage).toExist();

});


it('should search a book', async() =>{
await browser.url('https://libris.ro/');

   const searchBox = await $('#autoCompleteMobile');
   const searchButton = await $('#autoCompleteButtonMobile');
   await searchBox.setValue('irina binder');
   await searchButton.click();


});
});    