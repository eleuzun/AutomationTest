describe('eMag.ro', () => {

    it('should have a logo displayed ', async () => {
        await browser.url('http://www.emag.ro'); 
        const logo = await $('//*[@id="masthead"]/div/div/div[1]/a/img');
        await expect (logo).toExist();
 
      

    });
    
    it('should open Resigilate page', async () =>{
        const resigilateButton =  await $('[title ="Resigilate"]');
        await resigilateButton.click();
        await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');
        
        
    });


});