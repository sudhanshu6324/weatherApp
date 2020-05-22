import * as React from "react";

type MyProps = {
    day: string,
    todayWeather: string,
    minTemperature: string,
    maxTemperature: string
};

type MyState = {
    day: string,
    todayWeather: string,
    minTemperature: string,
    maxTemperature: string
};

type Props = {
    day: string
}

type TitleProps = {
    titleOfCard: string
}
type TitleState = {
    titleOfCard: string
}
type FooterOfCardProps = {
    minTemperature: string,
    maxTemperature: string
}

type FooterOfCardState = {
    minTemperature: string,
    maxTemperature: string
}

export class Title extends React.Component<TitleProps, TitleState>{
    state: TitleState = {
        titleOfCard: this.props.titleOfCard
    }
    render() {
        return <p> {this.state.titleOfCard} </p>
    }
}

export class FooterOfCard extends React.Component<FooterOfCardProps, FooterOfCardState> {
    state: FooterOfCardState = {
        minTemperature: this.props.minTemperature,
        maxTemperature: this.props.maxTemperature
    }
    render() {
        return (
            <div>
                <Title titleOfCard={this.props.minTemperature}></Title>
                <Title titleOfCard={this.props.maxTemperature}></Title>
            </div>
        )
    }
}
export class Card extends React.Component<MyProps, MyState> {
    state: MyState = {
        day: this.props.day,
        todayWeather: this.props.todayWeather,
        minTemperature: this.props.minTemperature,
        maxTemperature: this.props.maxTemperature
    };

    render() {
        const imgPath = process.env.PUBLIC_URL + '/img/' + this.state.todayWeather + '.png';
        return (
            <div className="Card" >
                <Title titleOfCard={this.state.day}></Title>
                <img src={imgPath} alt={this.state.todayWeather} />;
                <FooterOfCard
                    minTemperature={this.state.minTemperature}
                    maxTemperature={this.state.maxTemperature}
                ></FooterOfCard>
            </div>
        );
    }
}

