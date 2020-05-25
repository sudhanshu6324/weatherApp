import * as React from "react";
import { WeatherData } from "./CustomCard";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "office-ui-fabric-react/lib/DetailsList";
import { IDocument, DetailsListImageStyle } from "./WeatherCalloutStyles";

export type WeatherCalloutDetailsProps = {
  items: WeatherData[];
  isCalloutVisible: boolean;
  toggleIsCalloutVisible(): void;
  target: any;
};

export class WeatherCalloutDetailsList extends React.Component<
  WeatherCalloutDetailsProps
> {
  columns: IColumn[] = [
    {
      key: "column1",
      name: "Time",
      ariaLabel: "Temperature recorded at varuios times of the day",
      iconName: "Page",
      fieldName: "datetime",
      minWidth: 70,
      maxWidth: 1000,
      isResizable: true,
      onRender: (item: IDocument) => {
        let hour = parseInt(item.datetime.substr(11, 2));
        let minute = item.datetime.substr(14, 2);
        let meridian = "AM";
        if (hour >= 12) {
          meridian = "PM";
        }
        if (hour > 12) {
          hour -= 12;
        }
        let prefix = "";
        if (hour <= 9) {
          prefix = "0";
        }
        return prefix + hour.toString() + " : " + minute + " " + meridian;
      },
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 130,
      maxWidth: 150,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Temperature ",
      fieldName: "temp",
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column4",
      name: "Icon",
      fieldName: "icon",
      minWidth: 70,
      maxWidth: 200,
      isResizable: true,
      onRender: (item: IDocument) => {
        return (
          <img
            src={process.env.PUBLIC_URL + "/img/" + item.icon + ".png"}
            className={DetailsListImageStyle.fileIconImg}
            alt={item.description}
          />
        );
      },
    },
  ];

  render() {
    return (
      <DetailsList
        items={this.props.items}
        compact={true}
        columns={this.columns}
        selectionMode={SelectionMode.none}
        setKey="none"
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
      />
    );
  }
}
