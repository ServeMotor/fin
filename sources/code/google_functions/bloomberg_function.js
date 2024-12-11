// code.gs 0 url only printing

function myFunction() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
    var response = UrlFetchApp.fetch(url);
    var xml = response.getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var entries = root.getChildren('url', root.getNamespace());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    for (var i = 0; i < entries.length; i++) {
      var loc = entries[i].getChild('loc', root.getNamespace()).getText();
      sheet.appendRow([loc]);
    }
  }
  fetchXML(); // Call the fetchXML function
}

// xml_parser - title only printing

function myFunction() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
    var response = UrlFetchApp.fetch(url);
    var xml = response.getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var entries = root.getChildren('url', root.getNamespace());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    for (var i = 0; i < entries.length; i++) {
      var newsNamespace = XmlService.getNamespace("news", "http://www.google.com/schemas/sitemap-news/0.9");
      var newsElement = entries[i].getChild('news', newsNamespace);
      if (newsElement) {
        var loc = newsElement.getChild('title', newsNamespace).getText();
        sheet.appendRow([loc]);
      }
    }
  }
  fetchXML(); // Call the fetchXML function
}

// xml_parser 2 - title and timestamp

function myFunction3() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
    var response = UrlFetchApp.fetch(url);
    var xml = response.getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var entries = root.getChildren('url', root.getNamespace());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    for (var i = 0; i < entries.length; i++) {
      var newsNamespace = XmlService.getNamespace("news", "http://www.google.com/schemas/sitemap-news/0.9");
      var newsElement = entries[i].getChild('news', newsNamespace);
      if (newsElement) {
        var title = newsElement.getChild('title', newsNamespace).getText();
        var publicationDate = newsElement.getChild('publication_date', newsNamespace).getText();
        sheet.appendRow([title, publicationDate]);
      }
    }
  }
  fetchXML(); // Call the fetchXML function
}

// xml_parser 3 - timestamp and url and title

function myFunction4() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
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
        sheet.appendRow([loc, title, publicationDate]);
      }
    }
  }
  fetchXML(); // Call the fetchXML function
}

// xml_parser 4 - timestamp and url and title

function myFunction5() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
    var response = UrlFetchApp.fetch(url);
    var xml = response.getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var entries = root.getChildren('url', root.getNamespace());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();
    Logger.log("Total entries: " + entries.length);
    for (var i = 0; i < entries.length; i++) {
      var loc = entries[i].getChild('loc', root.getNamespace()).getText();
      var newsNamespace = XmlService.getNamespace("news", "http://www.google.com/schemas/sitemap-news/0.9");
      var newsElement = entries[i].getChild('news', newsNamespace);
      if (newsElement) {
        var title = newsElement.getChild('title', newsNamespace).getText();
        var publicationDate = newsElement.getChild('publication_date', newsNamespace).getText();
        var languageElement = newsElement.getChild('language', newsNamespace);
        var language = languageElement ? languageElement.getText() : '';
        Logger.log("Entry " + i + ": loc=" + loc + ", title=" + title + ", publicationDate=" + publicationDate + ", language=" + language);
        if (language === 'en' || language === '') { // Filter for English or blank language
          sheet.appendRow([loc, title, publicationDate]);
        }
      } else {
        Logger.log("No news element found for entry " + i);
      }
    }
  }
  fetchXML(); // Call the fetchXML function
}

// xml_parser 5 - current function - timestamp and url and title

function myFunction6() {
  function fetchXML() {
    var url = "https://www.bloomberg.com/feeds/sitemap_news.xml";
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


