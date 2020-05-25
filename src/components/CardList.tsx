import * as React from "react";
import { CustomCard } from "./CustomCard";
import { Stack, IStackTokens, Async } from "office-ui-fabric-react";
import { getWeatherData } from "./Util";
import { WeatherData } from "./CustomCard";

const sectionStackTokens: IStackTokens = { childrenGap: 30 };

export type CardListStates = {
  activeKey: number;
  weatherData: WeatherData[][];
  location: string;
};
export type CardListProps = {
  location: string;
};
export class CardList extends React.Component<CardListProps, CardListStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeKey: 1,
      weatherData: [],
      location: this.props.location,
    };
  }

  public async componentRendered(newLocation: string) {
    let tempData = await getWeatherData(newLocation);
    this.setState((prevState) => ({
      weatherData: tempData,
      location: newLocation,
    }));
  }

  public setActiveCard(key: number) {
    this.setState((prevState) => ({ activeKey: key }));
  }

  render() {
    // this.componentRendered();
    if (this.props.location !== this.state.location) {
      this.componentRendered(this.props.location);
    }
    return (
      <Stack horizontal tokens={sectionStackTokens}>
        {this.state.weatherData.map((dummyDay, index) => (
          <CustomCard
            key1={index}
            isActive={this.state.activeKey === index}
            activateMe={() => this.setActiveCard}
            todayWeatherData={dummyDay}
          />
        ))}
      </Stack>
    );
  }
}
