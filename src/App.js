import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Router,
} from "react-router-dom";

import Notification from './components/Notification/Notification';
import IngredientQueryPage from './components/IngredientQueryPage/IngredientQueryPage';
import IngredientRecipesPage from './components/IngredientRecipesPage/IngredientRecipesPage';

import { store, history } from "./data/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Notification />
        <Switch>
          <Route exact path="/" component={IngredientQueryPage} />
          <Route path="/results/:ingredient/recipes" component={IngredientRecipesPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
