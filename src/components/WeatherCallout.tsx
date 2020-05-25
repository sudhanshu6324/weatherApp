import * as React from "react";
import {
  DefaultButton,
  Callout,
  getTheme,
  FontWeights,
  mergeStyleSets,
  Text,
} from "office-ui-fabric-react";
import { WeatherData } from "./CustomCard";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "office-ui-fabric-react/lib/DetailsList";
const theme = getTheme();
interface IDocument {
  datetime: string;
  description: string;
  temp: string;
  icon: string;
}
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center",
    margin: "0 100px",
    minWidth: 130,
    height: 32,
  },
  callout: {
    maxWidth: 20000,
  },
  header: {
    padding: "18px 24px 12px",
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  inner: {
    height: "100%",
    padding: "0 24px 20px",
  },
  actions: {
    position: "relative",
    marginTop: 20,
    width: "100%",
    whiteSpace: "nowrap",
  },
  subtext: [
    theme.fonts.small,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  link: [
    theme.fonts.medium,
    {
      color: theme.palette.neutralPrimary,
    },
  ],
});

type WeatherCalloutProps = {
  items: WeatherData[];
  isCalloutVisible: boolean;
  toggleIsCalloutVisible(): void;
  target: any;
};

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
    maxHeight: "60px",
    maxWidth: "60px",
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
    marginBottom: "20px",
  },
});

export class WeatherCallout extends React.Component<WeatherCalloutProps> {
  columns: IColumn[] = [
    {
      key: "column1",
      name: "Time",
      ariaLabel: "Temperature recorded at varuios times of the day",
      iconName: "Page",
      fieldName: "datetime",
      minWidth: 50,
      maxWidth: 1000,
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
      maxWidth: 200,
      isResizable: true,
      onRender: (item: IDocument) => {
        return (
          <img
            src={process.env.PUBLIC_URL + "/img/" + item.icon + ".png"}
            className={classNames.fileIconImg}
            alt={item.description}
          />
        );
      },
      isPadded: true,
    },
  ];

  render() {
    return (
      <>
        <div className={styles.buttonArea}>
          {/* <DefaultButton
            // onClick={toggleIsCalloutVisible}
            ///text={isCalloutVisible ? "Hide Callout" : "Show Callout"}
            text='isCalloutVisible : "Show Callout"'
          /> */}
        </div>
        {this.props.isCalloutVisible && (
          <Callout
            className={styles.callout}
            role="alertdialog"
            gapSpace={0}
            target={this.props.target}
            onDismiss={this.props.toggleIsCalloutVisible}
            setInitialFocus
          >
            <div className={styles.header}>
              <Text className={styles.title}>
                Today's Weather thoughtout the day
              </Text>
            </div>
            <div className={styles.inner}>
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
