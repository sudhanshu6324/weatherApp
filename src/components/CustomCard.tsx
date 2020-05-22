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

type CustomCardProps = {
  todayWeather: string;
  minTemperature: number;
  maxTemperature: number;
  isActive: boolean;
  description: string;
  datetime: string;
  key1: number;
  activateMe(key1: number): void;
};

export class CustomCard extends React.Component<CustomCardProps> {
  static defaultProps = { key1: 1 };

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
          styles={getBackgroundImageCardSectionStyles(this.props.todayWeather)}
          tokens={backgroundImageCardSectionTokens}
        >
          <Text variant="superLarge" styles={dateTextStyles}>
            {getDayString(new Date(this.props.datetime.substr(0, 10)).getDay())}
          </Text>
        </Card.Section>
        <Card.Section>
          <Text variant="small" styles={subduedTextStyles}>
            Weather Description
          </Text>
          <Text styles={descriptionTextStyles}>{this.props.description}</Text>
        </Card.Section>

        <Card.Section horizontal tokens={attendantsCardSectionTokens}>
          <ActionButton
            text={`Min Temp ${this.props.minTemperature}`}
            styles={actionButtonStyles1}
          />
          <ActionButton
            text={`Max Temp ${this.props.maxTemperature}`}
            styles={actionButtonStyles2}
          />
        </Card.Section>
      </Card>
    );
  }
}
