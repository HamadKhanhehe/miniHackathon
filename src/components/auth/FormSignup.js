import { useRef } from "react"

export default function FormSignup({onFormSubmit}) {
  const firstnRef =  useRef();
  const lastnRef =  useRef();
  const emailRef =  useRef();
   const passwordRef =  useRef();
  const repasswordRef =  useRef();

  const onSubmitHandler = (e) => {
const firstN = firstnRef.current.value;
const lastN = lastnRef.current.value;
const email =  emailRef.current.value;
const password = passwordRef.current.value;
const rePassword = repasswordRef.current.value;
e.preventDefault();
onFormSubmit(email, password, firstN, lastN, rePassword);

  }


    return (
        <>
        <div className="formParent">
        
        <div>
            <form onSubmit={onSubmitHandler}>

<div>
    <div>
    <input type="text" name="firstn" id="firstn" ref={firstnRef}/>
    </div>
    <br />
    <div>
    <input type="text" name="lastn" id="lastn" ref={lastnRef} />
    </div>
    <br />
    <div>
    <input type="email" name="email" id="email" ref={emailRef}/>
    </div>
    <br />
    <div>
    <input type="password" name="password" id="password" ref={passwordRef} />
    </div>
    <br />
    <div>
    <input type="password" name="repassword" id="repassword" ref={repasswordRef} />
    </div>
    <br />
</div>
<div>
    <button type="submit">Signup</button>
</div>

            </form>
        </div>
        </div>
        
        </>
    )
}