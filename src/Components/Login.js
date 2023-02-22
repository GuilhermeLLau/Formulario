import React from 'react';
import {
  Titulo,
  InputInfo,
  Container,
  ImgContainer,
  Wrapper,
  Formulario,
  Botao,
  BotaoCadastro,
  Logo,
  TituloPrincipal,
  Foot,
} from './Estilos';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [slide, setSlide] = React.useState(0);

  const Validacao = (password) => {
    let regex = /(?=.*[!@#$&*])/;
    if (password.length < 9) {
      setError('A senha deve ter pelo menos 8 caracters');
      return;
    }
    if (regex.test(password) === false) {
      setError('A senha precisa ter pelo menos 1 caracter especial');
    }
    console.log(error);
  };

  function LoginFetch(event) {
    event.preventDefault();
    Validacao(password);
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  function CadastroFunc(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <Container>
      <ImgContainer>
        <Logo>Logo da Empresa</Logo>
        <div>
          <TituloPrincipal>Seja Bem-Vindo</TituloPrincipal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa
            aspernatur reiciendis officia dicta dolore eligendi eaque,
            distinctio est aperiam dolor velit vero laudantium obcaecati odio
            placeat consequatur! Dicta, maxime.
          </p>
        </div>
        <Foot>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio illum
        </Foot>
      </ImgContainer>
      <Wrapper>
        {slide === 0 ? (
          <Formulario action="" onSubmit={LoginFetch}>
            <Titulo>Login</Titulo>
            <InputInfo
              type="text"
              id=""
              placeholder="username"
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
            />
            <InputInfo
              type="text"
              id=""
              placeholder="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <div>
              <input type="radio" />
              <span>Lembre-se de mim</span>
            </div>
            <Botao>Entrar</Botao>
            <BotaoCadastro
              onClick={() => {
                setSlide(slide + 1);
              }}
            >
              Cadastre-se
            </BotaoCadastro>
          </Formulario>
        ) : (
          <Formulario action="" onSubmit={CadastroFunc}>
            <Titulo>Cadastro</Titulo>
            <InputInfo
              type="text"
              id=""
              placeholder="username"
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
            />
            <InputInfo
              type="text"
              id=""
              placeholder="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
            <InputInfo
              type="text"
              id=""
              placeholder="email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
            <Botao>Cadastre-se</Botao>
            <BotaoCadastro
              onClick={() => {
                setSlide(slide - 1);
              }}
            >
              Já possui uma conta?
            </BotaoCadastro>
          </Formulario>
        )}
      </Wrapper>
    </Container>
  );
};

export default Login;
