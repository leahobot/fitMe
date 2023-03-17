import logo from '@/assets/Logo.png';
import { SelectedPage } from '@/shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={logo} alt='logo'/>
                  <p className="my-5">
                    Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                    purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                    orci ut habitant laoreet. Iaculis tristique.
                </p>
                <p>© FitMe, All Rights Reserved.</p>
            </div>

            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Laboriosam tempore facilis cupiditate deserunt dolores doloribus.</p>
                <p className='my-5'>Facere atque, quisquam fugit asperiores amet placeat.</p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                 <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Dolor sit amet consectetur adipisicing elit. Vitae, doloremque.</p>
                <p className='my-5'>(+234) 858-953-894.</p>
            </div>
        </div>
    </footer>
  )
}

export default index