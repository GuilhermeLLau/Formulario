import React from 'react';

const Cadastro = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

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
    <section>
      <form action="" onSubmit={CadastroFunc}>
        <input
          type="text"
          id=""
          placeholder="username"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />
        <input
          type="text"
          id=""
          placeholder="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <input
          type="text"
          id=""
          placeholder="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default Cadastro;
