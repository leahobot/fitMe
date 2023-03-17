import { SelectedPage } from '@/shared/types'
import {motion} from 'framer-motion'
import {useForm} from 'react-hook-form'
import {email} from '@/formEmail';
import ContactUsGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({setSelectedPage}: Props) => {

    const {
        register,
        trigger,
        formState: {errors},
    } = useForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        const isValid = await trigger();
        
        if(!isValid){
            e.preventDefault();
        }
    
    }

    const inputStyles = 'w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white';

    return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() =>setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div 
                className='md:w-3/5'
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
                >
                <HText>
                    <span className='text-primary-500'>JOIN NOW {' '}</span>TO GET IN SHAPE
                </HText>
                <p className='my-5'>
                     Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>

            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div 
                    className='mt-10 basis-3/5 md:mt-0'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <form target="_blank" onSubmit={handleSubmit}
                    method='POST'
                    action= {email}
                    >
                        <input 
                            className={inputStyles}
                            type='text'
                            placeholder='Name'
                            {...register('name', {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className='mb-1 text-primary-500'>
                                {errors.name.type === 'required' && 'This field is required'}
                                {errors.name.type === 'maxLength' && 'Max length is a 100 Characters'}
                            </p>
                        )}

                        <input 
                            className={inputStyles}
                            type='email'
                            placeholder='Email'
                            {...register('email', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className='mb-1 text-primary-500'>
                                {errors.email.type === 'required' && 'This field is required'}
                                {errors.email.type === 'pattern' && 'Invalid email address'}
                            </p>
                        )}

                        <textarea 
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            placeholder='Message'
                            {...register('message', {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className='mb-1 text-primary-500'>
                                {errors.message.type === 'required' && 'This field is required'}
                                {errors.message.type === 'maxLength' && 'MaxLength is 200 Characters'}
                            </p>
                        )}

                        <button 
                            type='submit'
                            className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                        >
                                SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div 
                    className='relative mt-16 basis-2/5 md:mt-0'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}
                >
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                        <img 
                            className='w-full' alt='contact-us-page-graphic' src={ContactUsGraphic}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs