import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainArticles from "./components/MainArticles";
import SubArticles from "./components/subArticles";
import SideArticles from "./components/sideArticles";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    userLat: 0,
    userLon: 0,
    articles: [],
    subArticles: [],
    sideArticles: [],
    weather: {
      location: "",
      currentTemp: 0,
      minTemp: 0,
      maxTemp: 0,
      description: ""
    }
  };

  roundTempDown = tempNum => {
    const down = Math.floor(tempNum);
    return down;
  };

  componentDidMount() {
    const newsApiKey = "272aff454dc34852acfba922ddc343be";
    const weatherApiKey = `111a75a562f81c388b3addd4a8e6b2ea`;

    navigator.geolocation.getCurrentPosition(
      position => {
        let userLat = position.coords.latitude;
        let userLon = position.coords.longitude;
        this.setState({
          userLat: userLat,
          userLon: userLon
        });
        fetch(  
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            this.state.userLat
          }&lon=${this.state.userLon}&appid=${weatherApiKey}&lang=zh_tw&units=metric`

        )

          .then(response => {
            return response.json();
          })
          .then(data => {
            const currentTemp = this.roundTempDown(data.main.temp);
            const minTemp = this.roundTempDown(data.main.temp_min);
            const maxTemp = this.roundTempDown(data.main.temp_max);
            this.setState({
              weather: {
                location: data.name,
                currentTemp: currentTemp,
                minTemp: minTemp,
                maxTemp: maxTemp,
                description: data.weather[0].description
              }
            });
          })
          .catch(error => {
            console.log("there was an error", error);
          });
      },
      error => {
        alert("Sorry, we can't give you your weather without your location");
      }
    );

    // 頭條 article 
    fetch(
      `https://newsapi.org/v2/top-headlines?country=tw&pageSize=4&apiKey=${newsApiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ articles: data.articles });
      });

    // 右側 article fetch 

    fetch(
      `https://newsapi.org/v2/top-headlines?category=entertainment&pageSize=5&country=tw&apiKey=${newsApiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ sideArticles: data.articles });
      });
     
      // 底部 article fetch 
      fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&pageSize=3&country=tw&apiKey=${newsApiKey}`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ subArticles: data.articles });
        });
      
  }
  

  render() {
    return (
      <div className="App">
        <Header weather={this.state.weather} id="top" />
        <div className="main-content-wrapper">
          <main className="main-articles">
            <MainArticles mainArticle={this.state.articles} />
          </main>
          <section className="sub-articles">
            {" "}
            <SubArticles subArticle={this.state.subArticles} />{" "}
          </section>
          <aside className="side-articles">
            <SideArticles sideArticle={this.state.sideArticles} />
          </aside>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
