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

// export async function http(address: string): Promise<any> {
//   return new Promise(async (resolve: any, reject: any) => {
//     const response: any = await fetch(address);
//     const data = await response.json();
// let weatherHash: WeatherHash = {};
// for (var i = 0; i < data.data.length; i++) {
//   let item: any = data.data[i];
//   let tempItem: WeatherData = {
//     datetime: item.datetime,
//     temp: item.temp,
//     description: item.weather.description,
//     icon: item.weather.icon,
//   };
//   let date: string = item.datetime.substr(0, 10);
//   console.log(date);
//   weatherHash[date].push(tempItem);
// }
// let result: WeatherData[][] = [];
// Object.keys(weatherHash).forEach((key) => {
//   let tempResult: WeatherData[] = [];
//   let mini: number = 100;
//   let maxi: number = 0;
//   weatherHash[key].forEach((item) => {
//     mini = item.temp < mini ? item.temp : mini;
//     maxi = item.temp > maxi ? item.temp : maxi;
//     tempResult.push(item);
//   });
//       result.push(tempResult);
//     });
//     resolve(data);
//   });
// }

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
        let weatherHash: Map<string, WeatherData[]> = new Map<
          string,
          WeatherData[]
        >();
        for (var i = 0; i < data.data.length; i++) {
          let item: any = data.data[i];
          let tempItem: WeatherData = {
            datetime: item.datetime,
            temp: item.temp,
            description: item.weather.description,
            icon: item.weather.icon,
          };
          let date: string = item.datetime.substr(0, 10);
          weatherHash.set(weatherHash.get(date).push(tempItem));
        }

        let result: WeatherData[][] = [];
        Object.keys(weatherHash).forEach((key) => {
          let tempResult: WeatherData[] = [];
          let mini: number = 100;
          let maxi: number = 0;
          weatherHash[key].forEach((item) => {
            mini = item.temp < mini ? item.temp : mini;
            maxi = item.temp > maxi ? item.temp : maxi;
            tempResult.push(item);
          });
          result.push(tempResult);
        });
        resolve(result);
      });
  });
}
