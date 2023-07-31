import bgImg from '../../assets/Home/image.jpg'

const Slider = () => {
    return (
        <div className='min-h-screen bg-no-repeat bg-cover relative' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='absolute bottom-8 left-24 w-[50%] space-y-4'>
                <h3 className='text-4xl '>We Provides</h3>
                <h3 className='md:text-7xl text-5xl font-bold'>Best Language Trainer</h3>
                <p>The globalized economy, better career possibilities, and high-paying language jobs continue to stimulate the demand for language specialists in Bangladesh.</p>
            </div>
        </div>
    );
};

export default Slider;