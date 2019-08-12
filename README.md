# Webtrekk Smart Pixel React

[Site](https://www.webtrekk.com/) |
[Docs](https://docs.webtrekk.com/display/WSP/) |
[Support](https://support.webtrekk.com/) |
[Changelog](./CHANGELOG.md) |

<a name="Installation"></a>
## Installation

Using npm:

```shell
$ npm install --save webtrekk-smart-pixel-react
```

<a name="Integration"></a>
## Integration

```jsx
import * as wtSmart from "webtrekk-smart-pixel-react";
```

<a name="Components"></a>
## Components

<a name="WebtrekkInitData"></a>
### `<WebtrekkInitData>`

```jsx
import { WebtrekkInitData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkInitData
                trackId="111111111111111"
                trackDomain="analytics01.wt-eu02.net"
                domain="sub.domain.tld"
                cookie="1"
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| trackId | `String`. Required. Enter your Webtrekk customer ID, which is provided by Webtrekk. |
| trackDomain | `String`. Required. Enter your Webtrekk tracking URL. |
| domain | `String`. Optional. Defaults to `location.host`. Specify your domain, this domain is then not identified as a referrer. |
| cookie | `String`. Optional. Defaults to `1`. `1` The tracking pixel generates an ever ID. The ever ID is stored or read from the customer domain. It is then added to each tracking request. `3` The tracking pixel is not able to read the ever ID. Therefore, the tracking request is submitted without any ever ID. |

<a name="WebtrekkAdvancedData"></a>
### `<WebtrekkAdvancedData>`

```jsx
import { WebtrekkAdvancedData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkAdvancedData
                secureCookie={ false }
                optOutName="webtrekkOptOut"
                requestObfuscation={ false }
                forceOldEverId={ false }
                execCDB={ true }
                useCDBCache={ false }
                requestQueue={ {
                    activated: false,
                    ttl: 5 * 60 * 1000,
                    resendInterval: 5 * 1000,
                    size: 100
                } }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| secureCookie | `Boolean`. Optional. Defaults to `false`. `true` The "secure" flag is added to all client-side Webtrekk cookies. |
| optOutName | `String`. Optional. Defaults to `webtrekkOptOut`. Define an alternative name for the Webtrekk opt-out cookie. |
| requestObfuscation | `Boolean`. Optional. Defaults to `false`. `true` This option hides all track requests to make it harder for adblockers to identify and block Webtrekk track requests. |
| forceOldEverId | `Boolean`. Optional. Defaults to `false`. `true` The ever IDs from previous pixel versions will be taken over. |
| execCDB | `Boolean`. Optional. Defaults to `true`. Activate/ deactivate the Cross Device Bridge. |
| useCDBCache | `Boolean`. Optional. Defaults to `false`. Activate/ deactivate the image cache for the Cross Device Bridge. |
| requestQueue.activated | `Boolean`. Optional. Defaults to `false`. The offline tracking queue functionality is activated. |
| requestQueue.ttl | `Number`. Optional. Defaults to `5 * 60 * 1000`. Specify the maximum time a request can remain in the queue until it is deleted. |
| requestQueue.resendInterval | `Number`. Optional. Defaults to `5 * 1000`. Define the interval in milliseconds when the first request in the queue. |
| requestQueue.size | `Number`. Optional. Defaults to `100`. Maximum queue size for requests. |

<a name="WebtrekkPageData"></a>
### `<WebtrekkPageData>`

```jsx
import { WebtrekkPageData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkPageData
                name="name of the page"
                search="search term"
                numberSearchResults={ 7 }
                errorMessages="error: ..."
                paywall={ false }
                articleTitle="article title"
                contentTags="content tags"
                title="page title"
                type="page type"
                length="medium"
                daysSincePublication={ 5 }
                testVariant="test variant"
                testExperiment="test experiment"
                parameter={ {5: "parameter value 5"} }
                category={ {8: "category value 8"} }
                goal={ {2: "goal value 2"} }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| name | `String`. Optional. Defaults to `url based page name`. Unique identifier of your page. |
| search | `String`. Optional. Analyze keywords used by visitors to your site by including them in tracking. |
| numberSearchResults | `Number`. Optional. Defaults to `0`. Number of search results. |
| errorMessages | `String`. Optional. Error messages. |
| paywall | `Boolean`. Optional. Defaults to `false`. Paywall calls. |
| articleTitle | `String`. Optional. Title of the article. |
| contentTags | `String`. Optional. Tags contained in the article. |
| title | `String`. Optional. Title of the page. |
| type | `String`. Optional. Page type. |
| length | `String`. Optional. Length of the page. |
| daysSincePublication | `Number`. Optional. Defaults to `0`. Days since the publication of the article. |
| testVariant | `String`. Optional. Name of the test variant. |
| testExperiment | `String`. Optional. Name of the test. |
| parameter | `Object`. Optional. You can use page parameters to enrich your analytical data with your website-specific information and/ or metrics. |
| category | `Object`. Optional. Categories are content groups that are used to group pages so that website areas can be formed to enable aggregated evaluations. |
| goal | `Object`. Optional. When using website goals, all key targets for analysis and filtering are quickly available. |

<a name="WebtrekkCampaignData"></a>
### `<WebtrekkCampaignData>`

```jsx
import { WebtrekkCampaignData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkCampaignData
                id="en.internal.newsletter.2017.05"
                mediaCode={ ["mc", "wt_mc"] }
                oncePerSession={ false }
                parameter={ {1: "Newsletter 123"} }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Set your campaign ID in the pixel. |
| mediaCode | `Array<String>`. Optional. Defaults to `["mc", "wt_mc"]`. If you use media codes as a data source for your campaign tracking, entering the name of the media code parameter can increase tracking accuracy. |
| oncePerSession | `Boolean`. Optional. Defaults to `false`. `true` If you want to track each campaign only once within a particular session, you can force this with this parameter. The Smart Pixel then overwrites the campaign with "ignore" from the second-page view. |
| parameter | `Object`. Optional. Campaign parameters can be entered either directly in the page configuration or the campaign configuration with a target URL along with the media code. |

<a name="WebtrekkCustomerData"></a>
### `<WebtrekkCustomerData>`

```jsx
import { WebtrekkCustomerData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkCustomerData
                id="user5684798169"
                email="john.doe@webtrekk.com"
                emailRID=""
                emailOptin={ true }
                gender={ 1 }
                birthday="19870913"
                firstName="John"
                lastName="Doe"
                telephone="0049132456789"
                country="Germany"
                city="Berlin"
                postalCode="10115"
                street="Robert-Koch-Platz"
                streetNumber="4"
                category={ {5: "login"} }
                validation={ true }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Use this parameter to transfer a unique identifier for the user. |
| email | `String`. Optional. Use this parameter to transfer the email address of the user. |
| emailRID | `String`. Optional. Use this parameter to transfer the email receiver ID of the user. |
| emailOptIn | `Boolean`. Optional. Defaults to `false`. Use this parameter to transfer the opt-in email status of the user. |
| firstName | `String`. Optional. Use this parameter to transfer the first name of the user. |
| lastName | `String`. Optional. Use this parameter to transfer the last name of the user. |
| telephone | `String`. Optional. Use this parameter to transfer the phone number of the user. |
| gender | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the gender of the user. `1` male. `2` female. |
| birthday | `String`. Optional. Use this parameter to transfer the user's birthday (YYYYMMDD). |
| country | `String`. Optional. Use this parameter to transfer the country of the user. |
| city | `String`. Optional. Use this parameter to transfer the city of the user. |
| street | `String`. Optional. Use this parameter to transfer the street of the user. |
| streetNumber | `String`. Optional. Use this parameter to transfer the house number of the user. |
| category | `Object`. Optional. To create meaningful visitor segments, you can use this parameter to categorize customers. |
| validation | `Boolean`. Optional. Defaults to `false`. `true` Should overwrite existing customer information. |

<a name="WebtrekkProductData"></a>
### `<WebtrekkProductData>`

```jsx
import { WebtrekkProductData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkProductData
                id="ABC-123"
                action="view"
                cost={ 99.90 }
                quantity={ 2 }
                soldOut={ false }
                variant="green"
                parameter={ {1: "L"} }
                category={ {1: "tops", 2: "noname"} }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Saves the products stored in the shopping cart. This property must be entered if products are to be measured. |
| action | `String`. Required. The products can be transmitted to Webtrekk when: `list` a product is viewed in a catalog, `view` a product is viewed, `basket` a product is placed in the shopping cart and `confirmation` when the cart is purchased. |
| cost | `Number`. Optional. Defaults to `0`. Contains the product price ("0" prices are allowed). If you transfer a product more than once (quantity property greater than 1), use the total price instead of the unit price. |
| quantity | `Number`. Optional. Defaults to `0`. Contains product quantity. |
| variant | `String`. Optional. Use this parameter to transfer the variant of the product. |
| soldOut | `Boolean`. Optional. Defaults to `false`. Use this parameter to indicate that the product is sold out or in stock. `true` sold out. `false` in stock. |
| parameter | `Object`. Optional. Using parameters, you can enrich analytical data with your website-specific information and/ or metrics. |
| category | `Object`. Optional. Product categories contain static information about the products. They allow you to group the products by assigning them uniquely to a product and product category. |

<a name="WebtrekkProductData"></a>
### `<WebtrekkProductData>`

```jsx
import { WebtrekkOrderData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkOrderData
                value={ 120.99 }
                id="M-12345"
                couponValue={ 10.00 }
                paymentMethod="paypal"
                shippingService="dhl"
                shippingSpeed="express"
                shippingCosts={ 4.95 }
                grossMargin={ 12.95 }
                parameter={ {5: "bill"} }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| value | `String`. Required. The property "value" stores the total order value. This property must be entered if you want to tracke the total order values. |
| id | `String`. Optional. This optional property contains a unique order number (order ID). Using this setting ensures that no orders are counted twice. |
| couponValue | `Number`. Optional. Defaults to `0`. Contains the value of a coupon. Use this parameter if the customer orders with a coupon. |
| paymentMethod | `String`. Optional. Use this parameter to transfer the payment method of the order. |
| shippingService | `String`. Optional. Use this parameter to transfer the shipping service of the order. |
| shippingSpeed | `String`. Optional. Use this parameter to transfer the delivery time of the order. |
| shippingCosts | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the delivery costs of the order. |
| grossMargin | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the margin/ mark-up of the order. |
| orderStatus | `String`. Optional. Use this parameter to transfer the order status. |
| parameter | `Object`. Optional. Using parameters, you can enrich analytical data with your own web site-specific information and/or metrics. |

<a name="WebtrekkSessionData"></a>
### `<WebtrekkSessionData>`

```jsx
import { WebtrekkSessionData } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkCampaignData
                loginStatus="login"
                parameter={ {5: "male"} }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| loginStatus | `String`. Optional. Pass the current users login status here. |
| parameter | `Object`. Optional. Session parameters always refer to one complete session (visit). If the value for the parameter is transmitted during a visit several times, only the first or last value is evaluated, based on the configuration of Webtrekk. |

<a name="WebtrekkAutoTracking"></a>
### `<WebtrekkAutoTracking>`

```jsx
import { WebtrekkAutoTracking } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="*" component={ NotFound } />
            </Switch>

            <WebtrekkAutoTracking
                trackId="111111111111111"
                trackDomain="analytics01.wt-eu02.net"
                activateActions={ true }
                activateTeaser={ true }
                activateProductList={ true }
                activateContentEngagement={ true }
            />
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| trackId | `String`. Required. Enter your Webtrekk customer ID, which is provided by Webtrekk. |
| trackDomain | `String`. Required. Enter your Webtrekk tracking URL. |
| activateActions | `Boolean`. Optional. Defaults to `false`. Activates the automatic action tracking. |
| activateTeaser | `Boolean`. Optional. Defaults to `false`. Activates the teaser tracking extension. |
| activateProductList | `Boolean`. Optional. Defaults to `false`. Activates the product list extension. |
| activateContentEngagement | `Boolean`. Optional. Defaults to `false`. Activates the content engagement extension. |

<a name="WebtrekkContentEngagement"></a>
### `<WebtrekkContentEngagement>`

The Content Engagement Plugin is used to measure the reading behavior of your website visitors. The analysis data of
the scrolling behavior are essential performance indicators - especially for content pages: It is, therefore, crucial
for publishers to know how readers deal with a published article. The Content Engagement Plugin measures the percentage
of an article read by the end consumer.

```jsx
import { WebtrekkContentEngagement } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkContentEngagement
                selector="#my-content"
                name="My Content"
                percentageStepsInAnalytics={ 5 }
                sendContentEngagement={ 1 }
                percentageReached={ 25 }
                secondsReached={ 30 }
                largeBrowserResolution={ 1080 }
                largeBrowserSeconds={ 5 }
                mediumBrowserResolution={ 700 }
                mediumBrowserSeconds={ 5 }
                smallBrowserResolution={ 400 }
                smallBrowserSeconds={ 5 }
            >
                <div id="my-content">
                    <p>My Content</p>
                </div>
            </WebtrekkContentEngagement>
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| selector | `String`. Optional. Defaults to `children`. Enter the element to be measured. You can pass the CSS selector of the element. |
| name | `String`. Optional. Defaults to `current page name`. Specify the name of the element to be measured. Alternatively, the plugin uses the name of the current page. |
| percentageStepsInAnalytics | `Number`. Optional. Defaults to `5`. Define the percentage intervals that are to be reported in Analytics (e.g., five means that the count is incremented in five steps). |
| sendContentEngagement | `Number`. Optional. Defaults to `0`. Specify the event that triggers the request to Analytics. `0` The user clicks a link, reloads the page or is inactive until the end of the session. `1` The user exceeds a certain percentage (e.g., all 25% of the element). `2` After a certain number of seconds (e.g., every 30 seconds). |
| percentageReached | `Number`. Optional. Defaults to `25`. If you specify "percentage reached" as the event trigger, enter the desired percentage here (e.g., at 25%, the event is triggered after every 25%). |
| secondsReached | `Number`. Optional. Defaults to `30`. If you specify "seconds reached" as the event trigger, define the desired interval of seconds here (e.g., at 30 the event is triggered every 30 seconds). |
| largeBrowserResolution | `Number`. Optional. Defaults to `1080`. Specify the browser resolution for large browsers in pixels (greater than or equal to the specified number of pixels). |
| largeBrowserSeconds | `Number`. Optional. Defaults to `20`. Specify the seconds to mark a section of the element as read on small browser resolutions. |
| mediumBrowserResolution | `Number`. Optional. Defaults to `700`. Specify the browser resolution for medium-sized browsers in pixels (greater than or equal to the specified number of pixels). |
| mediumBrowserSeconds | `Number`. Optional. Defaults to `10`. Specify the seconds to mark a section of the element as read on medium browser resolutions. |
| smallBrowserResolution | `Number`. Optional. Defaults to `400`. Specify the browser resolution for small browsers in pixels (greater than or equal to the specified number of pixels). |
| smallBrowserSeconds | `Number`. Optional. Defaults to `5`. Specify the seconds to mark a section of the element as read on small browser resolutions. |

<a name="WebtrekkProductList"></a>
### `<WebtrekkProductList>`

With the product list tracking extension you can analyze which products your visitors view and click in the catalog
and on the product overview page.

```jsx
import { WebtrekkProductList } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            { products.data.map(function(product, i) {
                return (
                    <WebtrekkProductList
                        selector={ `#${product.id}` }
                        id={ product.id }
                        position={ i + 1 }
                        cost={ product.cost }
                        quantity={ 1 }
                        variant={ product.variant }
                        soldOut={ product.isSoldOut }
                        parameter={ {
                            1: product.name,
                            2: product.material,
                            4: product.color
                        } }
                        category={ {
                            1: product.description
                        } }
                    >
                        <Link to={ "/product/" + product.id } id={ product.id }>
                            <ProductImage product={ product } products={ products } />
                        </Link>
                    </WebtrekkProductList>
                );
            }) }
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Specify the product identifier. |
| position | `Number`. Required. Specify the product position within the list. |
| selector | `String`. Optional. Defaults to `children`. Enter the element to be measured. You can pass the CSS selector of the element. |
| cost | `Number`. Optional. Contains the product price. |
| quantity | `Number`. Optional. Contains the product quantity. |
| variant | `String`. Optional. Contains the product variants. |
| soldOut | `Boolean`. Optional. Use this parameter to indicate that the product. `true` sold out. `false` in stock |
| category | `Object`. Optional. Contains the product category. |
| parameter | `Object`. Optional. You can use parameters to enrich analytical data with your website-specific information and/ or metrics. |

<a name="WebtrekkTeaser"></a>
### `<WebtrekkTeaser>`

Webtrekk enables you with the use of the teaser tracking extension a comprehensive analysis of your onsite teasers. By
integrating the extension, teaser views and clicks are automatically captured on your website. By specifying further
parameters, it is possible to describe these in detail and evaluate them in combination with your web analytics data.

To evaluate the impact of a single teaser, in addition to views and clicks, engagement and conversion are calculated.
The engagement measurement for a specific teaser is initiated as soon as it is clicked. For each page view that follows
a teaser click, its engagement value is increased by 1. This happens until a website goal is reached or the user stops
visiting the website.

```jsx
import { WebtrekkTeaser } from "webtrekk-smart-pixel-react";

render()
{
    return (
        <div>
            <WebtrekkTeaser
                selector="#my-products"
                name="My products"
                rank="header"
                content="My products overview"
                variant="products"
                type="click"
                goal="order"
                value="10%"
            >
                <div id="my-products" className="content">
                    <Link to="/products">
                        My products
                    </Link>
                </div>
            </WebtrekkTeaser>
        </div>
    );
}
```

| Value | Notes |
| --- | --- |
| name | `String`. Required. Specify the teaser name. |
| selector | `String`. Optional. Defaults to `children`. Enter the element to be measured. You can pass the CSS selector of the element. |
| rank | `String`. Optional. Specify the teaser rank. |
| content | `String`. Optional. Specify the teaser content. |
| variant | `String`. Optional. Specify the teaser variant. |
| seen | `Boolean`. Optional. Defaults to `false`. `true` Teasers whose visibility is controlled via a zIndex, a rotation of different teaser elements or using some other dynamic method, must also be flagged if they are to be displayed. View tracking will be deactivated for this teaser. Click-, engagement- and conversion-tracking will still be activated. |
| type | `String`. Optional. Defaults to `product`. Specify the teaser conversion type. `view` The teaser should be connected to the conversion when the user has seen the teaser. `click` The teaser should be connected to conversion when the user has clicked on the teaser. `product` The teaser should be connected to conversion if the user has clicked on the teaser and the product is purchased with the same name as the teaser name. |
| goal | `String`. Optional. Defaults to `both`. Specify the teaser conversion goal. `order` The teaser should only be connected to the conversion. `goal` The teaser should only be connected to the website goal. `both` The teaser should be connected to conversion or website goal. |
| value | `String`. Optional. Defaults to `conversion value is the same as the product cost`. Specify the teaser conversion value. `percentage of order value` Percentage of order value (i.e., 5%). `fixed value` Fixed value (i.e., 15). |

<a name="WebtrekkSmartPixelReact"></a>
## WebtrekkSmartPixelReact

<a name="call"></a>
### `call`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.call((wtSmart) => {
    // do any tracking stuff here
});
```

| Value | Notes |
| --- | --- |
| callback | `function(wtSmart: wtSmart)`. Required. Callback method to interact with the origin Webtrekk Smart Pixel. For all functionalities see [Docs](https://docs.webtrekk.com/display/WSP/) |

<a name="init"></a>
### `init`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.init({
     trackId: "111111111111111",
     trackDomain: "analytics01.wt-eu02.net",
     domain: "sub.domain.tld",
     cookie: "1"
});
```

