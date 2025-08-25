import Image from "next/image";

const AnimationBox = ({step}: {step: number}) => {

    const getImageAddress = (step: number) => {
        switch (step) {
            case 1:
                return "/animation/content4-animation1.svg";
        }
        return "/animation/content4-animation1.svg"
    }

    return (
        <Image src={getImageAddress(step)} alt="AnimationBox" width={700} height={500} />
    )
 
};

export default AnimationBox;