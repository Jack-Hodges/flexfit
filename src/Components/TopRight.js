import HeroImage from '../Images/heroImage.jpeg';

function TopRight() {
    return (
        <div class="relative w-full h-full rounded-2xl overflow-hidden">
            <img src={HeroImage} alt="Image of a person wearing sunglasses" class="w-full h-full object-cover"/>
            <div class="absolute bottom-6 left-6 text-white text-3xl font-extrabold">
                TRAIN ON YOUR <br></br>OWN TIME
            </div>
        </div>
    );
}

export default TopRight;