| Value | Notes |
| --- | --- |
| trackId | `String`. Required. Enter your Webtrekk customer ID, which is provided by Webtrekk. |
| trackDomain | `String`. Required. Enter your Webtrekk tracking URL. |
| domain | `String`. Optional. Defaults to `location.host`. Specify your domain, this domain is then not identified as a referrer. |
| cookie | `String`. Optional. Defaults to `1`. `1` The tracking pixel generates an ever ID. The ever ID is stored or read from the customer domain. It is then added to each tracking request. `3` The tracking pixel is not able to read the ever ID. Therefore, the tracking request is submitted without any ever ID. |

<a name="advanced"></a>
### `advanced`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.advanced({
     secureCookie: false,
     optOutName: "webtrekkOptOut",
     requestObfuscation: false,
     forceOldEverId: false,
     execCDB: true,
     useCDBCache: false,
     requestQueue: {
     	activated: false,
     	ttl: 5 * 60 * 1000,
     	resendInterval: 5 * 1000,
     	size: 100
     }
});
```

| Value | Notes |
| --- | --- |
| secureCookie | `Boolean`. Optional. Defaults to `false`. `true` The "secure" flag is added to all client-side Webtrekk cookies. |
| optOutName | `String`. Optional. Defaults to `webtrekkOptOut`. Define an alternative name for the Webtrekk opt-out cookie. |
| requestObfuscation | `Boolean`. Optional. Defaults to `false`. `true` This option hides all track requests to make it harder for adblockers to identify and block Webtrekk track requests. |
| forceOldEverId | `Boolean`. Optional. Defaults to `false`. `true` The ever IDs from previous pixel versions will be taken over. |
| execCDB | `Boolean`. Optional. Defaults to `true`. Activate/ deactivate the Cross Device Bridge. |
| useCDBCache | `Boolean`. Optional. Defaults to `false`. Activate/ deactivate the image cache for the Cross Device Bridge. |
| requestQueue.activated | `Boolean`. Optional. Defaults to `false`. The offline tracking queue functionality is activated. |
| requestQueue.ttl | `Number`. Optional. Defaults to `5 * 60 * 1000`. Specify the maximum time a request can remain in the queue until it is deleted. |
| requestQueue.resendInterval | `Number`. Optional. Defaults to `5 * 1000`. Define the interval in milliseconds when the first request in the queue. |
| requestQueue.size | `Number`. Optional. Defaults to `100`. Maximum queue size for requests. |

<a name="page"></a>
### `page`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.page("name of the page", {
     search: "search term",
     numberSearchResults: 7,
     errorMessages: "error: ...",
     paywall: false,
     articleTitle: "article title",
     contentTags: "content tags",
     title: "page title",
     type: "page type",
     length: "medium",
     daysSincePublication: 5,
     testVariant: "test variant",
     testExperiment: "test experiment",
     parameter: {5: "parameter value 5"},
     category: {8: "category value 8"},
     goal: {2: "goal value 2"}
});
```

| Value | Notes |
| --- | --- |
| name | `String`. Optional. Defaults to `url based page name`. Unique identifier of your page. |
| search | `String`. Optional. Analyze keywords used by visitors to your site by including them in tracking. |
| numberSearchResults | `Number`. Optional. Defaults to `0`. Number of search results. |
| errorMessages | `String`. Optional. Error messages. |
| paywall | `Boolean`. Optional. Defaults to `false`. Paywall calls. |
| articleTitle | `String`. Optional. Title of the article. |
| contentTags | `String`. Optional. Tags contained in the article. |
| title | `String`. Optional. Title of the page. |
| type | `String`. Optional. Page type. |
| length | `String`. Optional. Length of the page. |
| daysSincePublication | `Number`. Optional. Defaults to `0`. Days since the publication of the article. |
| testVariant | `String`. Optional. Name of the test variant. |
| testExperiment | `String`. Optional. Name of the test. |
| parameter | `Object`. Optional. You can use page parameters to enrich your analytical data with your website-specific information and/ or metrics. |
| category | `Object`. Optional. Categories are content groups that are used to group pages so that website areas can be formed to enable aggregated evaluations. |
| goal | `Object`. Optional. When using website goals, all key targets for analysis and filtering are quickly available. |

<a name="action"></a>
### `action`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.action({
     name: "en.click.on.some.link",
     parameter: {1: "en"},
     goal: {2: "goal value 2"}
});
```

| Value | Notes |
| --- | --- |
| name | `String`. Required. Unique identifier of your action. |
| parameter | `Object`. Optional. You can use action parameters to enrich your analytical data with your website-specific information and/ or metrics. |
| goal | `Object`. Optional. When using website goals, all key targets for analysis and filtering are quickly available. |

<a name="campaign"></a>
### `campaign`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.campaign({
     id: "en.internal.newsletter.2017.05",
     mediaCode: ["mc", "wt_mc"],
     oncePerSession: false,
     parameter: {1: "Newsletter 123"}
});
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Set your campaign ID in the pixel. |
| mediaCode | `Array<String>`. Optional. Defaults to `["mc", "wt_mc"]`. If you use media codes as a data source for your campaign tracking, entering the name of the media code parameter can increase tracking accuracy. |
| oncePerSession | `Boolean`. Optional. Defaults to `false`. `true` If you want to track each campaign only once within a particular session, you can force this with this parameter. The Smart Pixel then overwrites the campaign with "ignore" from the second-page view. |
| parameter | `Object`. Optional. Campaign parameters can be entered either directly in the page configuration or the campaign configuration with a target URL along with the media code. |

<a name="customer"></a>
### `customer`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.customer("user5684798169", {
     email: "john.doe@webtrekk.com",
     emailRID: "",
     emailOptin: true,
     gender: 1,
     birthday: "19870913",
     firstName: "John",
     lastName: "Doe",
     telephone: "0049132456789",
     country: "Germany",
     city: "Berlin",
     postalCode: "10115",
     street: "Robert-Koch-Platz",
     streetNumber: "4",
     category: {5: "login"}
}, false);
```

