
Google Functions - WSJ.com RSS Feeds
---

Here are some google functions to use in a google sheet cell to pull Wall Street Journal RSS feeds into the spreadsheet. It uses the IMPORTXML Function.

1. Business News RSS Feed:  =IMPORTXML("https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml", "//item",)

2. Markets News RSS Feed: =IMPORTXML("https://feeds.a.dj.com/rss/RSSMarketsMain.xml", "//item",)

3. World News RSS Feed: =IMPORTXML("https://feeds.a.dj.com/rss/RSSWorldNews.xml", "//item",)


Google App Script Function with an RSS Feed - Doesn't work but an example of the Google App Script code. 

This is some example code to pull an RSS or XML feed from a news website. It doesn't work in this case, but it can be tried with other websites like the Financial Times and Bloomberg News.


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



