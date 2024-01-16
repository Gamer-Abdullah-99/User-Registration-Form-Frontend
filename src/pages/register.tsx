import ErrorToast from '@/components/Toast/error';
import SuccessToast from '@/components/Toast/success';
import { Register } from '@/services/user';
import { RegisterFormType } from '@/utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiUserCircleFill } from 'react-icons/pi';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Page: React.FC = () => {
    const router = useRouter()

    const [toast, setToast] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: RegisterFormType) => {
        try {
            await Register(data)
            setToast("success")
            router.push("/login")
        } catch (err) {
            console.log(err)
            setToast("error")
        }
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center pt-20 bg-pic'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='px-10 bg-black py-10 w-96 flex flex-col justify-center items-center rounded-xl gap-8 border border-white'>

                    <p className='text-white text-8xl'><PiUserCircleFill /></p>

                    <h1 className='font-bold text-xl text-white'>Create a new account</h1>

                    <div className='grid grid-cols-1 justify-center items-center '>
                        <input placeholder='Username' type="text" {...register('username')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.username ? "border-red-600" : null}`} />
                    </div>

                    <div className='grid grid-cols-1 justify-center items-center '>
                        <input placeholder='Email Address' type="email" {...register('email')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.email ? "border-red-600" : null}`} />
                    </div>

                    <div className='grid grid-cols-1 justify-center items-center'>
                        <input placeholder='Password' type="password" {...register('password')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.password ? "border-red-600" : null}`} />
                    </div>
                    <button className=' px-4 py-1 text-black bg-white rounded-md w-60 font-bold border transition-colors border-white hover:bg-black hover:text-white' type="submit">Register</button>
                </div>
            </form>
            <div className="fixed bottom-4 left-10 z-50">
                {toast === "submitted" ? (
                    <SuccessToast
                        toast={toast}
                        setToast={setToast}
                    />
                ) : toast === "error" ? (
                    <ErrorToast
                        toast={toast}
                        setToast={setToast}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default Page;