| Value | Notes |
| --- | --- |
| id | `String`. Required. Use this parameter to transfer a unique identifier for the user. |
| email | `String`. Optional. Use this parameter to transfer the email address of the user. |
| emailRID | `String`. Optional. Use this parameter to transfer the email receiver ID of the user. |
| emailOptIn | `Boolean`. Optional. Defaults to `false`. Use this parameter to transfer the opt-in email status of the user. |
| firstName | `String`. Optional. Use this parameter to transfer the first name of the user. |
| lastName | `String`. Optional. Use this parameter to transfer the last name of the user. |
| telephone | `String`. Optional. Use this parameter to transfer the phone number of the user. |
| gender | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the gender of the user. `1` male. `2` female. |
| birthday | `String`. Optional. Use this parameter to transfer the user's birthday (YYYYMMDD). |
| country | `String`. Optional. Use this parameter to transfer the country of the user. |
| city | `String`. Optional. Use this parameter to transfer the city of the user. |
| street | `String`. Optional. Use this parameter to transfer the street of the user. |
| streetNumber | `String`. Optional. Use this parameter to transfer the house number of the user. |
| category | `Object`. Optional. To create meaningful visitor segments, you can use this parameter to categorize customers. |
| validation | `Boolean`. Optional. Defaults to `false`. `true` Should overwrite existing customer information. |

