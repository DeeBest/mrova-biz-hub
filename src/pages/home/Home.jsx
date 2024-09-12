import './home.css';
import SectionHr from '../../components/sectionHr/SectionHr';
import { useContext } from 'react';
import { Context } from '../../context/context';

const Home = () => {
  const { isLoading } = useContext(Context);

  return (
    <main>
      <div className="home">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <section className="intro-sec">
              <h1>
                Welcome to your <span>ONE</span> stop Mrova business platform.
                🤗
              </h1>
              <SectionHr />
              <p>
                The days of waiting hours for info for a certain Bethal
                business, are way BEHIND!!! Now you can simple visit the
                MrovaBizHub and get the desired information. 😌
              </p>
            </section>
            <section className="sec-two">
              <h3>
                Why wait for HOURS to know if your favorite Food joint is
                operating or not? 👀
              </h3>
              <SectionHr />
              <p>
                Need operating hours for your trusted mechanic? MrovaBizHub got
                your back!
              </p>
              <p>
                Want to know if your favorite Uber is around Mrova? MrovaBizHub
                got your back!
              </p>
              <p>
                Want to place an order for that special cake at your favorite
                Bakery? MrovaBizHub got your back!
              </p>
            </section>
            <section className="sec-three">
              <h3>
                Tired of hearing customers telling you they could not get your
                contacts when they required your services? 😪
              </h3>
              <SectionHr />
              <p>
                On MrovaBizHub customers get easy access to your business
                details and in turn easy access to you. If you have a business
                in Bethal then MrovaBizHub is the place to be! 👍
              </p>
            </section>
          </>
        )}
      </div>
    </main>
  );
};
export default Home;
