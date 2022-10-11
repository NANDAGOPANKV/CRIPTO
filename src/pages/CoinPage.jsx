import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
// coin-graph
import { Sparklines, SparklinesLine } from "react-sparklines";

export const CoinPage = () => {
  const [getCoinDetails, setGetCoinDetails] = useState({});
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";
  useLayoutEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setGetCoinDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Api Accessing");
      });
  }, [setGetCoinDetails, url]);
  return (
    <div>
      CoinPage
      <div>
        <img src={getCoinDetails?.image?.large} alt="/" />
        <div>
          <p>{getCoinDetails?.name} Price</p>
          <p>({getCoinDetails?.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            {getCoinDetails.market_data?.current_price ? (
              <p>
                $
                {getCoinDetails.market_data.current_price.usd?.toLocaleString()}
              </p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={getCoinDetails.market_data?.sparkline_7d?.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div>
            <div>
              <p>Market Cap</p>
              {getCoinDetails.market_data?.market_cap ? (
                <p>
                  $
                  {getCoinDetails.market_data?.market_cap?.usd?.toLocaleString()}
                </p>
              ) : null}
            </div>
            <div>
              <p>Volume (24h)</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
