
Google Functions - WSJ
---

=IMPORTXML("https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml", "//item",)

=IMPORTXML("https://feeds.a.dj.com/rss/RSSMarketsMain.xml", "//item",)

=IMPORTXML("https://feeds.a.dj.com/rss/RSSWorldNews.xml", "//item",)

// xml_parser 5 - current function - timestamp and url and title

function myFunction() {
  function fetchXML() {
    var url = "https://feeds.a.dj.com/rss/RSSWorldNews.xml"";
    var response = UrlFetchApp.fetch(url);
    var xml = response.getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var entries = root.getChildren('url', root.getNamespace());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    for (var i = 0; i < entries.length; i++) {
      var loc = entries[i].getChild('loc', root.getNamespace()).getText();
      var newsNamespace = XmlService.getNamespace("news", "http://www.google.com/schemas/sitemap-news/0.9");
      var newsElement = entries[i].getChild('news', newsNamespace);
      if (newsElement) {
        var title = newsElement.getChild('title', newsNamespace).getText();
        var publicationDate = newsElement.getChild('publication_date', newsNamespace).getText();
        var languageElement = newsElement.getChild('language', newsNamespace);
        var language = languageElement ? languageElement.getText() : '';
        if (language === 'en' || language === '') { // Exclude other language values
          sheet.appendRow([loc, title, publicationDate]);
        }
      }
    }
  }
  fetchXML(); // Call the fetchXML function
}

https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml

