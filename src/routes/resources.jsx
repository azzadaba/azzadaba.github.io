import React from "react";
import Infobox from "../components/infobox";

export default function Resources() {

  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }
    else {
      loadScript();
    }
  }
  else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '8ef95c-2.myshopify.com',
      storefrontAccessToken: '56f6f4dd108faa4d30ddfc48ce756199',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '6901347025029',
        node: document.getElementById('product-component-1706301054015'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "options": false
            },
            "text": {
              "button": "View product"
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              }
            },
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            }
          },
          "toggle": {}
        },
      });
    });
  }

  let data = {
    header: <h2>Store</h2>,
    text: (
      <div>
        <center>
          <h2>New resources launching Spring 2026.</h2>
          <h3>Stay tuned!</h3>
        </center>
      </div>
    ),
  };

  return <Infobox data={data} />;
}
