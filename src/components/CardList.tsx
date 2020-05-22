import * as React from "react";
import { CustomCard } from "./CustomCard";
import { Stack, IStackTokens } from "office-ui-fabric-react";
import { getWeatherData } from "./Util";

const sectionStackTokens: IStackTokens = { childrenGap: 30 };
export type WeatherData = {
  datetime: string;
  temp: number;
  description: string;
  icon: string;
};

export type CardListStates = {
  activeKey: number;
  weatherData: WeatherData[];
};
export type CardListProps = {};
export class CardList extends React.Component<CardListProps, CardListStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeKey: 1,
      weatherData: [],
    };
  }

  public async componentDidMount() {
    let tempData = await getWeatherData();
    this.setState((prevState) => ({ weatherData: tempData }));
  }

  public setActiveCard(key: number) {
    this.setState((prevState) => ({ activeKey: key }));
  }

  render() {
    return (
      <Stack horizontal tokens={sectionStackTokens}>
        {this.state.weatherData.map((dummyDay, index) => (
          <CustomCard
            minTemperature={dummyDay.temp}
            maxTemperature={dummyDay.temp + 5}
            todayWeather={dummyDay.icon}
            key1={index}
            isActive={this.state.activeKey === index}
            activateMe={() => this.setActiveCard}
            description={dummyDay.description}
            datetime={dummyDay.datetime}
          />
        ))}
      </Stack>
    );
  }
}
