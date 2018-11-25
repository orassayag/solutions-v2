import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as containers from '../../containers';
import { Auxiliary, Layout } from '../../hoc';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/box-center-div-horizontal" exact component={containers.BoxCenterDivHorizontal} />
        <Route path="/box-center-div-horizontal-vertical" exact component={containers.BoxCenterDivHorizontalVertical} />
        <Route path="/box-center-div-vertical" exact component={containers.BoxCenterDivVertical} />
        <Route path="/footer-menu" exact component={containers.FooterMenu} />
        <Route path="/form-multi-flex" exact component={containers.FormMultiFlex} />
        <Route path="/form-login" exact component={containers.FormLogin} />
        <Route path="/table-flexbox-top-titles" exact component={containers.TableFlexBoxTopTitles} />
        <Route path="/items-side" exact component={containers.ItemsSide} />
        <Route path="/items-rows" exact component={containers.ItemsRows} />
        <Route path="/top-menu-flex" exact component={containers.TopMenuFlex} />
        <Route path="/" exact component={containers.BoxCenterDivHorizontal} />
        <Route path='*' exact component={containers.BoxCenterDivHorizontal} />
      </Switch>
    );

    return (
      <Auxiliary>
        <Layout>
          {routes}
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;