import { useEffect, useState } from 'react';
import netlifyAuth from '../netlifyAuth';
import Button from './Button';

export default function LoginWidget() {
    const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
    const [user, setUser] = useState(null);
    
    const login = () => {
    netlifyAuth.authenticate((user) => {
        setLoggedIn(!!user)
        setUser(user)
        netlifyAuth.closeModal()
    })
    }

    const logout = () => {
    netlifyAuth.signout(() => {
        setLoggedIn(false)
        setUser(null)
    })
    }

    useEffect(() => {
        netlifyAuth.initialize((user)=> {
            setLoggedIn(!!user);
        });
    }, [loggedIn]);

    return <>
        {loggedIn ? (
            <div>
              You are logged in!
            </div>
          ) : (
            <Button onClick={login}>
              Log in here
            </Button>
          )}
          </>
    
}