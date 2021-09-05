describe('eMag.ro', () => {

    it('should have a logo displayed ', async () => {
        await browser.url('http://www.emag.ro'); 
        const logo = await $('.navbar-brand');
        await expect (logo).toExist();


    });
    
    it('should open Resigilate page', async () =>{
        const resigilateButton =  await $('[title ="Resigilate"]');
        await resigilateButton.click();
        
        await browser.switchWindow('https://www.emag.ro/resigilate?ref=hdr_resigilate');
        await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');
        
    });
});