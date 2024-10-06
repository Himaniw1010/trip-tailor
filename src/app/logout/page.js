
import { redirect } from 'next/navigation'
import { deleteSession } from "../actions/logout";
export default function Login() {
  deleteSession()
  redirect("/login")
}
