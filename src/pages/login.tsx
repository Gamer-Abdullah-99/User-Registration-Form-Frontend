import ErrorToast from '@/components/Toast/error';
import SuccessToast from '@/components/Toast/success';
import { Login } from '@/services/user';
import { userState } from '@/store/atom';
import { LoginFormType, UserDataStateType } from '@/utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Page: React.FC = () => {
    const router = useRouter()

    const [toast, setToast] = useState<string>("")
    const [userData, setUserData] = useRecoilState(userState)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: LoginFormType) => {
        try {
            const loginRes: UserDataStateType | undefined = await Login(data)
            if (loginRes != undefined) {
                setUserData(loginRes)
                console.log(loginRes)
                setToast("success")
                router.push("/")
            }
        } catch (err) {
            console.log(err)
            setToast("error")
        }
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center pt-20'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='px-10 py-6 w-96 flex flex-col justify-center items-center rounded-md gap-8 border border-white'>
                    <h1 className='font-bold text-3xl text-white'>Login</h1>

                    <div className='grid grid-cols-1 justify-center items-center '>
                        <input placeholder='Email Address' type="email" {...register('email')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.email ? "border-red-600" : null}`} />
                    </div>

                    <div className='grid grid-cols-1 justify-center items-center'>
                        <input placeholder='Password' type="password" {...register('password')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.password ? "border-red-600" : null}`} />
                    </div>
                    <button className='px-4 py-1 text-black bg-white rounded-md font-bold border transition-colors border-white hover:bg-black hover:text-white' type="submit">Login</button>
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