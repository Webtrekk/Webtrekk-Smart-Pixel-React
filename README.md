# Webtrekk Smart Pixel React

[Site](https://www.webtrekk.com/) |
[Docs](https://docs.webtrekk.com/display/WSP/) |
[Support](https://support.webtrekk.com/) |
[Changelog](./CHANGELOG.md) |

## Installation

Using npm:

```shell
$ npm i webtrekk-smart-pixel-react
```

## Integration

* Create a class and use this as interface between your application and the Webtrekk Smart Pixel

```js
// load the minified build
import webtrekkSmartPixelReact from "webtrekk-smart-pixel-react";

// load the debug build
import webtrekkSmartPixelReact from "webtrekk-smart-pixel-react/debug";

/**
 * @constructor
 */
var ApplicationTracking = function() {
	// ...
};

export default new ApplicationTracking();
```

* Implement all your tracking functionalities which you need for the application

```js
var ApplicationTracking = function() {
	this.init = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.init.set({
                trackId: '123451234512345',
                trackDomain: 'data.wt-eu02.net'
            });
        });
    };

    this.page = function(name, data) {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.page.data.set(name, data);
        });
    };

    this.action = function(data) {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.action.data.set(data);
        });
    };

    this.track = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.track();
        });
    };

    this.trackPage = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.trackPage();
        });
    };

    this.trackAction = function() {
        webtrekkSmartPixelReact.call(function(wtSmart) {
            wtSmart.trackAction();
        });
    };
};
```

* Import *ApplicationTracking* in all your **Components** and **Pages**, which should be tracked or provide tracking data

```js
// components/App.js

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import applicationTracking from "./global/ApplicationTracking";

class App extends Component {
    componentWillMount() {
        applicationTracking.init();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
```

```js
// components/Home/Home.js

import React, { Component } from "react";

import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import applicationTracking from "../global/ApplicationTracking";

class Home extends Component {
    componentDidMount() {
        applicationTracking.page("en.index");
    }

    render() {
        return (
            <div>
              <HomeHeader />
              <HomeContent />
              <HomeFooter />
            </div>
        );
    }
}

export default Home;
```
