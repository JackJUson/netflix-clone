import {
  createUserWithEmailAndPassword,
  User,
} from 'firebase/auth'

import { useState } from 'react'
import { auth } from '../firebase'

function useAuth() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const signUp = async(email: string, password: string) => {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setUser(userCredential.user)
      })
    }
    
  return 
}
export default useAuth;