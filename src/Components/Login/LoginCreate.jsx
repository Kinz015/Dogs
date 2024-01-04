import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(ev) {
    ev.preventDefault9;
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="type" name="username" {...username}></Input>
        <Input label="Email" type="type" name="email" {...email}></Input>
        <Input label="Senha" type="type" name="senha" {...password}></Input>
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