<a name="product"></a>
### `product`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.product("view", {
     id: "ABC-123",
     cost: 99.90,
     quantity: 2,
     soldOut: false,
     variant: "green",
     parameter: {1: "L"},
     category: {1: "tops", 2: "noname"}
});
```

| Value | Notes |
| --- | --- |
| action | `String`. Required. The products can be transmitted to Webtrekk when: `list` a product is viewed in a catalog, `view` a product is viewed, `basket` a product is placed in the shopping cart and `confirmation` when the cart is purchased. |
| id | `String`. Required. Saves the products stored in the shopping cart. This property must be entered if products are to be measured. |
| cost | `Number`. Optional. Defaults to `0`. Contains the product price ("0" prices are allowed). If you transfer a product more than once (quantity property greater than 1), use the total price instead of the unit price. |
| quantity | `Number`. Optional. Defaults to `0`. Contains product quantity. |
| variant | `String`. Optional. Use this parameter to transfer the variant of the product. |
| soldOut | `Boolean`. Optional. Defaults to `false`. Use this parameter to indicate that the product is sold out or in stock. `true` sold out. `false` in stock. |
| parameter | `Object`. Optional. Using parameters, you can enrich analytical data with your website-specific information and/ or metrics. |
| category | `Object`. Optional. Product categories contain static information about the products. They allow you to group the products by assigning them uniquely to a product and product category. |

<a name="products"></a>
### `products`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.products("view", [{
     id: "ABC-123",
     cost: 99.90,
     quantity: 2,
     soldOut: false,
     variant: "green",
     parameter: {1: "L"},
     category: {1: "tops", 2: "noname"}
}]);
```

