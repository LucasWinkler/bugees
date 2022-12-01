import { UserGroupIcon } from '@heroicons/react/24/outline';

import { Container } from '@/components/common/Container';
import FeaturesCard from '@/components/home/Features/FeaturesCard';

const Features = () => {
  return (
    <section id='features' className='pb-[6rem] lg:pt-20 lg:pb-[8rem]'>
      <Container>
        <h2 className='text-center text-4xl font-bold text-white lg:text-5xl'>
          Features
        </h2>
        <div className='item-center mx-auto flex flex-wrap justify-center gap-12 pt-14 md:pt-24 xl:gap-[4.25rem]'>
          <FeaturesCard icon={<UserGroupIcon />} title='Collaboration'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tenetur debitis ipsam numquam aliquam?
          </FeaturesCard>
          <FeaturesCard icon={<UserGroupIcon />} title='Collaboration'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tenetur debitis ipsam numquam aliquam?
          </FeaturesCard>
          <FeaturesCard icon={<UserGroupIcon />} title='Collaboration'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tenetur debitis ipsam numquam aliquam?
          </FeaturesCard>
        </div>
      </Container>
    </section>
  );
};

export default Features;
