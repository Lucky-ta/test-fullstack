import { Button, ClientCard, IClientCard, Layout } from "components";

import * as S from "./styles";

export function HomePage() {
  const qtdClients = 30;

  const cardList: IClientCard[] = [
    {
      id: 1,
      cpf: "859.582.550-53",
      email: "dfsasf@gmail.com",
      name: "Lucas",
      phone: "(51) 995779312",
      status: {
        color: "#4aad5b",
        id: 1,
        text: "Ativo",
      },
    },
    {
      id: 2,
      cpf: "859.582.550-53",
      email: "dfsasf@gmail.com",
      name: "Lucas",
      phone: "(51) 995779312",
      status: {
        color: "#d13541",
        id: 1,
        text: "Inativo",
      },
    },
    {
      id: 3,
      cpf: "859.582.550-53",
      email: "dfsasf@gmail.com",
      name: "Lucas",
      phone: "(51) 995779312",
      status: {
        color: "#d3a710",
        id: 1,
        text: "Aguardando ativação",
      },
    },
    {
      id: 4,
      cpf: "859.582.550-53",
      email: "dfsasf@gmail.com",
      name: "Lucas",
      phone: "(51) 995779312",
      status: {
        color: "#d2d2d2",
        id: 1,
        text: "Desativado",
      },
    },
  ];

  return (
    <Layout>
      <S.HomePage>
        <div className="description">
          <div>
            <h2>Listagem de usuários</h2>

            <span>Escolha um cliente para visualizar os detalhes</span>
          </div>

          <Button type="button" text="Novo cliente" />
        </div>

        <div className="list">
          {cardList.map((card) => (
            <ClientCard key={card.id} {...card} />
          ))}
        </div>

        <p>Exibindo {qtdClients} clientes</p>
      </S.HomePage>
    </Layout>
  );
}
