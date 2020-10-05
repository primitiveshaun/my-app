const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://dev.primitivedigital.uk",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Stats/config", "/stats"],
            ["Content", "/frontity-tests"],
            ["CPTs", "/evolution-of-digital-stuff"],
            ["CTs", "/timelines"],
            ["Pages", "/web-design"],
            ["Post", "/blog/a-decade-of-digital-development"],
            ["Posts", "/blog"]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://api.primitivedigital.uk/wp-json"
        },
        "homepage": "/home/", // optional: set when using a page as the site homepage (wp hp settings ignored)
        "postsPage": "/blog/", // optional: set when using a page as the site homepage
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