| Value | Notes |
| --- | --- |
| action | `String`. Required. The products can be transmitted to Webtrekk when: `list` a product is viewed in a catalog, `view` a product is viewed, `basket` a product is placed in the shopping cart and `confirmation` when the cart is purchased. |
| id | `String`. Required. Saves the products stored in the shopping cart. This property must be entered if products are to be measured. |
| cost | `Number`. Optional. Defaults to `0`. Contains the product price ("0" prices are allowed). If you transfer a product more than once (quantity property greater than 1), use the total price instead of the unit price. |
| quantity | `Number`. Optional. Defaults to `0`. Contains product quantity. |
| variant | `String`. Optional. Use this parameter to transfer the variant of the product. |
| soldOut | `Boolean`. Optional. Defaults to `false`. Use this parameter to indicate that the product is sold out or in stock. `true` sold out. `false` in stock. |
| parameter | `Object`. Optional. Using parameters, you can enrich analytical data with your website-specific information and/ or metrics. |
| category | `Object`. Optional. Product categories contain static information about the products. They allow you to group the products by assigning them uniquely to a product and product category. |

<a name="order"></a>
### `order`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.order({
     value: 120.99,
     id: "M-12345",
     couponValue: 10.00,
     paymentMethod: "paypal",
     shippingService: "dhl",
     shippingSpeed: "express",
     shippingCosts: 4.95,
     grossMargin: 12.95,
     parameter: {5: "bill"}
});
```

| Value | Notes |
| --- | --- |
| value | `String`. Required. The property "value" stores the total order value. This property must be entered if you want to tracke the total order values. |
| id | `String`. Optional. This optional property contains a unique order number (order ID). Using this setting ensures that no orders are counted twice. |
| couponValue | `Number`. Optional. Defaults to `0`. Contains the value of a coupon. Use this parameter if the customer orders with a coupon. |
| paymentMethod | `String`. Optional. Use this parameter to transfer the payment method of the order. |
| shippingService | `String`. Optional. Use this parameter to transfer the shipping service of the order. |
| shippingSpeed | `String`. Optional. Use this parameter to transfer the delivery time of the order. |
| shippingCosts | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the delivery costs of the order. |
| grossMargin | `Number`. Optional. Defaults to `0`. Use this parameter to transfer the margin/ mark-up of the order. |
| orderStatus | `String`. Optional. Use this parameter to transfer the order status. |
| parameter | `Object`. Optional. Using parameters, you can enrich analytical data with your own web site-specific information and/or metrics. |

<a name="session"></a>
### `session`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.session({
     loginStatus: "login",
     parameter: {5: "male"}
});
```

