import * as React from "react";
import { ActionButton, Text } from "office-ui-fabric-react";
import { Card } from "@uifabric/react-cards";
import {
  descriptionTextStyles,
  getBackgroundImageCardSectionStyles,
  dateTextStyles,
  subduedTextStyles,
  actionButtonStyles1,
  actionButtonStyles2,
  cardTokens,
  backgroundImageCardSectionTokens,
  attendantsCardSectionTokens,
} from "./StyleTokes";
import { getDayString } from "./Util";

export type WeatherData = {
  datetime: string;
  temp: number;
  description: string;
  icon: string;
};

type CustomCardProps = {
  todayWeatherData: WeatherData[];
  isActive: boolean;
  key1: number;
  activateMe(key1: number): void;
};

type CustomCardState = {
  minTemerature: number;
  maxTemperature: number;
};

export class CustomCard extends React.Component<
  CustomCardProps,
  CustomCardState
> {
  static defaultProps = { key1: 1 };
  constructor(props: CustomCardProps) {
    super(props);
    let mini = 100;
    let maxi = 0;
    this.props.todayWeatherData.forEach((hour) => {
      mini = hour.temp < mini ? hour.temp : mini;
      maxi = hour.temp > maxi ? hour.temp : maxi;
    });
    this.state = {
      minTemerature: mini,
      maxTemperature: maxi,
    };
  }

  public render(): JSX.Element {
    return (
      <Card
        aria-label="Card for showing daily weather forecast"
        onClick={() => {
          this.props.activateMe(this.props.key1);
        }}
        tokens={cardTokens}
      >
        <Card.Section
          fill
          verticalAlign="end"
          styles={getBackgroundImageCardSectionStyles(
            this.props.todayWeatherData[0].icon
          )}
          tokens={backgroundImageCardSectionTokens}
        >
          <Text variant="superLarge" styles={dateTextStyles}>
            {getDayString(
              new Date(
                this.props.todayWeatherData[0].datetime.substr(0, 10)
              ).getDay()
            )}
          </Text>
        </Card.Section>
        <Card.Section>
          <Text variant="small" styles={subduedTextStyles}>
            Weather Description
          </Text>
          <Text styles={descriptionTextStyles}>
            {this.props.todayWeatherData[0].description}
          </Text>
        </Card.Section>

        <Card.Section horizontal tokens={attendantsCardSectionTokens}>
          <ActionButton
            text={`Min Temp ${this.state.minTemerature}`}
            styles={actionButtonStyles1}
          />
          <ActionButton
            text={`Max Temp ${this.state.maxTemperature}`}
            styles={actionButtonStyles2}
          />
        </Card.Section>
      </Card>
    );
  }
}
