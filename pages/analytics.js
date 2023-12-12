import { Space_Mono } from "next/font/google";
import style from "../styles/analytic.module.css";
import React, { useRef } from "react";
import Frame from "./components/svg/frame.svg";
import Star from "./components/svg/star.svg";
import GlobleSimple from "./components/svg/GlobeSimple.svg";
import Telegram from "./components/svg/telegram.svg";
import TelegramLogo from "./components/svg/telegramLogo.svg";
import TwitterLogo from "./components/svg/twitterLogo.svg";
import AlertCircle from "./components/svg/alert-circle.svg";
import Avatar from "./components/svg/avatar.svg";
import Discord from "./components/svg/discord.svg";
import TelegramEcosystem from "./components/svg/telegram_ecosystem.svg";
import FrameEcosystem from "./components/svg/frame_ecosystem.svg";
import Link from "./components/svg/link.svg";
import Schedule from "./components/svg/schedule.svg";
import Genre from "./components/svg/genre.svg";
import Author from "./components/svg/author.svg";
import Rating from "./components/svg/fi_star.svg";
import MojiStar from "./components/svg/moji_star.svg";
import Chart from "./components/svg/donut_chart.svg";
import background from "./components/svg/background.svg";

const analytics = () => {
  return (
    <div className={style.analytics_main}>
      <div className={style.analytic_first}>
        <div className={style.analytic_hero}>
          <div className={style.analytic_a_a}>
            <div className={style.analytic_a}>
              <img
                style={{ borderRadius: "10px" }}
                src="https://s3-alpha-sig.figma.com/img/6997/a0d9/0b85b70853b4aef84d7c8bd1dabf50c9?Expires=1702857600&Signature=OsPICFJ0b4ruSiH~CFCcKCSdkkd7IukjYzYA-tMdqvdp6SpQRE7ytP2iI~Z5auuJbQTmOBpNroNi-Km~UfQuO74noeR4ZGsiI~YUMaIqhePHgtWP~H8Sgq9IY68n3sYussndCkH1WU9Qpa4ajliHXhnTKDLMiysAKHXQtImQt8n2SnHaSOT92RgVavMEF8LTbKFpFOdgU9IkF~qz1Xx0JnaRa41ISh1qJ1DPuLWdGIlE7rraNPzMiERwyYHodYjWpcCfI3KAMmv69jXzH05yFh7B-7L44cfG1X0vSfdo4xDK~qyG4DloJXVpY~57pMcTJvdxyotR54lmqLw3kYpJrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="logo"
              />
            </div>
            <p className={style.analytic_a_text}>KVLE</p>
            <div className={style.analytic_a_star}>
              <Star />
            </div>
          </div>
          <p className={style.analytic_a_token}>
            A token influencer that calls <br />
            Bsc and Eth Tokens
          </p>
          <div className={style.analytic_a_icon} style={{ display: "flex" }}>
            <div>
              <Telegram />
            </div>
            <div className={style.analytic_a_x}>
              <Frame />
            </div>
          </div>
        </div>
        <div className={style.analytic_ranking}>
          <div className={style.analytic_a_influcer}>
            <div>
              <p className={style.influcer_text}>31st</p>
              <p className={style.influcer_text_b}>influencer Rank</p>
            </div>
            <div>
              <GlobleSimple />
            </div>
          </div>
          <div className={style.analytic_a_influcer_a}>
            <div className={style.telegram}>
              <TelegramLogo />
            </div>
            <div style={{ paddingTop: "33%" }}>
              <p className={style.influcer_text}>460</p>
              <p className={style.influcer_text_b}>subs</p>
            </div>
          </div>
          <div
            className={style.analytic_a_influcer_a}
            style={{ backgroundColor: "black" }}
          >
            <div className={style.telegram}>
              <TwitterLogo />
            </div>
            <div style={{ paddingTop: "33%" }}>
              <p className={style.influcer_text}>434</p>
              <p className={style.influcer_text_b}>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.inputBar}>
        <div>
          <div className={style.average_icon}>
            <p className={style.users_text_a}>Active Percentage</p>
            <AlertCircle />
          </div>
          <p className={style.users_text}>Total</p>
          <p className={style.users_number_text}>$5,949</p>
          <div className={style.leverage}>
            <div></div>
          </div>
          <div className={style.users_main}>
            <div className={style.users}>
              <div className={style.users_a}></div>
              <div className={style.users_aa}>
                <div>
                  <p className={style.users_text}>Online</p>
                  <p className={style.users_text_a}>209 users</p>
                </div>
              </div>
            </div>
            <div className={style.users}>
              <div
                className={style.users_a}
                style={{ backgroundColor: "#544F48" }}
              ></div>
              <div className={style.users_aa}>
                <p className={style.users_text}>Offline</p>
                <p className={style.users_text_a}>50 Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.inputbar_card}>
          <p className={style.influcer_text}>$5,949</p>
          <p className={style.influcer_text_b}>Estimated Influencer cost</p>
        </div>
      </div>
      <div className={style.chart_header_main}>
        <p className={style.users_text_a}>Hite Rate</p>
        <div>
          <AlertCircle />
        </div>
        <p className={style.chart_header}>
          This caller promotes projects Pre & Post Launch.
        </p>
      </div>
      <div className={style.chart_main}>
        <div className={style.chart_section}>
          <div><Chart/></div>
          <div>
          <div className={style.chart_section_information}>
            <div className={style.success_bar}></div>
            <div><p className={style.success_bar_text_a}>2x or Lower</p><p className={style.success_bar_text_b}>1,324</p></div>
          </div>
          <div className={style.chart_section_information} style={{paddingTop: "10%"}}>
            <div className={style.success_bar} style={{backgroundColor: "#15526E"}}></div>
            <div><p className={style.success_bar_text_a}>2x or Lower</p><p className={style.success_bar_text_b}>1,324</p></div>
          </div>
          <div className={style.chart_section_information} style={{paddingTop: "10%"}}>
            <div className={style.success_bar} style={{backgroundColor: "#15526E"}}></div>
            <div><p className={style.success_bar_text_a}>2x or Lower</p><p className={style.success_bar_text_b}>1,324</p></div>
          </div>
          </div>
        </div>
        <div className={style.success_rate}>
          <p className={style.success_text}>84%</p>
          <p className={style.success_text_a}>Success Rate</p>
        </div>
      </div>

      <div>
        <div
          className={style.average_icon}
          style={{ paddingLeft: "3%", marginTop: "7%" }}
        >
          <p className={style.users_text_a}>Similar Influencer</p>
          <AlertCircle />
        </div>
        <div className={style.similar_contain_style}>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
        </div>
        <div className={style.similar_contain_style}>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
          <div className={style.similar_contain}>
            <div>
              <div className={style.similar_icon}>
                <Avatar />
                <p className={style.similar_text}>KVLE</p>
              </div>
              <p className={style.similar_text_a}>Meme Coin Telegram Caller</p>
              <button className={style.influencer_button}>
                View Influencer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.analytic_first} style={{ paddingTop: "9%" }}>
        <div className={style.analytic_hero}>
          <div className={style.analytic_a_a}>
            <div className={style.analytic_a}>
              <img
                style={{ borderRadius: "10px" }}
                src="https://s3-alpha-sig.figma.com/img/6997/a0d9/0b85b70853b4aef84d7c8bd1dabf50c9?Expires=1702857600&Signature=OsPICFJ0b4ruSiH~CFCcKCSdkkd7IukjYzYA-tMdqvdp6SpQRE7ytP2iI~Z5auuJbQTmOBpNroNi-Km~UfQuO74noeR4ZGsiI~YUMaIqhePHgtWP~H8Sgq9IY68n3sYussndCkH1WU9Qpa4ajliHXhnTKDLMiysAKHXQtImQt8n2SnHaSOT92RgVavMEF8LTbKFpFOdgU9IkF~qz1Xx0JnaRa41ISh1qJ1DPuLWdGIlE7rraNPzMiERwyYHodYjWpcCfI3KAMmv69jXzH05yFh7B-7L44cfG1X0vSfdo4xDK~qyG4DloJXVpY~57pMcTJvdxyotR54lmqLw3kYpJrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="logo"
              />
            </div>
            <p className={style.ecosytem_text}>Swift Ecosystem</p>
            <div className={style.ecosystem}>
              <Star />
            </div>
          </div>
          <p className={style.analytic_a_token}>
            Trade and snipe tokens with
            <br />
            lighting speeds using our multi-
            <br />
            platform software.
          </p>
          <div className={style.analytic_a_icon} style={{ display: "flex" }}>
            <div>
              <a href=" ">
                <Link />
                website
              </a>
            </div>
            <div>
              <TelegramEcosystem />
            </div>
            <div>
              <FrameEcosystem />
            </div>
            <div>
              <Discord />
            </div>
          </div>
        </div>
        <div className={style.analytic_ranking}>
          <div className={style.analytic_a_influcer}>
            <div>
              <p className={style.influcer_text}>31st</p>
              <p className={style.influcer_text_b}>influencer Rank</p>
            </div>
            <div>
              <GlobleSimple />
            </div>
          </div>
          <div className={style.analytic_a_influcer_a}>
            <div className={style.telegram}>
              <TelegramLogo />
            </div>
            <div style={{ paddingTop: "33%" }}>
              <p className={style.influcer_text}>460</p>
              <p className={style.influcer_text_b}>subs</p>
            </div>
          </div>
          <div
            className={style.analytic_a_influcer_a}
            style={{ backgroundColor: "black" }}
          >
            <div className={style.telegram}>
              <TwitterLogo />
            </div>
            <div style={{ paddingTop: "33%" }}>
              <p className={style.influcer_text}>434</p>
              <p className={style.influcer_text_b}>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.average_icon}
        style={{ paddingLeft: "3%", marginTop: "7%" }}
      >
        <p className={style.users_text_a}>Token Statistics</p>
        <AlertCircle />
      </div>
      <div className={style.tokenstatistics_main}>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>$204,320</p>
            <p className={style.influcer_text_b}>influencer Rank</p>
          </div>
        </div>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>$1.2M</p>
            <p className={style.influcer_text_b}>Volume</p>
          </div>
        </div>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>$203,302</p>
            <p className={style.influcer_text_b}>Tax Revenue</p>
          </div>
        </div>
      </div>
      <div
        className={style.average_icon}
        style={{ paddingLeft: "3%", marginTop: "7%" }}
      >
        <p className={style.users_text_a}>Marketing Statistics</p>
        <AlertCircle />
      </div>
      <div className={style.tokenstatistics_main}>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>323</p>
            <p className={style.influcer_text_b}>influencer Mentions</p>
          </div>
        </div>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>$43,000</p>
            <p className={style.influcer_text_b}>Marketing Budget</p>
          </div>
        </div>
        <div className={style.tokenstatistics}>
          <div>
            <p className={style.influcer_text}>$20,302</p>
            <p className={style.influcer_text_b}>P&L on Marketing</p>
          </div>
        </div>
      </div>
      <div
        className={style.average_icon}
        style={{ justifyContent: "center", marginTop: "7%" }}
      >
        <p className={style.users_text_a}>Influencer Statistics</p>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <div className={style.influcer_header}>
          <div>
            <a className={style.influcer_header_tag} href=" ">
              Pre Launch
            </a>
            <div className={style.influcer_header_tag_a}>
              <a href=" ">Both</a>
            </div>
            <a className={style.influcer_header_tag} href=" ">
              Post Launch
            </a>
          </div>
        </div>
      </div>
      <div className={style.table_main}>
        <table className={style.myTable}>
          <thead>
            <tr>
              <th>
                <div className="flex justify-center items-center">
                  <div>
                    <Schedule />
                  </div>
                  <p style={{ paddingLeft: "4%" }}>Schedule</p>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <div>
                    <Author />
                  </div>
                  <p style={{ paddingLeft: "4%" }}>Influencer</p>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <div>
                    <Genre />
                  </div>
                  <p style={{ paddingLeft: "4%" }}>Platform</p>
                </div>
              </th>
              <th>
                <div className="flex justify-center items-center">
                  <div>
                    <Rating />
                  </div>
                  <p style={{ paddingLeft: "4%" }}>Rating</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>George R.R Martin</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text}>
                    <p>Twitter</p>
                  </div>
                  <div className={style.myTable_platform_text_b}>
                    <p>Telegram</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/><MojiStar/></div>
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>Markus Suzak</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text_b}>
                    <p>Telegram</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/></div>
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>Ankur Warikoo</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text}>
                    <p>Twitter</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/><MojiStar/><MojiStar/></div>
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>Jodi Picoult</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text}>
                    <p>Twitter</p>
                  </div>
                  <div className={style.myTable_platform_text_b}>
                    <p>Telegram</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/><MojiStar/><MojiStar></MojiStar></div>
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>James Clear</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text_b}>
                    <p>Telegram</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/><MojiStar/><MojiStar></MojiStar></div>
                </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={style.mytable_text}>Pre-Launch</td>
              <td className={style.mytable_text}>Frank Herbert</td>
              <td>
                <div className={style.myTable_platform}>
                  <div className={style.myTable_platform_text_b}>
                    <p>Telegram</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex item-center justify-center">
                <div className={style.rating_star}>
                  <div><MojiStar/><MojiStar/><MojiStar/><MojiStar/></div>
                </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={style.add_another}>
          <p className={style.add_another_text}>Add another Project</p>
          <p className={style.add_another_text_b}>
            Compare multiple projects together
          </p>
        </div>
      </div>
    </div>
  );
};

export default analytics;
