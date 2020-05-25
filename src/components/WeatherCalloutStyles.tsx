import * as React from "react";
import { getTheme, FontWeights, mergeStyleSets } from "office-ui-fabric-react";
import { WeatherData } from "./CustomCard";
export const calloutStyle: React.CSSProperties = {
  overflow: "hidden",
  maxHeight: 2000,
};
const theme = getTheme();
export interface IDocument extends WeatherData {}

export const styles = mergeStyleSets({
  callout: {
    maxWidth: 3000,
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
    padding: "0 14px 14px",
  },
});

export const DetailsListImageStyle = mergeStyleSets({
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "60px",
    maxWidth: "60px",
  },
});
