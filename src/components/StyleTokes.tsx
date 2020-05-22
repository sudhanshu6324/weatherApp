import { IButtonStyles, ITextStyles } from "office-ui-fabric-react";
import {
  ICardTokens,
  ICardSectionStyles,
  ICardSectionTokens,
} from "@uifabric/react-cards";

import { FontWeights } from "@uifabric/styling";

export const descriptionTextStyles: ITextStyles = {
  root: {
    color: "#333333",
    fontWeight: FontWeights.semibold,
  },
};

export function getBackgroundImageCardSectionStyles(
  imagePath: string
): ICardSectionStyles {
  const imgPath = process.env.PUBLIC_URL + "/img/" + imagePath + ".png";
  return {
    root: {
      backgroundImage: `url(${imgPath})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      height: 144,
    },
  };
}

export const dateTextStyles: ITextStyles = {
  root: {
    color: "#505050",
    fontWeight: 600,
  },
};
export const subduedTextStyles: ITextStyles = {
  root: {
    color: "#666666",
  },
};
export const actionButtonStyles1: IButtonStyles = {
  root: {
    border: "none",
    color: "green",
    height: "auto",
    minHeight: 0,
    minWidth: 0,
    padding: 0,

    selectors: {
      ":hover": {
        color: "green",
      },
    },
  },
  textContainer: {
    fontSize: 18,
    fontWeight: FontWeights.semibold,
  },
};
export const actionButtonStyles2: IButtonStyles = {
  root: {
    border: "none",
    color: "red",
    height: "auto",
    minHeight: 0,
    minWidth: 0,
    padding: 0,

    selectors: {
      ":hover": {
        color: "red",
      },
    },
  },
  textContainer: {
    fontSize: 18,
    fontWeight: FontWeights.semibold,
  },
};

export const cardTokens: ICardTokens = { childrenMargin: 12 };
export const backgroundImageCardSectionTokens: ICardSectionTokens = {
  padding: 12,
};
export const attendantsCardSectionTokens: ICardSectionTokens = {
  childrenGap: 6,
};
