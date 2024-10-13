'use client'
import styles from './LoginForm.module.css'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'
import { useEffect, useRef } from 'react'
import Button from '../Button/Button'

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
          <label htmlFor="loginemail">Email</label>
          <input id="loginemail" name="email" placeholder="john@example.com" />
          {state?.errors?.email && <span>{state.errors.email}</span>}
          {state?.errors?.userNotExist && <span>Incorrect Email. Please enter again</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="loginpassword">Password</label>
          <input id="loginpassword" name="password" type="password" />
          {state?.errors?.passwordIncorrect && <span>Incorrect Password. Please enter again</span>}
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
    <Button label="Login" disabled={pending} buttonType="submit" type='button' variant='red' size="lg" />
  )
}