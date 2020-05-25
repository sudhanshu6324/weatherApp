import * as React from "react";
import { Callout, Text } from "office-ui-fabric-react";
import { WeatherData } from "./CustomCard";
import { styles, calloutStyle } from "./WeatherCalloutStyles";
import { WeatherCalloutDetailsList } from "./WeatheCalloutDetailsList";

export interface IDocument {
  datetime: string;
  description: string;
  temp: string;
  icon: string;
}

export type WeatherCalloutProps = {
  items: WeatherData[];
  isCalloutVisible: boolean;
  toggleIsCalloutVisible(): void;
  target: any;
};

export class WeatherCallout extends React.Component<WeatherCalloutProps> {
  render() {
    return (
      <>
        {this.props.isCalloutVisible && (
          <Callout
            className={styles.callout}
            role="alertdialog"
            gapSpace={2}
            target={this.props.target}
            onDismiss={this.props.toggleIsCalloutVisible}
            setInitialFocus
            style={calloutStyle}
          >
            <div className={styles.header}>
              <Text className={styles.title}>
                Today's Weather thoughtout the day
              </Text>
            </div>
            <div className={styles.inner}>
              <WeatherCalloutDetailsList {...this.props} />
            </div>
          </Callout>
        )}
      </>
    );
  }
}
