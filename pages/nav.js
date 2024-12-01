function scrollToHeader(){
    document.getElementById('corpo').style.scrollBehavior="smooth"

    const meuCheckBox = document.querySelectorAll('input[type="checkbox"]');
    meuCheckBox.forEach(checkbox => {
        checkbox.checked = false;
    });
}