| Value | Notes |
| --- | --- |
| loginStatus | `String`. Optional. Pass the current users login status here. |
| parameter | `Object`. Optional. Session parameters always refer to one complete session (visit). If the value for the parameter is transmitted during a visit several times, only the first or last value is evaluated, based on the configuration of Webtrekk. |

<a name="track"></a>
### `track`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.track(false);
```

| Value | Notes |
| --- | --- |
| keepData | `Boolean`. Optional. Defaults to `false`. After sending the tracking data, the Webtrekk Smart Pixel automatically removes all defined data. If you want to keep the data, set `true` as the first argument, then you can delete the data manually. |

<a name="trackPage"></a>
### `trackPage`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.trackPage(false);
```

| Value | Notes |
| --- | --- |
| keepData | `Boolean`. Optional. Defaults to `false`. After sending the tracking data, the Webtrekk Smart Pixel automatically removes all defined data. If you want to keep the data, set `true` as the first argument, then you can delete the data manually. |

<a name="trackAction"></a>
### `trackAction`

```jsx
import { WebtrekkSmartPixelReact } from "webtrekk-smart-pixel-react";

WebtrekkSmartPixelReact.trackAction(false);
```

| Value | Notes |
| --- | --- |
| keepData | `Boolean`. Optional. Defaults to `false`. After sending the tracking data, the Webtrekk Smart Pixel automatically removes all defined data. If you want to keep the data, set `true` as the first argument, then you can delete the data manually. |

<a name="webtrekkReducer"></a>
## webtrekkReducer

<a name="custom-actions"></a>
### custom actions

```jsx
import React, { useReducer } from "react";
import { WebtrekkSmartPixelReact, webtrekkReducer } from "webtrekk-smart-pixel-react";

const webtrekkCustomReducer = webtrekkReducer({
    "increment": (state, action, reducerValue) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: {1: reducerValue.count + ""}
        });
        WebtrekkSmartPixelReact.trackAction();
    },
    "decrement": (state, action, reducerValue) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: {1: reducerValue.count + ""}
        });
        WebtrekkSmartPixelReact.trackAction();
    }
});

const initialState = {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return {count: state.count + 1};
        case "decrement": return {count: state.count - 1};
        default: throw new Error();
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(webtrekkCustomReducer(reducer), initialState);

    return (
        <div>
            Count: { state.count }
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
        </div>
    );
};

class CounterButton extends React.Component {
    render() {
        return (
            <Counter />
        );
    }
}

export default CounterButton;
```

| Value | Notes |
| --- | --- |
| actions | `Object`. Optional. Extends your own actions and execute custom tracking code after dispatch your action.  |
| arguments0 | `Object`. Your current state. |
| arguments1 | `Object`. Your current action. |
| arguments2 | `Object`. Value of your reducer function. |

<a name="dispatch-with-tracking-data"></a>
### `dispatch` with tracking data

```jsx
import React, { useReducer } from "react";
import { webtrekkReducer } from "webtrekk-smart-pixel-react";

const webtrekkCustomReducer = webtrekkReducer();

const initialState = {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return {count: state.count + 1};
        case "decrement": return {count: state.count - 1};
        default: throw new Error();
    }
};
const Counter = () => {
    const [state, dispatch] = useReducer(webtrekkCustomReducer(reducer), initialState);

    return (
        <div>
            Count: { state.count }
            <button onClick={() => dispatch({
                type: "increment",
                webtrekk: {
                    type: "webtrekk/action",
                    sendInstantly: true,
                    data: {
                        name: "increment",
                        parameter: {1: state.count + ""}
                    }
                }
            })}>+</button>
            <button onClick={() => dispatch({
                type: "decrement",
                webtrekk: {
                    type: "webtrekk/action",
                    sendInstantly: true,
                    data: {
                        name: "decrement",
                        parameter: {1: state.count + ""}
                    }
                }
            })}>-</button>
        </div>
    );
};

class CounterButton extends React.Component {
    render() {
        return (
            <Counter />
        );
    }
}

export default CounterButton;
```

