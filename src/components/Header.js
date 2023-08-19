// import Link from "next/link";

// export default function Header({ signin }) {
//     return (
//         <header>
//             <nav>
//                 <div className="headerParent">
//                     <div>
//                         <h1>Personal Blogging Page</h1>
//                     </div>
//                     <div>
//                         <Link href={signin ? "/auth/Login" : "/auth/SignUp"}> signin ? "SignUp" : "Login"</Link>
//                     </div>

//                 </div>
//             </nav>
//         </header>
//     )
// }



// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import Link from "next/link";       

// export default function Header({ signin }) {
//   const { data:session} = useSession();
//     return (
//         <header>
//             <nav>
//                 <div className="headerParent">
//                     <div>
//                         <h1>Personal Blogging Page</h1>
//                     </div>
//                     <div>



//                         {/* <Link href={signin ?   "/auth/Login"  : "/auth/SignUp" }>{signin ? "Login" :  "SignUp"}</Link> */}
//                         <button> <Link href="/auth/Login" >{session ? "" : "Login"}</Link></button>

//                         <button onClick={signOut}>Log out</button>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Header() {
    const { data: session } = useSession();
    const router = useRouter(); // Initialize the useRouter hook

    const handleLogout = async () => {
        await signOut(); // Sign out the user
        router.push("/auth/Login"); // Redirect to the login page
    };

    return (
        <header>
            <nav>
                <div className="headerParent">
                    <div>
                        <h1>Personal Blogging Page</h1>
                    </div>
                    <div>
                        {session ? (
                            <>
                                <button onClick={handleLogout}>Log out</button>
                            </>
                        ) : (
                            <Link href="/auth/Login">Login</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}





