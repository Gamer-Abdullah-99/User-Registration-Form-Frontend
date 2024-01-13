import { LoginFormType, RegisterFormType } from '@/utils/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: RegisterFormType) => {
        console.log(data);
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center pt-20'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='px-10 py-6 w-96 flex flex-col justify-center items-center rounded-md gap-8 border border-white'>
                    <h1 className='font-bold text-3xl text-white'>Register</h1>

                    <div className='grid grid-cols-1 justify-center items-center '>
                        <input placeholder='Username' type="text" {...register('username')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.username ? "border-red-600" : null}`} />
                    </div>

                    <div className='grid grid-cols-1 justify-center items-center '>
                        <input placeholder='Email Address' type="email" {...register('email')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.email ? "border-red-600" : null}`} />
                    </div>

                    <div className='grid grid-cols-1 justify-center items-center'>
                        <input placeholder='Password' type="password" {...register('password')} className={`border text-black px-4 py-1 rounded-md w-60 ${errors.password ? "border-red-600" : null}`} />
                    </div>
                    <button className=' px-4 py-1 text-black bg-white rounded-md font-bold border transition-colors border-white hover:bg-black hover:text-white' type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;