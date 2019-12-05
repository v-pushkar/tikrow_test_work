import React, { Component } from "react";
import Spiner from "../UI/spiner";
import ErrorIndicator from "../UI/errorIndicator";

const withDataList = View => {
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
      this.props.getData
        .getFetchItemDetails(this.props.id)
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({ hasError: true });
        });
    }

    componentDidCatch() {
      this.setState({
        hasError: true
      });
    }

    render() {
      const { data, hasError } = this.state;
      if (!data) {
        return (
          <div>
            <Spiner />
          </div>
        );
      }
      if (hasError) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withDataList;
