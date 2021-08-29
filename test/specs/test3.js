describe ('libris.ro', async() =>{

    it('load the login page', async() =>{

        await browser.url ('https://libris.ro/auth/login.jsp');


    });

    it ('should log in with the correct credentials', async() => {
        const userInput = await $('#date-inregistrare-user');
        const passInput = await $('#parola');
        const loginButton = await $('.log-in-cont-inregistrare-btn');
        
        await userInput.setValue('uzun_elena@yahoo.com');
        await passInput.setValue('123456');
        await loginButton.click();

        
  
     });

     it('should not log in with incorrect credentials', async() => {

        const userInput = await $('#date-inregistrare-user');
        const passInput = await $('#parola');
        const loginButton = await $('.log-in-cont-inregistrare-btn');
        
        await userInput.setValue('uzun_elena@yahoo.com');
        await passInput.setValue('1234567');
        await loginButton.click();
     });
    });



    describe ('libris.ro', async() =>{

        it('load the page', async() =>{
    
            await browser.url ('https://libris.ro/');

        });

     it('should search a book by name', async() => {
         const searchBox = await $('#autoCompleteMobile');
         const searchButton =await $ ('#autoCompleteButtonMobile');
         await searchBox.setValue('caiet de vacanta');
         await searchButton.click();
         

     });

     it('should have a wishlist icon', async() =>{
        const wishListIcon = await $('.header-menu-icons');
        await expect(wishListIcon).toExist();
        await expect(wishListIcon.toBeClickable);
    
        



     });
   
});