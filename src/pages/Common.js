import React from "react";
import { Route, useRouteMatch, useLocation } from "react-router-dom";
import CustomLink from "../components/CustomLink";
import Todo from "./Todo";

function Common(props) {
  let location = useLocation();
  console.log("location", location);
  console.log("props", props);
  const { path, url } = useRouteMatch();
  console.log({ path }); // old way is match.path
  console.log({ url }); // old way is match.url

  return (
    <div>
      <h1>Common page for multiple routes</h1>
      <p>Array route 1</p>
      <p>Array route 2</p>
      <p>{location.pathname}</p>

      <div>
        <CustomLink
          activeOnlyWhenExact={true}
          to={`${url}/custom-link-1`}
          label="custom-link-1"
        />
        <CustomLink to={`${url}/custom-link-2`} label="custom-link-2" />
      </div>
      <div>
        <Route exact path={`${path}/:id`} component={Todo} />
        <Route
          exact
          path={path}
          render={() => <h3>Please select custom link</h3>}
        />
      </div>
    </div>
  );
}

export default Common;
