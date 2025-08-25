import Image from 'next/image';
import LandingButton from './LandingButton';

const pillars = [
  {
    letter: "S",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.192 18.7198H18.962C17.892 22.6958 17.28 27.2078 17.28 31.9998H18.72C18.72 27.1798 19.338 22.6538 20.41 18.7198H31.28V31.9998H32.72V18.7198H43.59C44.662 22.6538 45.28 27.1798 45.28 31.9998H46.722C46.722 27.2078 46.11 22.6958 45.042 18.7198H55.81C58.014 22.6538 59.282 27.1798 59.282 31.9998H60.724C60.724 16.1638 47.84 3.27979 32.004 3.27979C16.168 3.27979 3.28 16.1638 3.28 31.9998H4.72C4.72 27.1798 5.988 22.6538 8.192 18.7198ZM20.836 17.2798C23.078 10.1278 26.898 5.27979 31.28 4.79379V17.2798H20.836ZM32.72 17.2798V4.79379C37.102 5.27979 40.92 10.1278 43.164 17.2798H32.72ZM54.932 17.2798H44.616C42.942 11.8418 40.38 7.57379 37.314 5.24779C44.692 6.71179 50.992 11.1638 54.932 17.2798ZM26.686 5.24779C23.622 7.57379 21.058 11.8418 19.386 17.2798H9.068C13.008 11.1638 19.308 6.71179 26.686 5.24779ZM45.28 37.9998V39.0798L38 37.2798H32.502C31.358 37.2798 30.254 37.6958 29.396 38.4498L28.448 39.2798H18.72V37.9998C18.72 37.6018 18.398 37.2798 18 37.2798H4V38.7218H17.28V55.2798H4V56.7218H18C18.398 56.7218 18.72 56.3998 18.72 56.0018V54.7218H20.628L24.924 60.8058C25.46 61.4038 26.204 61.7118 26.954 61.7118C27.498 61.7118 28.044 61.5498 28.518 61.2158L29.804 60.3118C29.88 60.3398 29.94 60.3958 30.02 60.4178C30.254 60.4778 30.49 60.5098 30.724 60.5098C31.196 60.5098 31.662 60.3858 32.08 60.1418L33.744 59.1818C34.048 59.2938 34.362 59.3718 34.688 59.3718C35.148 59.3718 35.616 59.2538 36.044 59.0078L37.71 58.0458C38.014 58.1578 38.328 58.2358 38.654 58.2358C39.114 58.2358 39.584 58.1178 40.012 57.8718C41.136 57.2218 41.568 55.8918 41.198 54.7198H45.282V55.9998C45.282 56.3978 45.604 56.7198 46.002 56.7198H60.002V55.2798H46.722V38.7198H60V37.2798H46C45.602 37.2798 45.28 37.6018 45.28 37.9998ZM39.29 56.6258C38.68 56.9778 37.892 56.7678 37.54 56.1578L34.54 50.9618L33.292 51.6798L36.432 57.1198L35.324 57.7578C34.712 58.1158 33.928 57.9018 33.574 57.2918L31.574 53.8278L31.074 52.9618L29.828 53.6798L30.328 54.5438L32.328 58.0078C32.328 58.0098 32.33 58.0098 32.332 58.0118L32.47 58.2498L31.36 58.8898C31.068 59.0618 30.724 59.1058 30.394 59.0178C30.064 58.9298 29.79 58.7198 29.618 58.4278L27.614 54.9578L26.366 55.6758L28.366 59.1398C28.368 59.1418 28.37 59.1438 28.37 59.1458L28.538 59.4358L27.69 60.0338C27.16 60.4078 26.434 60.3238 26.05 59.9058L21.59 53.5818C21.454 53.3898 21.236 53.2758 21.002 53.2758H18.72V40.7198H26.8L23.028 44.0198C22.748 44.2618 22.58 44.6138 22.568 44.9818C22.554 45.3518 22.696 45.7138 22.96 45.9758C24.664 47.6798 27.368 47.8278 29.248 46.3238L31.254 44.7178H34.56L39.758 54.8738C40.108 55.4878 39.898 56.2738 39.29 56.6258ZM40.554 53.2798L35.64 43.6718C35.516 43.4318 35.268 43.2798 35 43.2798H31C30.836 43.2798 30.678 43.3358 30.55 43.4378L28.346 45.2018C27.04 46.2458 25.164 46.1458 23.974 45.1058L30.344 39.5318C30.94 39.0078 31.706 38.7218 32.502 38.7218L37.826 38.6998L45.28 40.5638V53.2798H40.554Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Seamlessly on‑chain and public, SoDEX welcomes all.",
    gridClass: "mobile:col-span-1 pc:col-span-3 pc:row-span-1 pc:min-w-[500px]"
  },
  {
    letter: "O",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 60.7198C31.876 60.7198 31.75 60.6858 31.638 60.6198L7.63803 46.6198C7.41603 46.4918 7.28003 46.2558 7.28003 45.9998V17.9998H8.72003V45.5858L32 59.1658L55.28 45.5858V27.9998H56.722V45.9998C56.722 46.2558 56.586 46.4918 56.364 46.6218L32.364 60.6218C32.25 60.6878 32.124 60.7198 32 60.7198ZM32 40.7198C27.192 40.7198 23.28 36.8078 23.28 31.9998C23.28 27.1918 27.192 23.2798 32 23.2798C35.028 23.2798 37.7 24.8298 39.262 27.1778L54.584 18.0078L32 4.83377L24.72 9.06577V19.9998H23.28V8.64977C23.28 8.39377 23.416 8.15577 23.638 8.02777L31.638 3.37777C31.862 3.24777 32.14 3.24777 32.362 3.37777L56.362 17.3778C56.58 17.5058 56.718 17.7418 56.72 17.9958C56.72 18.2498 56.588 18.4878 56.368 18.6178L39.958 28.4398C40.446 29.5278 40.72 30.7318 40.72 31.9998C40.72 36.8078 36.808 40.7198 32 40.7198ZM32 24.7198C27.986 24.7198 24.72 27.9858 24.72 31.9998C24.72 36.0138 27.986 39.2798 32 39.2798C36.014 39.2798 39.28 36.0138 39.28 31.9998C39.28 27.9858 36.014 24.7198 32 24.7198ZM16.72 31.9998H15.28V11.9998H16.72V31.9998Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Open access to insight and quality assets, without gatekeepers.",
    gridClass: "mobile:col-span-1 pc:col-span-3 pc:row-span-1 pc:min-w-[500px]"
  },
  {
    letter: "D",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.544 29.3358C59.276 15.6798 48.318 4.71979 34.666 3.45179C34.41 2.21379 33.312 1.27979 32 1.27979C30.676 1.27979 29.574 2.22979 29.332 3.48579C21.132 4.24579 13.75 8.41378 8.884 15.0318C8.606 14.9358 8.312 14.8718 8 14.8718C6.5 14.8718 5.28 16.0918 5.28 17.5918C5.28 18.3798 5.622 19.0838 6.158 19.5818C4.268 23.4998 3.28 27.6698 3.28 31.9998C3.28 37.5738 4.888 42.9458 7.908 47.5998C7.522 48.0698 7.28 48.6618 7.28 49.3158C7.28 50.8158 8.5 52.0358 10 52.0358C10.44 52.0358 10.848 51.9218 11.216 51.7358C16.636 57.4398 24.164 60.7198 32 60.7198C32.398 60.7198 32.72 60.3978 32.72 59.9998V42.6118C33.87 42.2938 34.72 41.2498 34.72 39.9998C34.72 38.7498 33.868 37.7058 32.72 37.3878V6.60979C33.498 6.39578 34.134 5.85179 34.466 5.12979C41.814 7.28379 47.28 18.6138 47.28 31.9998H48.722C48.722 20.2278 44.554 9.92778 38.504 5.54778C49.568 8.28378 58.02 17.8398 59.108 29.4438C58.048 29.8158 57.28 30.8158 57.28 32.0018C57.28 33.5018 58.5 34.7218 60 34.7218C61.5 34.7218 62.72 33.5018 62.72 32.0018C62.72 30.6858 61.784 29.5878 60.544 29.3358ZM29.28 39.9998C29.28 41.2498 30.13 42.2938 31.28 42.6118V59.2158C23.754 58.5758 17.536 48.0478 16.82 34.5798C17.918 34.2298 18.72 33.2118 18.72 31.9998C18.72 30.7858 17.916 29.7698 16.818 29.4198C17.472 17.1098 22.72 7.13179 29.534 5.12979C29.866 5.84979 30.504 6.39578 31.28 6.60979V37.3878C30.13 37.7058 29.28 38.7498 29.28 39.9998ZM16 30.7198C16.706 30.7198 17.28 31.2938 17.28 31.9998C17.28 32.7058 16.706 33.2798 16 33.2798C15.294 33.2798 14.72 32.7058 14.72 31.9998C14.72 31.2938 15.294 30.7198 16 30.7198ZM8 16.3118C8.706 16.3118 9.28 16.8858 9.28 17.5918C9.28 18.2978 8.706 18.8718 8 18.8718C7.294 18.8718 6.72 18.2978 6.72 17.5918C6.72 16.8858 7.294 16.3118 8 16.3118ZM8.72 49.3158C8.72 48.6098 9.294 48.0358 10 48.0358C10.706 48.0358 11.28 48.6098 11.28 49.3158C11.28 50.0218 10.706 50.5958 10 50.5958C9.294 50.5958 8.72 50.0218 8.72 49.3158ZM12.288 50.7738C12.558 50.3518 12.72 49.8538 12.72 49.3158C12.72 47.8158 11.5 46.5958 10 46.5958C9.676 46.5958 9.37 46.6618 9.084 46.7658C6.236 42.3578 4.72 37.2718 4.72 31.9998C4.72 27.9038 5.652 23.9598 7.434 20.2498C7.616 20.2878 7.806 20.3098 8 20.3098C9.5 20.3098 10.72 19.0898 10.72 17.5898C10.72 16.9238 10.47 16.3218 10.072 15.8478C13.878 10.6878 19.3 7.11579 25.442 5.60579C19.91 9.66578 15.946 18.6978 15.38 29.3578C14.178 29.6398 13.28 30.7138 13.28 31.9998C13.28 33.2858 14.18 34.3618 15.38 34.6438C15.956 45.4598 20.03 54.4918 25.59 58.4958C20.558 57.2638 15.928 54.5938 12.288 50.7738ZM33.28 39.9998C33.28 40.7058 32.706 41.2798 32 41.2798C31.294 41.2798 30.72 40.7058 30.72 39.9998C30.72 39.2938 31.294 38.7198 32 38.7198C32.706 38.7198 33.28 39.2938 33.28 39.9998ZM32 5.27979C31.294 5.27979 30.72 4.70579 30.72 3.99979C30.72 3.29379 31.294 2.71979 32 2.71979C32.706 2.71979 33.28 3.29379 33.28 3.99979C33.28 4.70579 32.706 5.27979 32 5.27979ZM60 33.2798C59.294 33.2798 58.72 32.7058 58.72 31.9998C58.72 31.2938 59.294 30.7198 60 30.7198C60.706 30.7198 61.28 31.2938 61.28 31.9998C61.28 32.7058 60.706 33.2798 60 33.2798ZM37.28 56.7198H42.722V49.2798H37.28V56.7198ZM38.72 50.7198H41.278V55.2778H38.72V50.7198ZM45.28 56.7198H50.722V43.2798H45.28V56.7198ZM46.72 44.7198H49.278V55.2778H46.72V44.7198ZM53.28 56.7198H58.722V37.2798H53.28V56.7198ZM54.72 38.7198H57.278V55.2778H54.72V38.7198Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Democratic by design: transparent markets, fair discovery.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  },
  {
    letter: "E",
    icon: (
      <svg width="64" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.6667 58.7198H12.6667V57.2798H25.9847C26.3187 54.1498 28.8147 51.6538 31.9467 51.3198V22.6658C29.6847 22.3178 27.9467 20.3578 27.9467 17.9998C27.9467 15.6418 29.6847 13.6818 31.9467 13.3338V6.71978H12.9387L21.2847 20.6298C21.3527 20.7418 21.3867 20.8698 21.3867 20.9998C21.3867 26.3598 17.0267 30.7198 11.6667 30.7198C6.30666 30.7198 1.94666 26.3598 1.94666 20.9998C1.94666 20.8698 1.98266 20.7418 2.04866 20.6298L11.0487 5.62979C11.1787 5.41379 11.4147 5.27979 11.6667 5.27979H53.6667C53.9187 5.27979 54.1527 5.41179 54.2847 5.62979L63.2847 20.6298C63.3507 20.7418 63.3887 20.8698 63.3887 20.9998C63.3887 26.3598 59.0267 30.7198 53.6687 30.7198C48.3107 30.7198 43.9487 26.3598 43.9487 20.9998C43.9487 20.8698 43.9867 20.7418 44.0527 20.6298L52.3987 6.71978H33.3867V13.3358C35.6487 13.6838 37.3867 15.6438 37.3867 18.0018C37.3867 20.3598 35.6487 22.3198 33.3867 22.6678V51.3218C36.5187 51.6558 39.0147 54.1518 39.3487 57.2818H52.6667V58.7198ZM27.4347 57.2798H37.8967C37.5447 54.7078 35.3347 52.7198 32.6667 52.7198C30.0007 52.7198 27.7887 54.7078 27.4347 57.2798ZM45.4187 21.7198C45.7847 25.9498 49.3447 29.2798 53.6667 29.2798C57.9887 29.2798 61.5487 25.9498 61.9147 21.7198H45.4187ZM3.41666 21.7198C3.78266 25.9498 7.34266 29.2798 11.6667 29.2798C15.9907 29.2798 19.5487 25.9498 19.9167 21.7198H3.41666ZM32.6667 14.7198C30.8587 14.7198 29.3867 16.1918 29.3867 17.9998C29.3867 19.8078 30.8587 21.2798 32.6667 21.2798C34.4747 21.2798 35.9467 19.8078 35.9467 17.9998C35.9467 16.1918 34.4747 14.7198 32.6667 14.7198ZM45.9387 20.2798H61.3967L53.6667 7.39979L45.9387 20.2798ZM3.93866 20.2798H19.3967L11.6667 7.39979L3.93866 20.2798Z" fill="#FF7637"/>
      </svg>
    ),
    title: "Equal tools and rights for every investor, everywhere.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  },
  {
    letter: "X",
    icon: (
      <svg width="64" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.3333 62.7201C32.2153 62.7201 32.0993 62.6901 31.9913 62.6341L5.99134 48.6341C5.75934 48.5081 5.61334 48.2661 5.61334 48.0001V16.0001C5.61334 15.7361 5.75934 15.4921 5.99134 15.3661L31.9913 1.36605C32.2053 1.25005 32.4593 1.25005 32.6753 1.36605L58.6753 15.3661C58.9073 15.4921 59.0533 15.7361 59.0533 16.0001V48.0001C59.0533 48.2661 58.9073 48.5081 58.6753 48.6341L32.6753 62.6341C32.5673 62.6921 32.4513 62.7201 32.3333 62.7201ZM33.0533 45.4281V60.7961L57.6133 47.5721V17.2061L45.0553 23.9701V38.4681C45.0553 38.7321 44.9113 38.9741 44.6793 39.1001L33.0533 45.4281ZM7.05334 47.5701L31.6133 60.7941V45.4261L19.9893 39.1001C19.7573 38.9741 19.6133 38.7301 19.6133 38.4681V23.9701L7.05334 17.2061V47.5701ZM33.0533 30.4301V43.7901L43.6133 38.0401V24.7461L33.0533 30.4301ZM21.0533 38.0401L31.6133 43.7901V30.4301L21.0533 24.7441V38.0401ZM21.8413 23.5321L32.3333 29.1821L42.8253 23.5321L32.3333 17.8201L21.8413 23.5321ZM32.3333 16.2801C32.4513 16.2801 32.5713 16.3101 32.6773 16.3661L44.3393 22.7161L56.8133 16.0001L32.3333 2.81805L7.85134 16.0001L20.3253 22.7161L31.9873 16.3661C32.0953 16.3101 32.2153 16.2801 32.3333 16.2801Z" fill="#FF7637"/>
      </svg>
    ),
    title: "X‑ray transparency: verify value, don't just trust.",
    gridClass: "mobile:col-span-1 pc:col-span-2 pc:row-span-1"
  }
];

export default function Content5() {
  return (
    <section className="w-full mobile:min-h-[1136px] pc:h-[734px] overflow-hidden bg-gradient-to-b from-primary via-primary to-[#212121]">
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center mobile:px-6 mobile:py-20 pc:px-[120px] pc:py-[120px]">
        <div className="flex w-full mobile:max-w-[345px] pc:max-w-[1200px] flex-col items-center mobile:gap-6 pc:gap-16">
          
          {/* Mobile Layout - Stacked */}
          <div className="mobile:block pc:hidden flex flex-col mobile:gap-2 w-full">
            {pillars.map((pillar, index) => (
              <div key={index} className="relative flex mobile:h-[160px] mobile:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 mobile:mb-4">
                  {pillar.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular mobile:text-base leading-normal mobile:max-w-[280px]">
                    {pillar.title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute mobile:right-[-21px] mobile:top-[-100px] text-white/[0.02] font-bold leading-[120%] mobile:text-[300px] pointer-events-none select-none">
                  {pillar.letter}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - CSS Grid */}
          <div className="mobile:hidden pc:block w-full">
            <div className="grid pc:h-[400px] pc:gap-2 pc:grid-cols-6 pc:grid-rows-2 w-full">
              
              {/* S Pillar - Row 1, Columns 1-3 */}
              <div className="pc:col-span-3 pc:row-span-1 pc:min-w-[500px] relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[0].icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[0].title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[194px] h-[360px]">
                  S
                </div>
              </div>

              {/* O Pillar - Row 1, Columns 4-6 */}
              <div className="pc:col-span-3 pc:row-span-1 pc:min-w-[500px] relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[1].icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[1].title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[236px] h-[360px]">
                  O
                </div>
              </div>

              {/* D Pillar - Row 2, Columns 1-2 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[2].icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[2].title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute pc:right-[-0.333px] pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[218px] h-[360px]">
                  D
                </div>
              </div>

              {/* E Pillar - Row 2, Columns 3-4 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[3].icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[3].title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute pc:right-[0.333px] pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[188px] h-[360px]">
                  E
                </div>
              </div>

              {/* X Pillar - Row 2, Columns 5-6 */}
              <div className="pc:col-span-2 pc:row-span-1 relative flex pc:p-6 flex-col justify-between items-start rounded-lg bg-white/[0.04] overflow-hidden">
                {/* Icon */}
                <div className="flex-shrink-0 pc:mb-6">
                  {pillars[4].icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-1 justify-end w-full">
                  <h3 className="text-white font-latoRegular pc:text-xl leading-normal pc:max-w-[400px]">
                    {pillars[4].title}
                  </h3>
                </div>
                
                {/* Large Letter Background */}
                <div className="absolute pc:right-0 pc:top-[-82px] text-white/[0.02] font-bold leading-[120%] pc:text-[300px] pointer-events-none select-none w-[205px] h-[360px]">
                  X
                </div>
              </div>
            </div>
          </div>

          {/* Start Trading Button */}
          <div className="mobile:mt-6 pc:mt-16">
            <LandingButton text="Start Trading" />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center mobile:gap-4 pc:gap-6 mobile:mt-4 pc:mt-8">
            <div className="flex items-center mobile:gap-4 pc:gap-6">
              <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors">
                WhitePaper
              </span>
              <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors">
                Terms of Service
              </span>
              <span className="text-secondary font-latoRegular mobile:text-xs pc:text-sm cursor-pointer hover:text-white transition-colors">
                Privacy Policy
              </span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center mobile:gap-4 pc:gap-6">
              {/* X (Twitter) */}
              <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.61708 7.0812L13.9883 2H12.9524L9.15693 6.4119L6.12548 2H2.62903L7.21323 8.6716L2.62903 14H3.66493L7.67308 9.34085L10.8745 14H14.371L9.61708 7.0812ZM8.19828 8.7304L7.73383 8.06605L4.03813 2.7798H5.62923L8.61168 7.04595L9.07613 7.7103L12.9529 13.2556H11.3618L8.19828 8.7304Z" fill="currentColor"/>
              </svg>
              
              {/* Telegram */}
              <svg className="mobile:w-4 mobile:h-4 pc:w-5 pc:h-5 text-white cursor-pointer hover:text-brand transition-colors" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.22125 7.84703C5.5965 6.37683 7.84663 5.40748 8.97171 4.93918C12.1878 3.60192 12.8552 3.36967 13.2911 3.36189C13.387 3.36026 13.6004 3.38396 13.7397 3.49665C13.8555 3.59161 13.8881 3.72004 13.9043 3.81012C13.9188 3.9002 13.9387 4.1055 13.9225 4.26576C13.7488 6.09628 12.9945 10.5384 12.6111 12.5887C12.4501 13.4562 12.1299 13.7471 11.8206 13.7755C11.1477 13.8373 10.6376 13.3312 9.98643 12.9045C8.96807 12.2365 8.39291 11.8208 7.40349 11.1691C6.26032 10.4159 7.00191 10.0019 7.65308 9.32538C7.82311 9.1483 10.7859 6.45406 10.842 6.20969C10.8492 6.17912 10.8565 6.06517 10.7878 6.00512C10.7208 5.94488 10.6213 5.9655 10.5489 5.98178C10.4458 6.00493 8.81972 7.08082 5.66515 9.20925C5.20391 9.52652 4.78608 9.68117 4.40985 9.67303C3.99744 9.66417 3.20161 9.43933 2.61013 9.24724C1.88661 9.01155 1.30957 8.88692 1.36021 8.48663C1.38554 8.27825 1.67318 8.06499 2.22125 7.84703Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