| Value | Notes |
| --- | --- |
| webtrekk.type | `String`. Required. Defines which type of tracking data you are add to the tracking pixel. You can use one of the following types: `webtrekk/init`, `webtrekk/advanced`, `webtrekk/page`, `webtrekk/action`, `webtrekk/session`, `webtrekk/campaign`, `webtrekk/customer`, `webtrekk/product`, `webtrekk/products`, `webtrekk/order`, `webtrekk/extension`, `webtrekk/track`, `webtrekk/trackPage` or `webtrekk/trackAction`. |
| webtrekk.data | `Any`. Required. Defines which data you are add to the tracking pixel. |
|  | `webtrekk/init`. See [init](#init). |
|  | `webtrekk/advanced`. See [advanced](#advanced). |
|  | `webtrekk/page`. See [page](#page). |
|  | `webtrekk/action`. See [action](#action). |
|  | `webtrekk/session`. See [session](#session). |
|  | `webtrekk/campaign`. See [campaign](#campaign). |
|  | `webtrekk/customer`. See [customer](#customer). |
|  | `webtrekk/product`. See [product](#product). |
|  | `webtrekk/products`. See [products](#products). |
|  | `webtrekk/order`. See [order](#order). |
|  | `webtrekk/track`. See [track](#track). |
|  | `webtrekk/trackPage`. See [trackPage](#trackPage). |
|  | `webtrekk/trackAction`. See [trackAction](#trackAction). |
| webtrekk.sendInstantly | `Boolean`. Optional. Defaults to `false`. `true` All added data are instantly tracked (you must not call `track`). |

<a name="webtrekkMiddleware"></a>
## webtrekkMiddleware

<a name="redux-custom-actions"></a>
### custom actions

```jsx
import { createStore, applyMiddleware, compose } from "redux";
import { WebtrekkSmartPixelReact, webtrekkMiddleware } from "webtrekk-smart-pixel-react";

const enhancers = [];
const middleware = [webtrekkMiddleware({
    "increment": (state, action) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: {1: state.count + ""}
        });
        WebtrekkSmartPixelReact.trackAction();
    },
    "decrement": (state, action) => {
        WebtrekkSmartPixelReact.action({
            name: action.type,
            parameter: {1: state.count + ""}
        });
        WebtrekkSmartPixelReact.trackAction();
    }
})];
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": state.count + 1; return state;
        case "decrement": state.count - 1; return state;
        default: return state;
    }
};

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, composedEnhancers);

store.dispatch({type: "increment"});
```

| Value | Notes |
| --- | --- |
| actions | `Object`. Optional. Extends your own actions and execute custom tracking code after dispatch your action.  |
| arguments0 | `Object`. Your current state. |
| arguments1 | `Object`. Your current action. |

<a name="redux-dispatch-with-tracking-data"></a>
### `dispatch` with tracking data

```jsx
import { createStore, applyMiddleware, compose } from "redux";
import { WebtrekkSmartPixelReact, webtrekkMiddleware } from "webtrekk-smart-pixel-react";

const enhancers = [];
const middleware = [webtrekkMiddleware()];
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": state.count + 1; return state;
        case "decrement": state.count - 1; return state;
        default: return state;
    }
};

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, composedEnhancers);

store.dispatch({
    type: "increment",
    webtrekk: {
        type: "webtrekk/action",
        sendInstantly: true,
        data: {
            name: "increment",
            parameter: {1: store.getState().count + ""}
        }
    }
});
```

| Value | Notes |
| --- | --- |
| webtrekk.type | `String`. Required. Defines which type of tracking data you are add to the tracking pixel. You can use one of the following types: `webtrekk/init`, `webtrekk/advanced`, `webtrekk/page`, `webtrekk/action`, `webtrekk/session`, `webtrekk/campaign`, `webtrekk/customer`, `webtrekk/product`, `webtrekk/products`, `webtrekk/order`, `webtrekk/extension`, `webtrekk/track`, `webtrekk/trackPage` or `webtrekk/trackAction`. |
| webtrekk.data | `Any`. Required. Defines which data you are add to the tracking pixel. |
|  | `webtrekk/init`. See [init](#init). |
|  | `webtrekk/advanced`. See [advanced](#advanced). |
|  | `webtrekk/page`. See [page](#page). |
|  | `webtrekk/action`. See [action](#action). |
|  | `webtrekk/session`. See [session](#session). |
|  | `webtrekk/campaign`. See [campaign](#campaign). |
|  | `webtrekk/customer`. See [customer](#customer). |
|  | `webtrekk/product`. See [product](#product). |
|  | `webtrekk/products`. See [products](#products). |
|  | `webtrekk/order`. See [order](#order). |
|  | `webtrekk/track`. See [track](#track). |
|  | `webtrekk/trackPage`. See [trackPage](#trackPage). |
|  | `webtrekk/trackAction`. See [trackAction](#trackAction). |
| webtrekk.sendInstantly | `Boolean`. Optional. Defaults to `false`. `true` All added data are instantly tracked (you must not call `track`). |
