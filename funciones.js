// entrada app web
function doGet() {
    return HtmlService.createTemplateFromFile('web')
        .evaluate()
        .setTitle('Agenda de Contactos');
}

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}