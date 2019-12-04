import React from "react";

import { TikrowServiceConsumer } from "../tikrow-servise-context";

const withDataService = (Wrapped, mapMethodsToProps) => {
  console.log("props", mapMethodsToProps);
  return props => {
    return (
      <TikrowServiceConsumer>
        {tikrowService => {
          const serviseProps = mapMethodsToProps(tikrowService);
          return <Wrapped {...props} {...serviseProps}/>;
        }}
      </TikrowServiceConsumer>
    );
  };
};
export default withDataService;
