import React, {Component} from 'react';
import {CategorySearch, ReactiveBase} from '@appbaseio/reactivesearch';
import {ResultCard} from "@appbaseio/reactivesearch/lib/index";

class App extends Component {
  render() {
    return (
        <ReactiveBase
        app="hello"
        url="http://172.29.11.50:8001/">
          <div style={{ display: "flex", "flexDirection": "row" }}>
            <div style={{ display: "flex", "flexDirection": "column", "width": "40%" }}>
              <CategorySearch
                componentId="searchbox"
                dataField="name"
                categoryField="brand.raw"
                placeholder="Search for companyName"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />

            </div>


              <ResultCard
                  componentId="result"
                  title="Results"
                  dataField="name"
                  from={0}
                  size={6}
                  pagination={true}
                  react={{
                      and: ["searchbox", "ratingsfilter"]
                  }}
                  onData={(res) => {
                      return {
                          image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
                          title: res.name,
                          description: res.desc + " " + "★".repeat(res.rating)
                      }
                  }}
                  style={{
                      width: "60%",
                      textAlign: "center"
                  }}
              />
          </div>
        </ReactiveBase>
    );
  }
}

export default App;
