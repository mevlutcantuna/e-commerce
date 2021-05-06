//Components
import LoginPage from "./components/LoginPage/LoginPage";
import ProductsPage from "./components/Products/ProductsPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";

//Router
import { Route, Switch, Router } from "react-router";
import { routes } from "./router/routes";

//history
import { createBrowserHistory } from "history";
import BasketPage from "./components/BasketPage/BasketPage";
const history = createBrowserHistory();

const handleActivePage = (activePage) => {
  history.push(activePage);
};

function App() {
  //is it login or not
  const loginLocal = JSON.parse(localStorage.getItem("login"));

  return (
    <div className="App">
      {loginLocal === null && history.push(routes.login.path)}
      {history.location.pathname === "/" && history.push(routes.products.path)}

      <Router history={history}>
        <Switch>
          <Route exact path={routes.login.path}>
            <LoginPage handleActivePage={handleActivePage} />
          </Route>
          <Route exact path={routes.products.path}>
            <ProductsPage handleActivePage={handleActivePage} />
          </Route>
          <Route path={routes.productDetail.path}>
            <ProductDetailPage handleActivePage={handleActivePage} />
          </Route>
          <Route path={routes.basket.path}>
            <BasketPage handleActivePage={handleActivePage} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
