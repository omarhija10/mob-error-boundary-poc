import { Component, ErrorInfo, ReactNode } from "react";
import { View } from "react-native";

interface Props {
  children: ReactNode;
  catchErrors: "always" | "dev" | "prod" | "never";
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (!this.isEnabled()) {
      return;
    }
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
  }

  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>
  ): boolean {
    return nextState.error !== this.state.error;
  }

  isEnabled(): boolean {
    return (
      this.props.catchErrors === "always" ||
      (this.props.catchErrors === "dev" && __DEV__) ||
      (this.props.catchErrors === "prod" && !__DEV__)
    );
  }

  render() {
    return this.isEnabled() && this.state.error ? (
      // You can render any custom fallback UI
      <View style={{ flex: 1, backgroundColor: "rex" }}></View>
    ) : (
      this.props.children
    );
  }
}
