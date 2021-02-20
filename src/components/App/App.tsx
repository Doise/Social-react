import { ThemeProvider } from "@material-ui/core";
import { useTheme } from "../../theme/Theme";
import { Dashboard } from "../Dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "../Profile/Profile";
import { AuthProvider } from "../Auth/AuthProvider/AuthProvider";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function App() {
  const theme = useTheme();

  const httpLink = new HttpLink({
    uri: "https://peaceful-citadel-72872.herokuapp.com/",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
