import AnimationBox from './AnimationBox';

export default function Content4() {
  return (
    <section className="w-full mobile:h-[620px] pc:min-h-screen  pc:px-[6.5%] pc:py-[6.5%] overflow-hidden bg-gradient-to-b from-primary via-primary to-[#212121]">
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center mobile:px-4 mobile:py-20 ">
        <div className="flex w-full mobile:max-w-[361px] pc:max-w-[1200px] flex-col items-center mobile:gap-4 pc:gap-12">
          
          {/* Title Section */}
          <div className="flex w-full mobile:max-w-[346px] pc:max-w-[610px] flex-col items-center mobile:gap-6 pc:gap-8 text-center">
            <h2 className="font-latoBold mobile:text-[28px] pc:text-4xl font-bold text-white">
              The SoDEX Stack
            </h2>
            <p className="font-latoRegular mobile:text-sm pc:text-xl text-secondary">
              High-performance, Scalable Blockchain Architecture
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="mobile:block pc:hidden flex w-full justify-between items-center mobile:px-6 pc:px-0">
            <svg className="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.96939 12.5306L14.4694 20.0306C14.5391 20.1002 14.6218 20.1555 14.7128 20.1932C14.8039 20.2309 14.9015 20.2503 15 20.2503C15.0986 20.2503 15.1961 20.2309 15.2872 20.1932C15.3782 20.1555 15.461 20.1002 15.5306 20.0306C15.6003 19.9609 15.6556 19.8781 15.6933 19.7871C15.731 19.6961 15.7504 19.5985 15.7504 19.4999C15.7504 19.4014 15.731 19.3038 15.6933 19.2128C15.6556 19.1217 15.6003 19.039 15.5306 18.9693L8.56032 11.9999L15.5306 5.03055C15.6714 4.88982 15.7504 4.69895 15.7504 4.49993C15.7504 4.30091 15.6714 4.11003 15.5306 3.9693C15.3899 3.82857 15.199 3.74951 15 3.74951C14.801 3.74951 14.6101 3.82857 14.4694 3.9693L6.96939 11.4693C6.89965 11.539 6.84433 11.6217 6.80659 11.7127C6.76885 11.8038 6.74942 11.9014 6.74942 11.9999C6.74942 12.0985 6.76885 12.1961 6.80659 12.2871C6.84433 12.3782 6.89965 12.4609 6.96939 12.5306Z" fill="#FF7637"/>
            </svg>
            <svg className="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0306 12.5306L9.53062 20.0306C9.46093 20.1002 9.37821 20.1555 9.28716 20.1932C9.19612 20.2309 9.09854 20.2503 8.99999 20.2503C8.90144 20.2503 8.80386 20.2309 8.71282 20.1932C8.62177 20.1555 8.53905 20.1002 8.46936 20.0306C8.39968 19.9609 8.34441 19.8781 8.30669 19.7871C8.26898 19.6961 8.24957 19.5985 8.24957 19.4999C8.24957 19.4014 8.26898 19.3038 8.30669 19.2128C8.34441 19.1217 8.39968 19.039 8.46936 18.9693L15.4397 11.9999L8.46936 5.03055C8.32863 4.88982 8.24957 4.69895 8.24957 4.49993C8.24957 4.30091 8.32863 4.11003 8.46936 3.9693C8.61009 3.82857 8.80097 3.74951 8.99999 3.74951C9.19901 3.74951 9.38988 3.82857 9.53062 3.9693L17.0306 11.4693C17.1003 11.539 17.1557 11.6217 17.1934 11.7127C17.2312 11.8038 17.2506 11.9014 17.2506 11.9999C17.2506 12.0985 17.2312 12.1961 17.1934 12.2871C17.1557 12.3782 17.1003 12.4609 17.0306 12.5306Z" fill="#FF7637"/>
            </svg>
          </div>

          {/* The SoDEX Stack Diagram */}
          <div className="flex w-full mobile:max-w-[321px] pc:max-w-[800px] flex-col items-center mobile:gap-4 pc:gap-8">
            
          <AnimationBox step={1} />


          </div>
        </div>
      </div>
    </section>
  );
}
