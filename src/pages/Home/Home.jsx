import HeroImage from '../../assets/images/hero.png'
import ForWomen from '../../assets/images/ForWomen.png'
import ForMen from '../../assets/images/FroMen.png'
import ForPregWomen from '../../assets/images/ForPreWomen.png'
import ForChild from '../../assets/images/FroChild.png'
import HomeComp from '../../component/Home/HomeComp'
import product from '../../assets/images/Rectangle 3.png'
import svg from '../../assets/icons/star.svg'
import girl from '../../assets/images/Home.png'

export const  Home =() => {

  const listedProduct = <div className='productPage ml-20'>
  <div className='flex-wrap'>

  <img src={product} className='w-274' alt='' />
  <div className='inline-block'>
  <img src={svg} className='inline-block' alt=''/> <p className='inline-block'>Anti-Acne Serum</p> 
  <p>$ 4.99</p>  
  </div></div></div>

  return (
    <div>
      <div className='relative flex items-center'>
      <img src={HeroImage} alt="" srcset="" />
      <div className='absolute w-full'>
        <div className="container mx-auto grid gap-8">
          <h1 className='decoration--gray-700 text-6xl max-w-lg font-bold ml-12'>Scandinavian Supremacy</h1>
          <p className='w-96 ml-12'>At miralou we have turned traditional skin care ingredients lists on its head</p>
          <button className='bg-yellow-300 px-84 w-64 h-16 ml-12'>Buy Now</button>
        </div>
      </div>
    </div>
    <div className="flex p-28 gap-x-7">
      <HomeComp src={ForWomen} name='For Women'></HomeComp>
      <HomeComp src={ForMen} name='For Men'></HomeComp>
      <HomeComp src={ForPregWomen} name='For Pregnant Women'></HomeComp>
      <HomeComp src={ForChild} name='For children'></HomeComp>
    </div>
    <div className="grid justify-items-center px-48 ">
      <h1 className='font-serif decoration--grey-800 text-5xl'>New Arrivals</h1>
      <p className='my-4'>Lorem ipsum Sint necessitatibus alias voluptatum odit blanditiis 
      minima laboriosam numquam ipsa provident quaerat corporis accusamus, adipisci 
      esse, perferendis earum. Accusamus rerum nesciunt et.</p>
    </div>
    <div className='flex-wrap flex justify-between mr-20'>
          {listedProduct}
          {listedProduct}
          {listedProduct}
          {listedProduct}
          {listedProduct}
          {listedProduct}
          {listedProduct}
          {listedProduct}
        </div>
        <div className='flex justify-center'>
        <button className='border-2 p-8  '>Buy Now</button>
        </div>

      <div className='flex mt-20'>
        <img src={girl} className='ml-20'/>
        <div className=''>
          <h1 className='text-6xl ml-20 mt-20'>About Miralou</h1>
          <br/><br/>
          <p className='ml-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit amet felis tempus placerat. Suspendisse cursus fringilla sapien ut mattis. Aenean bibendum metus est, vitae egestas massa elementum vitae. Fusce eleifend urna nec est finibus, nec <br/><br/> Duis
          Duis neque velit, posuere sed mauris eu, ullamcorper convallis elit. Sed posuere volutpat mauris, non venenatis est ultrices a. Ut sit amet sapien dapibus lectus suscipit gravida. Fusce a justo dolor.

Pellentesque nec neque in augue vulputate congue at sit amet ante. Pellentesque euismod est at sapien suscipit, at blandit diam gravida. In est lacus, convallis eget dui ut, bibendum fermentum velit. Praesent et consequat elit. </p>
        </div>
      </div>

      <div className=''>
          <h1 className='text-5xl flex justify-center'>About Miralou</h1>
          <br/><br/>
          <p className='ml-20 flex justify-center w-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit amet felis tempus placerat. Suspendisse </p>
      <div className='mt-10 flex justify-center'>
          {listedProduct}
          {listedProduct}
          {listedProduct}
          </div>
        </div>

        <div className='bg-Purpled w-1086 h-448 p-20'>
  <p className='text-white text-2xl pl-20'>
    Get Our Emails For Info On New<br/>
    Items, Sales and More
  </p>
  <p className='text-white pt-10 pl-20'>
    Subscribe to receive 10% off your next purchase.<br/> 
    Plus hear about new arrivals and offers
  </p>
</div>


      </div>
  )    
}
