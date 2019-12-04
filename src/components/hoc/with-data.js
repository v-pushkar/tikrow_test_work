import React, { Component } from "react";
import Spiner from "../UI/spiner";
import ErrorIndicator from "../UI/errorIndicator";

const withData = View => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false
    };
    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }
    componentDidMount() {
      this.update();      
    }

    update() {
      const { getData } = this.props;
      getData.getFetchAll()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.state({ hasError: true });
        });
    }

    componentDidCatch() {
      this.setState({
        isError: true
      });
    }

    render() {
      const { data, hasError } = this.state;
      if (!data) {
        return <Spiner />;
      }
      if (hasError) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
