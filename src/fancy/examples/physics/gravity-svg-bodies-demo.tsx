import Gravity, { MatterBody } from "@/fancy/components/physics/gravity";
import { useState } from "react";

export default function Preview() {
  const [debug, setDebug] = useState(false);

  return (
    <div className="w-full h-full flex flex-col relative">
      <button 
        onClick={() => setDebug(!debug)}
        className="absolute top-4 left-4 px-4 py-2 text-xs border border-border rounded-lg hover:bg-gray-100 cursor-pointer z-10"
      >
        {debug ? 'Disable Debug' : 'Enable Debug'}
      </button>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full" debug={debug}>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
          bodyType="svg"
        >
          <svg
            width="111"
            height="108"
            viewBox="0 0 111 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9185 107.176L33.6145 66.472L0.5905 44.328H41.0385L55.5025 0.679993L70.2225 44.328L110.415 44.328L77.3905 66.472L91.3425 107.176L55.5025 81.192L19.9185 107.176Z"
              fill="#1F464D"
            />
          </svg>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="30%"
          bodyType="svg"
        >
          <svg
            width="152"
            height="153"
            viewBox="0 0 152 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.3648 152.4L41.7648 150.8L52.5648 100L1.76484 110.8L0.164844 107.2L41.7648 76.4L0.164844 46L1.76484 42.4L52.5648 52.8L41.7648 2.39999L45.3648 0.799989L76.1648 42.4L106.565 0.799989L110.165 2.39999L99.7648 52.8L150.165 42.4L151.765 46L110.165 76.4L151.765 107.2L150.165 110.8L99.7648 100L110.165 150.8L106.565 152.4L76.1648 110.8L45.3648 152.4Z"
              fill="#0015FF"
            />
          </svg>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
          bodyType="svg"
        >
          <svg
            width="99"
            height="99"
            viewBox="0 0 99 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.9325 98.376C45.0125 87.368 37.2045 73.544 22.3565 62.408C15.0605 56.904 7.6365 53.32 0.3405 51.784V46.408C14.8045 42.952 29.0125 33.224 38.1005 20.04C42.7085 13.384 45.6525 6.856 46.9325 0.0719986H52.3085C54.4845 13 64.4685 27.336 78.0365 36.936C84.6925 41.672 91.6045 44.872 98.6445 46.408V51.784C84.4365 54.728 67.9245 67.4 59.7325 80.328C55.6365 86.856 53.2045 92.872 52.3085 98.376H46.9325Z"
              fill="#E794DA"
            />
          </svg>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
          bodyType="circle"
        >
          <div className="w-32 h-32 bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 "/>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="w-16 h-16 bg-orange-500  text-white [#E794DA] rounded-lg hover:cursor-grab px-8 py-4 "/>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{
            friction: 0.5,
            restitution: 0.2,
            isStatic: true,
          }}
          x="50%"
          y="95%"
          bodyType="svg"
        >
          <svg
            width="298"
            height="125"
            viewBox="0 0 298 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7705 44.16H2.3225L1.8105 41.344C1.8105 41.344 7.9545 39.936 10.7705 37.376V32.512C10.7705 16.128 19.3465 -7.62939e-06 37.9065 -7.62939e-06C48.1465 -7.62939e-06 53.2665 3.96799 53.2665 8.448C53.2665 12.032 50.0665 14.336 46.9945 14.336C46.2265 14.336 45.7145 14.208 45.7145 14.208C45.0745 12.288 42.1305 5.24799 35.0905 5.24799C25.8745 5.24799 21.7785 14.848 21.7785 28.672V38.4H42.2585V44.416H21.7785V84.48C21.7785 90.496 23.4425 91.776 27.2825 92.032L34.1945 92.544V96C34.1945 96 22.0345 95.616 16.4025 95.616C10.5145 95.616 0.5305 96 0.5305 96V92.544L3.9865 92.032C7.8265 91.52 10.7705 88.32 10.7705 83.456V44.16ZM58.4255 83.584C58.4255 89.216 62.1375 91.648 66.4895 91.648C72.6335 91.648 74.9375 88.96 80.1855 87.68C80.1855 87.68 79.5455 84.096 79.5455 79.36C79.5455 74.752 79.6735 70.528 79.6735 70.528C68.1535 70.528 58.4255 74.752 58.4255 83.584ZM79.8015 66.432C79.8015 66.432 80.1855 57.856 80.1855 53.632C80.1855 46.848 77.8815 41.728 69.8175 41.728C63.6735 41.728 61.2415 45.056 61.2415 48.256C61.2415 50.304 62.0095 51.968 62.9055 52.992C61.2415 54.272 59.0655 54.912 56.7615 54.912C52.6655 54.912 49.9775 52.736 49.9775 49.024C49.9775 42.112 60.8575 36.352 72.6335 36.352C85.8175 36.352 90.8095 44.032 90.8095 55.936C90.8095 64 90.1695 71.936 90.1695 80.512C90.1695 86.912 90.9375 91.008 96.1855 91.008C99.3855 91.008 101.434 89.728 101.434 89.728L102.586 91.904C102.586 91.904 98.7455 98.048 91.3215 98.048C85.3055 98.048 82.1055 94.208 81.0815 90.496C75.8335 91.648 72.1215 98.048 61.8815 98.048C52.6655 98.048 47.1615 93.44 47.1615 84.992C47.1615 70.656 64.9535 66.432 79.8015 66.432ZM170.138 92.032L174.106 92.544V96C174.106 96 165.658 95.616 160.026 95.616C153.754 95.616 144.666 96 144.666 96V92.544L147.354 92.032C151.194 91.264 154.138 88.32 154.138 83.456V54.656C154.138 47.744 150.682 44.16 144.026 44.16C137.242 44.16 132.378 48.512 127.514 49.408V84.48C127.514 90.496 128.41 91.648 132.506 92.032L136.602 92.544V96C136.602 96 127.77 95.616 122.01 95.616C116.25 95.616 106.138 96 106.138 96V92.544L109.722 92.032C113.562 91.52 116.506 88.32 116.506 83.456V52.864C116.506 47.36 114.33 45.184 106.906 45.184L106.138 42.368C118.042 41.216 127.514 36.48 127.514 36.48V45.824C130.586 44.928 138.266 36.352 148.25 36.352C159.642 36.352 165.018 43.776 165.018 53.248V84.48C165.018 90.496 166.042 91.52 170.138 92.032ZM207.426 42.112C198.466 42.112 191.298 49.408 191.298 66.048C191.298 77.952 198.082 89.856 213.314 89.856C219.202 89.856 224.194 88.704 227.906 86.912L229.186 89.344C227.522 91.392 220.61 98.048 207.554 98.048C197.826 98.048 180.034 91.392 180.034 68.608C180.034 52.096 191.938 36.352 212.418 36.352C220.994 36.352 230.338 39.808 230.338 46.72C230.338 50.56 226.114 52.992 222.146 52.992C220.866 52.992 219.714 52.736 218.562 52.224C218.562 52.224 219.074 50.944 219.074 49.28C219.074 46.208 216.77 42.112 207.426 42.112ZM263.396 38.4V41.856L260.196 42.368C257.636 42.752 256.356 43.648 256.356 45.312C256.356 45.568 256.356 46.208 256.612 47.104L268.004 83.968L282.084 47.872C282.468 46.72 282.724 45.952 282.724 45.44C282.724 43.904 281.7 42.752 279.396 42.368L275.94 41.856V38.4C275.94 38.4 281.316 38.784 288.1 38.784C293.732 38.784 297.956 38.4 297.956 38.4V41.856L296.036 42.24C292.196 43.008 289.38 44.928 287.332 49.92L263.396 106.624C259.044 116.992 252.9 124.416 242.66 124.416C233.444 124.416 230.883 119.68 230.883 115.712C230.883 112.896 233.059 109.824 237.796 109.824C238.564 109.824 239.588 109.952 239.844 110.08C239.716 110.464 239.588 110.976 239.588 111.488C239.588 115.072 241.764 116.48 245.348 116.48C251.236 116.48 256.1 113.024 259.3 104.96L262.5 97.024L245.988 50.304C243.94 44.416 241.635 42.88 238.436 42.368L234.98 41.856V38.4C234.98 38.4 244.708 38.784 250.468 38.784C255.46 38.784 263.396 38.4 263.396 38.4Z"
              fill="black"
            />
          </svg>
        </MatterBody>
      </Gravity>
    </div>
  );
}
