import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';

function Index() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm(import.meta.env.VITE_PUBLIC_FORM);

  const solutionsList = t('solutions.list', { returnObjects: true });

  const productsAndServicesListOne = t(
    'productsAndServices.waterTreatment.servicesOne',
    {
      returnObjects: true,
    },
  );

  const productsAndServicesListTwo = t(
    'productsAndServices.waterTreatment.servicesTwo',
    {
      returnObjects: true,
    },
  );

  const fieldSupportList = t('fieldSupport.list', {
    returnObjects: true,
  });

  const equipmentList = t('equipmentProcurement.equipmentList', {
    returnObjects: true,
  });

  const labTestingList = t('labTesting.list', {
    returnObjects: true,
  });

  return (
    <Layout>
      <VideoBackground>
        <div className="h-screen items-center flex justify-center text-white container px-5 xl:px-0 mb-20">
          <div className="text-center">
            <h1 className="text-4xl xl:text-[46px] mb-3 xl:mb-0 xl:leading-relaxed font-bold text-center w-full">
              {t('carousel.heading')}
            </h1>
            <p className="w-full xl:text-xl font-semibold">
              {t('carousel.subheading')}
            </p>
          </div>
        </div>
      </VideoBackground>
      <div className="py-16">
        <div className="container text-center px-5 xl:px-0">
          <h2 className="text-aqua-blue thin-underline underline-offset-[14px] text-lg font-bold tracking-wider mb-10">
            {t('whatWeDo.heading')}
          </h2>
          <p className="text-2xl xl:text-4xl leading-snug tracking-wide text-river-rock font-extralight">
            {t('whatWeDo.paragraph')}
          </p>
        </div>
      </div>
      <div id="about">
        <div className="xl:flex items-center">
          <div className="flex-1">
            <img src="ACAweb1.jpg" />
          </div>
          <div className="flex-1">
            <div className="px-5 xl:px-12">
              <h3 className="text-lg text-river-rock font-bold mb-4 text-center xl:text-left mt-10 xl:mt-0">
                {t('about.heading')}
              </h3>
              <p className="text-lg text-river-rock-ligh font-light leading-snug text-center xl:text-left">
                {t('about.paragraph')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container">
          <h2 className="text-3xl xl:text-5xl text-aqua-blue font-light text-center xl:mx-28 2xl:mx-40 leading-tight px-5 xl:px-0">
            {t('solutions.heading')}
          </h2>
          <div className="xl:columns-3 mt-8">
            <ul className="text-river-rock-light">
              {solutionsList.map((solution) => (
                <li
                  className="text-center text-lg xl:text-[22px] mb-3 px-10"
                  key={solution}
                >
                  <Trans
                    i18nKey={solution}
                    components={{ strong: <strong></strong> }}
                  >
                    {solution}
                  </Trans>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="h-[500px] 2xl:h-[650px] bg-center bg-cover"
        style={{ backgroundImage: 'url(ACAweb2.jpg)' }}
      ></div>
      <div id="products-and-services" className="py-16">
        <div className="container px-5 xl:px-0 text-center">
          <h2 className="text-aqua-blue thin-underline underline-offset-[14px] text-lg font-bold tracking-wider mb-10">
            {t('productsAndServices.heading')}
          </h2>
          <p className="text-2xl xl:text-4xl leading-snug tracking-wide text-river-rock font-extralight">
            {t('productsAndServices.paragraph')}
          </p>
        </div>
      </div>
      <div id="products-and-services" className="mt-16 xl:container  xl:mb-20">
        <h3 className="text-lg font-bold text-river-rock tracking-wider mb-4 px-5 xl:px-0 text-center xl:text-left">
          {t('productsAndServices.waterTreatment.heading')}
        </h3>
        <div className="xl:flex text-river-rock-light">
          <div className="flex-1 xl:columns-2 text-lg my-6  px-5 xl:px-0 text-center xl:text-left">
            {Object.keys(productsAndServicesListOne).map((item) => (
              <div key={item}>
                <h4 className="font-bold">{item}</h4>
                <ul className="mb-5">
                  {productsAndServicesListOne[item].map((subItem) => (
                    <li key={subItem}>{subItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-gray-200 xl:rounded-lg px-5 xl:px-0 py-5 text-center xl:text-left">
            {Object.keys(productsAndServicesListTwo).map((item) => (
              <div className="m-6" key={item}>
                <h4 className="font-bold text-lg">{item}</h4>
                <div className="xl:columns-2 text-lg">
                  <ul className="mb-5">
                    {productsAndServicesListTwo[item]
                      .slice(
                        0,
                        Math.ceil(productsAndServicesListTwo[item].length / 2),
                      )
                      .map((subItem) => (
                        <li className="mb-1" key={subItem}>
                          {subItem}
                        </li>
                      ))}
                  </ul>
                  <ul className="mb-5">
                    <>
                      {productsAndServicesListTwo[item]
                        .slice(
                          Math.ceil(
                            productsAndServicesListTwo[item].length / 2,
                          ),
                        )
                        .map((subItem) => (
                          <li className="mb-1" key={subItem}>
                            {subItem}
                          </li>
                        ))}
                    </>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-aqua-blue text-center">
        <p className="text-white text-[22px] font-bold py-8">{t('callout')}</p>
      </div>
      <div>
        <div className="xl:flex items-center bg-aqua-blue-light">
          <div className="flex-1">
            <img src="ACAweb3.jpg" />
          </div>
          <div className="flex-1 py-10 xl:py-0 text-center xl:text-left">
            <div className="px-12">
              <h3 className="text-lg text-river-rock-light font-bold mb-4">
                {t('fieldSupport.heading')}
              </h3>
              <p className="text-lg text-river-rock font-light leading-snug mb-3">
                {t('fieldSupport.paragraph')}
              </p>
              <ul>
                {fieldSupportList.map((item) => (
                  <li className="text-river-rock-light text-lg mb-1" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:flex text-river-rock-light">
        <div className="flex-1 text-lg my-16 xl:mx-12">
          <div className="col-span-2 text-center xl:text-left">
            <h3 className="text-lg font-bold text-river-rock tracking-wider mb-4">
              {t('equipmentProcurement.heading')}
            </h3>
          </div>
          <div className="xl:columns-2 text-center xl:text-left">
            {Object.keys(equipmentList).map((item, i) => (
              <div key={item}>
                <h4 className="font-bold">
                  <Trans
                    components={{
                      span: <span className="font-normal"></span>,
                    }}
                  >
                    {item}
                  </Trans>
                </h4>
                <ul
                  className={`${
                    i === 2 ? 'break-after-column' : 'break-after-auto'
                  } mb-5`}
                >
                  {equipmentList[item].map((subItem) => (
                    <li key={subItem}>
                      <Trans
                        i18nKey={subItem}
                        components={{
                          strong: <strong></strong>,
                          span: <span></span>,
                          ul: <ul style={{ listStyle: 'inside' }}></ul>,
                          li: <li></li>,
                        }}
                      >
                        {subItem}
                      </Trans>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-center bg-cover w-1/2"
          style={{
            backgroundImage: 'url(ACAweb4.jpg)',
            boxSizing: 'content-box',
          }}
        ></div>
      </div>
      <div>
        <div className="xl:flex items-center bg-aqua-blue-light">
          <div className="flex-1">
            <img src="ACAweb5.jpg" />
          </div>
          <div className="flex-1 py-10 xl:py-0 text-center xl:text-left">
            <div className="px-5 xl:px-12">
              <h3 className="text-lg text-river-rock-light font-bold mb-4">
                {t('labTesting.heading')}
              </h3>
              <p className="text-lg text-river-rock font-light leading-snug mb-3">
                {t('labTesting.paragraph')}
              </p>
              <ul>
                {labTestingList.map((item) => (
                  <li className="text-river-rock-light text-lg mb-1" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="bg-left-bottom"
        style={{
          backgroundImage: 'url(ContactBKGD.png)',
        }}
      >
        <div className="xl:container px-5 xl:px-0 xl:flex py-16">
          <div className="xl:flex xl:w-1/2 items-center justify-center text-center px-5 xl:px-36 mb-10 xl:mb-0">
            <h2 className="text-white text-3xl xl:text-4xl font-light">
              <Trans components={{ b: <b></b> }}>{t('contactCallout')}</Trans>
            </h2>
          </div>
          <div className="flex-1 xl:mx-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  className="bg-aqua-blue-light col-span-2 h-10 pl-2"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  className="bg-aqua-blue-light h-10 pl-2"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  className="bg-aqua-blue-light h-10 pl-2"
                  placeholder="Phone Number"
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
                <input
                  className="bg-aqua-blue-light col-span-2 h-10 pl-2"
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
                <textarea
                  className="bg-aqua-blue-light col-span-2 min-h-[200px] pl-2"
                  placeholder="Enter message here"
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div className="xl:flex col-span-2">
                  <div className="flex-1 flex flex-wrap items-center justify-center">
                    <button
                      disabled={state.submitting}
                      className="text-white w-full text-lg font-bold"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {state.succeeded && (
              <p className="text-white text-lg">Message sent successfully</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const VideoBackground = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="WaterTreatmentVideo.mp4" type="video/mp4" />
      </video>
      <div
        className="bg-gradient-to-b from-black/80 to-aqua-blue/40 h-full w-full"
        style={{
          position: 'relative',
          backdropFilter:
            'drop-shadow(0px 0px 10px rgba(2px, 4px, 6px, black))',
          mixBlendMode: 'hard-light',
        }}
      >
        {children}
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  children: PropTypes.node,
};

export default Index;
