import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="heroBanner">
          <div className="banenrText">
            <h2 className="headline">Welcome!! to my journey</h2>
          </div>
        </section>
        <section className="about">
          <div className="aboutMainDiv">
            <div className="aboutContent">
              <h3 className="headline">About Rakesh Sharma</h3>
              <p className="paragraph">
                Rakesh Sharma, born on January 13, 1949, in Patiala, Punjab, is
                an iconic figure in Indian history, celebrated as the first
                Indian to travel into space. A graduate of the prestigious
                National Defence Academy, Sharma was commissioned into the
                Indian Air Force (IAF) in 1970. He quickly established himself
                as an exceptional pilot, earning several accolades for his skill
                and bravery.
                <br />
                <br />
                In 1984, Sharma was selected for the Intercosmos program, a
                Soviet space initiative that allowed astronauts from allied
                nations to participate in space missions. After rigorous
                training at the Yuri Gagarin Cosmonaut Training Center in Star
                City, Russia, Sharma embarked on his historic mission aboard
                Soyuz T-11 on April 3, 1984. The mission was a collaborative
                effort between the Indian Space Research Organisation (ISRO) and
                the Soviet space program, symbolizing India's growing
                capabilities in space exploration.
                <br />
                <br />
                During his eight-day stay aboard the Salyut 7 space station,
                Sharma conducted various scientific experiments, including
                imaging the Indian subcontinent from space. His mission was not
                only a technological achievement but also a source of immense
                national pride.
                <br />
                <br />
                Sharma's famous interaction with Prime Minister Indira Gandhi,
                where he described India as "Saare Jahan Se Achha," resonated
                deeply with the Indian public. After returning to Earth, Sharma
                was awarded the Ashoka Chakra, India's highest peacetime
                military decoration, in recognition of his remarkable
                achievement. His journey continues to inspire generations of
                Indians, highlighting the nation's aspirations in space
                exploration.
              </p>
            </div>
            <div className="aboutImage">
              <img src="/astronot.jpg" alt="Rakesh Sharma"></img>
            </div>
          </div>
        </section>
        <section>
          <section className="space">
            <div className="video-overlay"></div>
            <video autoPlay loop muted>
              <source src="./bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="content">
              <h3 className="headlineSpace">
                राकेश शर्मा : भारतीय अंतरिक्ष योद्धा
              </h3>
              <img src="./person.jpg" className="spaceImg" alt="spaceImg"></img>
              <p className="sadNotes">
                "राकेश शर्मा, जिन्होंने अंतरिक्ष की ऊँचाइयों तक पहुंचकर इतिहास
                रचा, उनके साहस और उपलब्धि ने हर भारतीय का सिर गर्व से ऊँचा कर
                दिया। उनकी ऐतिहासिक यात्रा ने हमें सिखाया कि सपनों की कोई सीमा
                नहीं होती और भारतीय हौसले आसमान से भी ऊँचे होते हैं। हम उन्हें
                हमेशा गर्व से याद करेंगे और उनकी प्रेरणा से नई ऊँचाइयों को छूने
                का प्रयास करेंगे।"
              </p>
            </div>
          </section>
          {/* <div>
          <RocketAnimation />
        </div> */}
        </section>
        {/* <About /> */}
      </main>
    </>
  );
};

export default Home;
