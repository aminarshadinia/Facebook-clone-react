import React from 'react'
import Story from './Story'
import './StoryReel.css'
const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaks6eNCshMGxP2c_3Okk39lXZnO_PSnCTQ&usqp=CAU'}
        profileSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeppCoxZPiVk60lL_9s7zbbzfwAKp0aLLKQ&usqp=CAU'}
        title={'one'} />
      <Story image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxyC2uOrPyz1_3LwcRxb286nnker3T0QHfg&usqp=CAU'}
        profileSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dwhCUpm2hZJ193nkytULtKHgOTcJdo-HM2_zZmIH-_MVJm19j8vnbeMkMSpp4hcStXo&usqp=CAU'}
        title={'two'} />
      <Story image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaks6eNCshMGxP2c_3Okk39lXZnO_PSnCTQ&usqp=CAU'}
        profileSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DZb3pHuGX_pmdVAjud4P3NxLbbkgtDdpeA&usqp=CAU'}
        title={'three'} />
      <Story image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0k84yqv_Ctlu1QTXBXgJh3dVxU4ss7QTzjg&usqp=CAU'}
        profileSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Nyy0MfiDsyf-29ZFPfI9wrWW6CCB665WyA&usqp=CAU'}
        title={'four'} />
    </div>
  )
}

export default StoryReel
