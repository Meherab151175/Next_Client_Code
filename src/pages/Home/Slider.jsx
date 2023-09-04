import bgImg from '../../assets/Home/image.jpg'

const Slider = () => {
    return (
        <div className='min-h-screen items-center justify-center flex bg-no-repeat bg-center md:bg-cover md:relative' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className=' overflow-hidden bottom-8 left-24 w-[70%] space-y-4'>
                <h3 className='text-xl md:text-3xl'>We Provides</h3>
                <h3 className='md:text-7xl text-2xl font-bold'>Best Language Trainer</h3>
                <p>The globalized economy, better career possibilities, and high-paying language jobs continue to stimulate the demand for language specialists in Bangladesh.</p>
            </div>
        </div>
    );
};

export default Slider;