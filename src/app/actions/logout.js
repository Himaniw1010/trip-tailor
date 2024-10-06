'use server'
 
import { cookies } from 'next/headers'
 
export async function deleteSession(data) {
  cookies().delete('session')
}