import Image from 'next/image';


const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            {/* <img
                className="w-[500px] h-[300px]"
                src="https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331"
                alt="About us"
            /> */}

            <Image src={"/Images/Convo Pic.jpeg"} width={300} height={500} alt='Profilre Picture'></Image>

            <Image src={"https://res.cloudinary.com/dfwshshcn/image/upload/t_Banner%2016:9/v1721825444/College_Football_Classic_pmnxip.jpg"} alt='Football Field' width={500} height={300}></Image>


        </div>
    );
};

export default AboutPage;