import FormLogin from "@/components/auth/FormLogin";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router";


export default function Login() {
    const router = useRouter();
    const onSubmit = async (email, password) => {
        // Use signIn to attempt authentication
        const data = await signIn('credentials', { redirect: false, email, password });

        if (data.error) {
            console.log('Authentication error:', data.error);
        } else {
            console.log('Authentication successful');

            // Redirect to profile page if authentication is successful
            router.push('/dashboard');
        }
    };


    return (
        <>
            <div className="loginHeader">
                <h1>Login</h1>
            </div>
            <FormLogin signin={true} onFormSubmit={onSubmit} />


        </>


    )
}