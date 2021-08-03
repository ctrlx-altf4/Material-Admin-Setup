import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Loader from "components/Loader";
import Navbar from "components/Navbar";

import routes from "routes";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Breadcrumb from "components/Breadcrumb";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Container size="lg">
        <Box my={4}>
          <Breadcrumb />
          <Box mt={2}>
            <Switch>
              {routes.map((e) => {
                if (!e.component) return null;
                return (
                  <Route
                    key={e.path}
                    exact
                    path={e.path}
                    component={e.component}
                  />
                );
              })}
              <Redirect to="/" />
            </Switch>
          </Box>
        </Box>
      </Container>
    </Suspense>
  );
}

export default App;
