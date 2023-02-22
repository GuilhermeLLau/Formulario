import styled from 'styled-components';
import img from '../Assets/matthew-mcbrayer-qD9xzm7yK9U-unsplash.jpg';

export const Titulo = styled.h1`
  font-size: 3rem;
  color: #3454aa;
`;
export const TituloPrincipal = styled.h1`
  font-size: 3rem;
  color: white;
`;
export const Logo = styled.h1`
  font-size: 2rem;
  color: #071a84;
`;

export const InputInfo = styled.input`
  padding: 1rem;
  border: 1px solid #bbc4d9;
  border-radius: 12px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  color: white;
  padding: 2rem;
`;

export const Wrapper = styled.section`
  padding: 2rem;
`;

export const Formulario = styled.form`
  display: flex;
  padding: 1rem;
  max-width: 80%;
  gap: 0.5rem;
  margin: 0 auto;
  flex-direction: column;
`;

export const Botao = styled.button`
  font-size: 1rem;
  padding: 1rem;
  margin: 0.3rem 0;
  border-radius: 12px;
  color: white;
  border: none;
  background-color: #071a84;
  cursor: pointer;
`;

export const BotaoCadastro = styled.button`
  font-size: 1rem;
  border: none;
  max-width: 30%;
  background: none;
  cursor: pointer;
  margin-left: auto;
  color: #071a84;
`;
export const Foot = styled.span`
  margin-top: auto;
`;
