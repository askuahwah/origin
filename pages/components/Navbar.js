import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "../../styles/navbar.module.css";
import Faders from "./svg/Faders.svg";
import Light from "./svg/light.svg";
import Dark from "./svg/dark.svg";
import Menu from "./svg/menu_icon.svg";
import MobileNav from "./new.js";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  // Function to handle disconnecting Twitter
  const handleDisconnectTwitter = () => {
    // Implement logic for disconnecting Twitter
    console.log("Disconnect Twitter");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddWallet = () => {
    // Implement logic for adding wallet
    console.log("Add Wallet");
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement logic for logout
    console.log("Logout");
  };
  const ref = useRef();
  return (
    <div>
    <div className={style.navbar_main}>
      <div className={style.navbar_a}>
        <div className="flex nav-content text-white">
          <input
            className={style.navbar_search}
            type="text"
            placeholder="Search an influencer or project"
          />
          <div className={style.navbar_advance}>
            <Faders />
            <p>Advance filter</p>
          </div>
           <div className="nav-side-buttons  absolute right-11 top-12 flex w-64 justify-end" style={{borderRadius: '8px'}}>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.74906 11.917C7.74906 7.36044 11.4429 3.66663 15.9994 3.66663C20.556 3.66663 24.2498 7.36044 24.2498 11.917V18.0244L26.4 23.8096H5.59888L7.74906 18.0244V11.917Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M20.223 23.8099V24.1112C20.223 26.4431 18.3327 28.3334 16.0008 28.3334C13.6689 28.3334 11.7786 26.4431 11.7786 24.1112V23.8099"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="22.6665" cy="6.66663" r="4" fill="#FFE812" />
              </svg>
            </div>

            <div
              className="my-auto mx-4 "
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={toggleModal}
            >
              <img
                src="/pfp.png"
                alt="Profile"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </div>
          </div>


          {/* Modal */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <div className="dropdown">
                  <button className="dropbtn">Actions</button>
                  <div className="dropdown-content">
                    <button onClick={handleDisconnectTwitter}>
                      Disconnect Twitter
                    </button>
                    <button onClick={handleAddWallet}>Add Wallet</button>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="sidebar">
        <button onClick={toggleCart}>Sidebar</button>
      </div> */}

      <div ref={ref} className={style.sidebar}>
        <div className="flex ">
          <svg
            width="48"
            height="48"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="400" height="400" fill="#1E1E1E" />
            <path
              d="M167.293 239.826C164.264 251.131 144.614 255.689 123.404 250.005C102.194 244.322 87.4556 230.55 90.4848 219.245C93.514 207.94 113.164 203.383 134.374 209.066C155.584 214.749 170.322 228.521 167.293 239.826Z"
              fill="url(#paint0_linear_97_1737)"
            />
            <path
              d="M188.499 219.059C200.908 240.553 202.926 262.62 193.006 268.347C183.085 274.075 164.983 261.294 152.574 239.8C140.164 218.306 138.146 196.238 148.067 190.511C157.987 184.783 176.089 197.565 188.499 219.059Z"
              fill="#39A7AE"
            />
            <path
              d="M239.445 304.878C239.445 309.303 223.397 312.89 203.601 312.89C183.804 312.89 167.756 309.303 167.756 304.878C167.756 300.454 183.804 296.867 203.601 296.867C223.397 296.867 239.445 300.454 239.445 304.878Z"
              fill="url(#paint1_linear_97_1737)"
            />
            <path
              d="M292.422 179.534C295.32 180.311 293.549 196.322 288.465 215.295C283.381 234.268 276.91 249.019 274.011 248.242C271.113 247.466 272.884 231.455 277.968 212.482C283.052 193.509 289.523 178.758 292.422 179.534Z"
              fill="#FFE6C6"
            />
            <path
              d="M288.012 136.554C301.637 160.152 307.682 182.169 301.515 185.73C295.348 189.29 279.304 173.046 265.679 149.448C252.054 125.849 246.009 103.832 252.176 100.271C258.343 96.7108 274.388 112.955 288.012 136.554Z"
              fill="#FFE6C6"
            />
            <path
              d="M125.219 166.615C125.219 185.77 119.329 201.298 112.063 201.298C104.798 201.298 98.9076 185.77 98.9076 166.615C98.9076 147.46 104.798 131.932 112.063 131.932C119.329 131.932 125.219 147.46 125.219 166.615Z"
              fill="#00FFFF"
            />
            <path
              d="M170.377 264.724C180.189 281.719 183.572 298.136 177.933 301.391C172.294 304.647 159.768 293.509 149.956 276.514C140.144 259.519 136.761 243.102 142.4 239.847C148.039 236.591 160.565 247.729 170.377 264.724Z"
              fill="#482CF1"
            />
            <path
              d="M174.989 300.235C191.79 313.326 222.003 316.144 255.035 300.411C238.806 309.224 220.184 314.218 200.422 314.218C143.169 314.218 95.7253 272.269 87.2001 217.441C96.9378 245.086 130.898 230.995 143.632 238.272C165.25 250.615 147.628 279.011 174.989 300.235Z"
              fill="url(#paint2_linear_97_1737)"
            />
            <path
              d="M315 200.092C315 243.538 290.849 281.315 255.249 300.756C255.178 300.827 255.106 300.865 255.035 300.898C222.003 316.63 191.79 313.813 174.989 300.722C147.628 279.498 165.25 251.102 143.632 238.759C130.898 231.482 96.9378 245.573 87.2001 217.928C87.1647 217.892 87.1647 217.892 87.1647 217.855C86.2729 212.077 85.8086 206.119 85.8086 200.092C85.8086 188.178 87.6276 176.655 91.0172 165.846C87.7706 183.789 92.3365 201.625 107.319 206.69C127.723 213.574 151.872 195.989 168.317 208.581C183.014 219.888 167.425 256.416 197.889 275.465C243.121 303.788 317.389 243.433 312.575 176.548C314.179 184.146 315 192.03 315 200.092Z"
              fill="url(#paint3_linear_97_1737)"
            />
            <path
              d="M272.836 229.65C283.858 215.132 291.635 195.941 292.704 176.962C294.809 140.185 271.658 110.186 247.33 96.024C280.29 110.827 304.976 140.72 312.574 176.962C312.574 176.962 312.574 176.999 312.574 177.035C317.389 243.919 243.121 304.275 197.889 275.952C167.425 256.903 183.013 220.375 168.317 209.068C151.872 196.476 127.723 214.061 107.319 207.176C92.3363 202.112 87.7704 184.276 91.017 166.333C94.5481 154.989 99.8275 144.43 106.427 134.942C98.2937 154.027 105.499 172.361 116.272 176.962C119.09 178.176 122.158 178.854 125.368 179.139C144.025 180.994 168.282 171.113 186.295 185.275C208.555 202.826 192.646 241.173 222.254 252.301C239.696 258.865 258.853 248.021 272.836 229.65Z"
              fill="#FFE6C6"
            />
            <path
              d="M292.704 176.962C291.634 195.941 283.858 215.132 272.835 229.65C276.439 220.696 278.436 210.888 278.436 200.578C278.436 157.486 243.513 122.564 200.421 122.564C164.75 122.564 134.679 146.463 125.368 179.139C122.158 178.854 119.09 178.175 116.272 176.962C105.499 172.361 98.2937 154.027 106.427 134.942C127.188 105.334 161.539 85.9999 200.421 85.9999C217.153 85.9999 233.026 89.5675 247.33 96.0239C271.658 110.186 294.809 140.185 292.704 176.962Z"
              fill="url(#paint4_linear_97_1737)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_97_1737"
                x1="95.9696"
                y1="198.776"
                x2="84.9999"
                y2="239.715"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0B3BE3" />
                <stop offset="1" stopColor="#F76B1C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_97_1737"
                x1="167.756"
                y1="296.867"
                x2="167.756"
                y2="312.89"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0B3BE3" />
                <stop offset="1" stopColor="#F76B1C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_97_1737"
                x1="132.461"
                y1="295.852"
                x2="172.295"
                y2="257.802"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F1BE7E" />
                <stop offset="1" stopColor="#FFE6C6" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_97_1737"
                x1="161.673"
                y1="261.08"
                x2="191.399"
                y2="217.68"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DFC6A5" />
                <stop offset="1" stopColor="#FFE6C6" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_97_1737"
                x1="102.931"
                y1="229.65"
                x2="102.931"
                y2="85.9173"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE6C6" />
                <stop offset="1" stopColor="#A4927B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-2xl font-bold">Origin</div>
        </div>
        <div
          className="side-navigation top-10  relative items-center justify-center"
          style={{ width: "292px" }}
        >
          <div className="flex " style={{ width: "298px", height: "48px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.93359 11.3755L11.9998 2.75L22.0659 11.3755"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M4.09277 10.1592V21.2501H19.9103V10.1592"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M12 12.7048L12 16.1132"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <Link href={"/"}>Dashboard</Link>
          </div>
          <div className="flex " style={{ width: "298px", height: "48px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.51408 14.7069C12.6415 14.6989 15.3007 16.1349 16.2782 19.226C14.308 20.4271 11.9889 20.8896 9.51408 20.8836C7.03921 20.8896 4.72016 20.4271 2.75 19.226C3.72857 16.1316 6.38327 14.6989 9.51408 14.7069Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M16.0852 18.2325C17.975 18.2371 19.7458 17.8838 21.2502 16.9667C20.5039 14.6064 18.4733 13.5099 16.0852 13.516C14.5809 13.5122 13.2205 13.9439 12.2324 14.8533"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <circle
                cx="9.51421"
                cy="7.35259"
                r="4.23687"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M13.7146 5.67014C14.3048 5.05148 15.1374 4.66602 16.06 4.66602C17.8501 4.66602 19.3013 6.11718 19.3013 7.90729C19.3013 9.69739 17.8501 11.1486 16.06 11.1486C14.9657 11.1486 13.998 10.6063 13.4111 9.77575"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <Link href={"/favorites"}>Favorites</Link>
          </div>
          <div className="flex " style={{ width: "298px", height: "48px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0927 16.2865H8.64941"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M12.0313 12.504H8.64844"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M14.5679 2.75L4.3252 2.75V21.25H19.6745V8.06826L14.5679 2.75Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M14.0918 3.30469V8.65011H19.1989"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <Link href={"/posts"}>Posts</Link>
          </div>
          <div className="flex " style={{ width: "298px", height: "48px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2264 13.4961C18.2264 15.0296 17.7716 16.5287 16.9196 17.8039C16.0676 19.079 14.8566 20.0728 13.4398 20.6597C12.023 21.2465 10.464 21.4001 8.95987 21.1009C7.45578 20.8017 6.07418 20.0632 4.98979 18.9788C3.9054 17.8944 3.16692 16.5129 2.86774 15.0088C2.56855 13.5047 2.72211 11.9456 3.30897 10.5288C3.89584 9.11198 4.88967 7.901 6.16478 7.049C7.43988 6.197 8.939 5.74225 10.4726 5.74225L10.4726 13.4961H18.2264Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M13.5273 2.75018C15.5837 2.75018 17.5559 3.5671 19.01 5.02122C20.4641 6.47535 21.2811 8.44756 21.2811 10.504L13.5273 10.504L13.5273 2.75018Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <Link href={"/analytics"}>Analytics</Link>
          </div>
          <div className="flex " style={{ width: "298px", height: "48px" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.76074 9.59898H20.248"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M16.1087 13.2115H16.1173"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M12.0043 13.2115H12.0128"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M7.89097 13.2115H7.89954"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M16.1087 16.8065H16.1173"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M12.0043 16.8065H12.0128"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M7.89097 16.8065H7.89954"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M15.741 2.75V5.79399"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                d="M8.26831 2.75V5.79399"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M20.3258 4.21069H3.67578V21.25H20.3258V4.21069Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <Link href={"/lineup"}>Line-up Maker</Link>
          </div>
        </div>
        <div className={style.button_main}>
          <div>
            <button className="flex">
              <Light />
              Light
            </button>
          </div>
          <div style={{ background: "black", marginLeft: "4px" }}>
            <button className={style.dark_button}>
              <Dark />
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={style.mobile_nav}>
      <div>
        <MobileNav/>
      </div>
    </div>
    </div>

  );
};

export default Navbar;
