# GDocsMarkdownPreview
Preview Markdown from Google Docs with Github style and syntax highlighting
## Install from Google Web Store
Available in Google web store:
https://chrome.google.com/webstore/detail/preview-markdown/hlcflgaamnhiibdebkjbojhfkkckkjif?authuser=0

On an existing Google docs, 
* Click Add-ons -> Get Add-ons...
* Search for `Markdown`
![Preview Markdown in Google web store](http://i.imgur.com/yew4DTp.png)
* Click `+ FREE` to install this for your document
* Continue working on your document as the preview will be updated in real-time in the sidebar.


## Manually adding this script to your doc (once per doc)
* Open your Google Drive document (http://drive.google.com)
* Tools -> Script Editor > Create script for blank project
* Clear the default `Code.gs` file and paste the contents of [Code.gs](Code.gs) into the code editor
* Add a new HTML file (File -> New -> HTML File) with the name `Sidebar.html` and paste the content of [Sidebar.html](Sidebar.html) into the code editor
* File -> Save (or `Ctrl/⌘ + S`) for both open files
* When prompted enter new project name for 'Untitled project', e.g. 'Preview Markdown'
* Close the window, return to the GDocs window and follow Add-ons -> Preview Markdown -> Start
