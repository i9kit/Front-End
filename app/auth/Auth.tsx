'use client'
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import Button from "@/ui/button/Button";
import Heading from "@/ui/Heading";
import Field from "@/ui/input/Field";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { validEmail } from "./valid-email";
import Loader from "@/ui/Loader";
import { useAuthRedirect } from "./useAuthRedirect";
import AuthField from "@/ui/input/AuthField";


const Auth: FC = () => {
    useAuthRedirect()

    const {isLoading} = useAuth()

    const{login, register} = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {
        register: formRegister, 
        handleSubmit, 
        formState: {errors}, 
        reset } = useForm<IEmailPassword>({
        mode: "onChange"
    })
    
    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        if (type === 'login') login(data)
            else register(data)

        reset()
    }
    

    return (
        <section className="flex h-screen">
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="rounded-lg bg-white p-8 m-auto border border-black/30 shadow-md"
            >
                <Heading className="capitalize text-center mb-4">
                    {type}</Heading>

                {isLoading ? (
                    <Loader/> 
                ) : (
                    <>
                    <AuthField {...formRegister('email',{
                        required: 'Email is required',
                        pattern: {
                            value: validEmail,
                            message: 'Please enter a valid email address'
                        }
                    })} 
                    placeholder="Email"
                    error = {errors.email?.message}
                    />

                    <AuthField {...formRegister('password',{
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Min length should more 6 symbols'
                        }
                    })}
                    type="password"
                    placeholder="Password"
                    error = {errors.password?.message}
                    />
                    <Button size='md' type='submit' variant = 'orange'>Let's go!</Button>{''} 
                    
                    <div>
                        <button
                        type="button"
                        className="inline-block opacity-50 mt-3
                        text-sm" 
                            onClick={() => setType(type === 'login' ? 
                                'register' : 'login')}
                            >
                                {type === 'login' ? 'Register' : 'Login'}
                        </button>
                    </div>
                    </>
                )}
            </form>
        </section>    
    )
}

export default Auth