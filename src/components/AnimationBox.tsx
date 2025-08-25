import Image from "next/image";

const AnimationBox = ({step}: {step: number}) => {

    const getImageAddress = (step: number) => {
        switch (step) {
            case 1:
                return "/animation/content4-animation1.svg";
            case 2:
                return "/animation/content4-animation2.svg";
            case 3:
                return "/animation/content4-animation3.svg";
            case 4:
                return "/animation/content4-animation4.svg";
        }
        return "/animation/content4-animation1.svg"
    }

    return (
        <Image src={getImageAddress(step)} alt="AnimationBox" width={700} height={500} />
    )
 
};

export default AnimationBox;