'use client'
import styles from './LoginForm.module.css'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'
import { useEffect, useRef } from 'react'

export default function LoginForm() {
  const [state, action] = useFormState(login, undefined)
  const formRef = useRef();
  useEffect(() => {
    if (state == true) {
      formRef.current.reset()
    }
  }, [state])
  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <form ref={formRef} action={action}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="john@example.com" />
          {state?.errors?.email && <span>{state.errors.email}</span>}
          {state?.errors?.userExist && <span>User with this email address already exist.</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />

          {state?.errors?.password && (
            <div>
              <span>Password must:</span>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        
        </div>
        <SubmitButton />

      </form>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  )
}