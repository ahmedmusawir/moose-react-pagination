import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './containers/Posts';
import EditPost from './containers/EditPost';
import AddPost from './containers/AddPost';
import Home from './components/Home';
import NotFound404 from './components/NotFound404';
// import SamplePagination from './containers/SamplePagination';

class App extends Component {
  state = {
    branding: 'React Redux Starter'
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="contact-context-app">
            {/* <Header branding={this.state.branding} /> */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/add" component={AddPost} />
                <Route exact path="/posts/edit/:id" component={EditPost} />
                <Route component={NotFound404} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
