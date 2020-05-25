import * as React from "react";
import {
  SearchBox,
  ISearchBoxStyles,
} from "office-ui-fabric-react/lib/SearchBox";
import { CardList } from "./CardList";

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };
type MainAppStates = {
  location: string;
};

export class MainApp extends React.Component<{}, MainAppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      location: "pune",
    };
    this.setState = this.setState.bind(this);
  }
  public changeLocation(newLocation: string) {
    console.log("helel");
    this.setState((prevState) => ({
      location: newLocation,
    }));
  }
  public render() {
    return (
      <>
        <SearchBox
          styles={searchBoxStyles}
          placeholder="Search"
          onEscape={(ev) => {
            console.log("Custom onEscape Called");
          }}
          onClear={(ev) => {
            console.log("Custom onClear Called");
          }}
          onChange={(_, newValue) =>
            console.log("SearchBox onChange fired: " + newValue)
          }
          onSearch={this.changeLocation.bind(this)}
        />
        <CardList location={this.state.location} />
      </>
    );
  }
}
