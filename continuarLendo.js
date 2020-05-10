function fecharModal(){
    const modal_footer = $('.modal-footer');
    if(modal_footer.length !== 0) {
        const button = $(modal_footer).children();
        $(button).click();
        console.log("Modal fechado");
    }
}

var observer = new MutationObserver(fecharModal);

var targetNode = document.body;

observer.observe(targetNode, { childList: true, subtree: true });

