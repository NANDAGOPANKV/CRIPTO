import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
// coin-graph
import { Sparklines, SparklinesLine } from "react-sparklines";
// react icons
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
// dom purify
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

export const CoinPage = () => {
  const [getCoinDetails, setGetCoinDetails] = useState({});
  // parman
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
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
    <>
      {getCoinDetails ? (
        <div className="rounded-div my-12 py-8 ">
          CoinPage
          <div className="flex py-8">
            <img
              className="w-32 m-8 "
              src={getCoinDetails?.image?.large}
              alt="/"
            />
            <div>
              <p className="text-3xl font-bold ">
                {getCoinDetails?.name} Price
              </p>
              <p>({getCoinDetails?.symbol?.toUpperCase()}/USD)</p>
            </div>
          </div>
          <div className=" grid md:grid-cols-2 gap-8  ">
            <div>
              <div className="flex items-center p-2 ">
                {getCoinDetails.market_data?.current_price ? (
                  <p className=" text-3xl font-bold  ">
                    $
                    {getCoinDetails.market_data.current_price.usd?.toLocaleString()}
                  </p>
                ) : null}
                <p className=" ml-3 text-sm">7 Days</p>
              </div>
              <div>
                <Sparklines
                  data={getCoinDetails.market_data?.sparkline_7d?.price}
                >
                  <SparklinesLine color="teal" />
                </Sparklines>
              </div>
              {/* market cap and volume */}
              <div className="flex justify-between py-7  ">
                <div>
                  <p className=" text-gray-500 text-sm  ">Market Cap</p>
                  {getCoinDetails.market_data?.market_cap ? (
                    <p>
                      $
                      {getCoinDetails.market_data?.market_cap?.usd?.toLocaleString()}
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className=" text-gray-500 text-sm  ">Volume (24h)</p>
                  {getCoinDetails?.market_data?.market_cap ? (
                    <p>
                      $
                      {getCoinDetails?.market_data?.total_volume?.usd?.toLocaleString()}
                    </p>
                  ) : null}
                </div>
              </div>
              {/* market cap and volume */}
              <div className="flex justify-between py-8">
                <div>
                  <p className="text-gray-500 text-sm ">24h (Hight)</p>
                  {getCoinDetails?.market_data?.high_24h ? (
                    <p>
                      $
                      {getCoinDetails?.market_data?.high_24h?.usd?.toLocaleString()}
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">24h (Low)</p>
                  {getCoinDetails?.market_data?.low_24h ? (
                    <p>
                      $
                      {getCoinDetails?.market_data?.low_24h?.usd?.toLocaleString()}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            {/* market stats */}
            <div>
              <p className="text-3xl font-bold  ">Market Status</p>
              <div className="flex justify-between py-6  ">
                <div>
                  <p className=" text-sm text-gray-500  ">Market Rank</p>
                  {getCoinDetails.market_cap_rank}
                </div>
                <div>
                  <p className=" text-sm text-gray-500  ">Hashing Algoritham</p>
                  {getCoinDetails.hashing_algorithm ? (
                    <p>{getCoinDetails.hashing_algorithm}</p>
                  ) : null}
                </div>
                <div>
                  <p className=" text-sm text-gray-500  ">Trust Score</p>
                  {getCoinDetails.tickers ? (
                    <p>{getCoinDetails.liquidity_score.toFixed(2)}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <div className="flex justify-between py-4  ">
                  <div>
                    <p className="text-gray-500 text-sm">Price Change (24h)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_24h.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Price Change (7d)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_7d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Price Change (14d)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_14d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className=" flex justify-between py-6  ">
                  <div>
                    <p className=" text-gray-500 text-sm">Price Change (30d)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_30d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Price Change (60d)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_60d.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Price Change (1y)</p>
                    {getCoinDetails.market_data ? (
                      <p>
                        {getCoinDetails.market_data.price_change_percentage_1y.toFixed(
                          2
                        )}
                        %
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="flex justify-around p-8 text-accent  ">
                <FaTwitter />
                <FaFacebook />
                <FaReddit />
                <FaGithub />
              </div>
            </div>
            {/* market stats */}
          </div>
          <div>
            {/* Description */}
            <div className="py-5">
              <p className="text-xl font-bold">Abount {getCoinDetails.name}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    getCoinDetails.description
                      ? getCoinDetails.description?.en
                      : ""
                  ),
                }}
              ></p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
   
    </>
  );
};
