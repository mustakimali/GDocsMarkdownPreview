function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

/**
 * Gets the text the user has selected. If there is no selection,
 * this function displays an error message.
 *
 * @return {Array.<string>} The selected text.
 */
function getDocumentText() {
  return DocumentApp.getActiveDocument().getBody().getText();
}

function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Preview Markdown');
  DocumentApp.getUi().showSidebar(ui);
}