import { FontWeights, mergeStyleSets, getTheme } from "office-ui-fabric-react";
const theme = getTheme();
export const weatherStyles = mergeStyleSets({
  buttonArea: {
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center",
    margin: "0 100px",
    minWidth: 130,
    height: 32,
  },
  callout: {
    maxWidth: 1000,
  },
  header: {
    padding: "108px 104px 102px",
  },
  title: [
    theme.fonts.xLarge,
    {
      margin: 100,
      fontWeight: FontWeights.semilight,
    },
  ],
  inner: {
    height: "100%",
    padding: "0 24px 20px",
  },
});
