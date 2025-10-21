import { useContext } from 'react';
import { AuthenticationContext } from '../authentication/AuthenticationProvider';
import style from './Login.module.css';
import { useNavigate } from 'react-router';

const Login = () => {
    const ctx = useContext(AuthenticationContext);
    const navigate = useNavigate();
    return (
        <div className={style.loginContainer}>
            <form className={style.loginForm} noValidate>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    placeholder="Nome..."
                    onChange={
                        (e) => {
                            const nome = e.target.value;
                            ctx.setUsername(nome);
                        }
                    }
                />
                <button
                    className={style.loginBtn}
                    type="submit"
                    onClick={
                        (e) => {
                            e.preventDefault();
                            ctx.setAuthenticated(true);
                            navigate('/');
                        }
                    }
                >Login</button>
            </form>
        </div>
    );
};

export default Login;