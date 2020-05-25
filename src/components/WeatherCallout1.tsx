import * as React from "react";
import { Callout } from "office-ui-fabric-react";
import { weatherStyles } from "./weatherStyles";
import { WeatherData } from "./CustomCard";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "office-ui-fabric-react/lib/DetailsList";
type WeatherCalloutProps = {
  items: WeatherData[];
  isCalloutVisible: boolean;
  toggleIsCalloutVisible(): void;
};

type WeatherCalloutStates = {
  isCalloutVisible: boolean;
};

interface IDocument {
  datetime: string;
  description: string;
  temp: string;
  icon: string;
}

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "160px",
    maxWidth: "1600px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px",
  },
  selectionDetails: {
    marginBottom: "200px",
  },
});

export class WeatherCallout extends React.Component<
  WeatherCalloutProps,
  WeatherCalloutStates
> {
  columns: IColumn[] = [
    {
      key: "column1",
      name: "Time",
      ariaLabel: "Temperature recorded at varuios times of the day",
      iconName: "Page",
      fieldName: "time",
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Temperature (C)",
      fieldName: "temp",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column4",
      name: "Image",
      fieldName: "icon",
      minWidth: 70,
      maxWidth: 2000,
      isResizable: true,
      onRender: (item: IDocument) => {
        return (
          <img
            src={item.icon}
            className={classNames.fileIconImg}
            alt={item.description}
          />
        );
      },
      isPadded: true,
    },
  ];
  labelId = "callout-labelvkdfov";
  descriptionId = "callout-descriptionfodifvdvmdov";
  render() {
    return (
      <>
        {this.props.isCalloutVisible && (
          <Callout
            className={weatherStyles.callout}
            ariaLabelledBy={this.labelId}
            ariaDescribedBy={this.descriptionId}
            role="alertdialog"
            gapSpace={0}
            target={`.${weatherStyles.buttonArea}`}
            onDismiss={this.props.toggleIsCalloutVisible}
            setInitialFocus
          >
            mvofmvdfmvldf
            <div className={weatherStyles.header}>></div>
            <div className={weatherStyles.inner}>
              <DetailsList
                items={this.props.items}
                compact={false}
                columns={this.columns}
                selectionMode={SelectionMode.none}
                setKey="none"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
              />
            </div>
          </Callout>
        )}
      </>
    );
  }
}
