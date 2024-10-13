'use client'
import styles from './SignUpForm.module.css'
import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/actions/auth'
import { useEffect, useRef } from 'react'
import Button from '../Button/Button'

export default function SignupForm() {
  const [state, action] = useFormState(signup, undefined)
  const formRef = useRef();
  useEffect(() => {
    if (state == true) {
      formRef.current.reset()
    }
  }, [state])
  return (
    <div className={styles.wrapper}>
      <h2>Sign Up</h2>
      <form ref={formRef} action={action}>
        <div className={styles.form_group}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="John Doe" />
          {state?.errors?.name && <span>{state.errors.name}</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="john@example.com" />
          {state?.errors?.email && <span>{state.errors.email}</span>}
          {state?.errors?.userExist && <span>User with this email address already exist.</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Passswsord</label>
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
    <Button label="Sign Up" disabled={pending} buttonType="submit" type='button' variant='red' size="lg" />
  )
}