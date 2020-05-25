import { WeatherData } from "./CustomCard";

export function getDayString(num: number): string {
  switch (num) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
  return "hello";
}

export interface WeatherHash {
  [date: string]: WeatherData[];
}

export function getWeatherData(): Promise<any> {
  // this.UserList();
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.weatherbit.io/v2.0/forecast/hourly?city=kolkata&key=63eade06d0b54c00a282e0b047200de0&hours=48"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let tempResult: WeatherData[] = [];
        for (var i = 0; i < data.data.length; i++) {
          let item: any = data.data[i];
          let tempItem: WeatherData = {
            datetime: item.datetime,
            temp: item.temp,
            description: item.weather.description,
            icon: item.weather.icon,
          };
          tempResult.push(tempItem);
        }
        const finalResult: any = tempResult.reduce(function (r, a) {
          let date: string = a.datetime.substr(0, 10);
          r[date] = r[date] || [];
          r[date].push(a);
          return r;
        }, Object.create(null));

        let finalArray: WeatherData[] = [];
        Object.keys(finalResult).forEach((key) => {
          finalArray.push(finalResult[key]);
        });
        resolve(finalArray);
      });
  });
}
