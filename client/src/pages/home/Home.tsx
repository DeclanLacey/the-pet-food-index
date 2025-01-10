import { clearToken } from "../../util/utils"
import "./Home.css"

export default function Home() {
  // clearToken()
  return (
    <div className='home'>
      {/* <img className='home_floating-img-one' src='./assets/cat-img.jpg' /> */}
      <img className='home_logo' src='./assets/logo-transparent.png' />
      <h1 className='home_title'>Welcome to<br></br> THE Pet Food Index</h1>

      <section className='home_info-container'>
        <img className='home_info-img' src='./assets/kibble-bowl-2.jpg' />
        <div className='home_info-content-container-one'>
          <div className='home_info-title-container'>
            <div className='home_info-line-one'></div>
            <h2 className='home_info-title'>About</h2>
          </div>
          
          <h3 className='home_info-subtitle'>Our mission is to empower pet owners with clear, accessible facts about the food they choose for their pets</h3>
          <p className='home_info-text'>
            The food that we feed our pets determines their health just as much as the
            food we eat ourselves does. When it comes to your pet, you have the power to 
            ensure that they receive a healthy, consistent, and appropriate diet. It can be hard
            to easily find the facts about the plethora of pet foods available today. Consumers have more
            choice than ever! But with more choice comes more questions. 
          </p>

          <p className='home_info-text'>
            THE Pet Food Index aims to provide
            a reliable source for finding the facts, and just the facts. We hope that this will allow you
            to make informed decisions about your pets diet, and help them live a long happy life. 
          </p>
        </div>
      </section>

      <section>
      <img className='home_info-img' src='./assets/dog-and-cat.jpg' />
        <div className='home_info-content-container-two'>
          <div className='home_info-title-container'>
            <div className='home_info-line-two'></div>
            <h2 className='home_info-title'>Nutrition Facts</h2>
          </div>
          
          <h3 className='home_info-subtitle'>The labels on pet food can be hard to decipher, THE Pet Food Index can help make sense of it all </h3>
          <p className='home_info-text'>
            On every dog and cat food bag you will find the protein, fat, fiber, and moisture content listed. 
            Additional information such as phosphorus, sodium, potassium, and others can be found with more searching. Usually
            this additional information can be found somewhere on the manufactures website. THE Pet Food Index aims to consolidate
            all of this information in one place to allow consumers to make informed decisions without having to jump through hoops. 
          </p>

          <p className='home_info-text'>
            Basic information about what each of the numbers on the label means is provided to help pet owners understand what they
            should look for, and how it fits their pets lifestyle. There will also be collections of food that will be aimed towards 
            certain lifestyles and medical conditions, however, you should always consult your vet if making a decision about food 
            in regards to a medical condition. But these collections will provide a starting point, and possibly provide options that you
            did not know were available.
          </p>
        </div>
      </section>
    </div>
  )
}
