import { excluir, salvar } from '@actions/alugueis';
import Crud from '@components/Crud';
import { descriptografar } from '@lib/cripto';
import { prisma } from '@lib/prisma';

const colunas = [
    { title: 'Data', dataIndex: 'data' },
    { title: 'Imóvel', dataIndex: 'imovel_tipo' },
    { title: 'Descrição', dataIndex: 'imovel_descricao' },
    { title: 'Preço', dataIndex: 'imovel_preco' },
    { title: 'Proprietário', dataIndex: 'cliente_nome' },
    { title: 'CPF', dataIndex: 'cliente_cpf' },
];

export default async function Alugueis() {
    const [alugueis, imoveis] = await Promise.all([
        prisma.aluguel.findMany({
            orderBy: { data: 'asc' },
            include: { imovel: { include: { cliente: true } } },
        }),
        prisma.imovel.findMany({
            orderBy: { tipo: 'asc' },
            include: { cliente: true },
        }),
    ]);

    const registros = alugueis.map(({ id, data, imovel_id, imovel }) => ({
        id,
        imovel_id,
        data: data.toISOString().slice(0, 10),
        imovel_tipo: imovel.tipo,
        imovel_descricao: imovel.descricao,
        imovel_preco: imovel.preco,
        cliente_nome: imovel.cliente.nome,
        cliente_cpf: descriptografar(imovel.cliente.cpf),
    }));

    const campos = [
        { name: 'data', label: 'Data', tipo: 'date' },
        {
            name: 'imovel_id',
            label: 'Imóvel',
            opcoes: imoveis.map((i) => ({
                value: i.id,
                label: `${i.tipo} - ${i.cliente.nome}`,
            })),
        },
    ];

    return <Crud titulo="Aluguéis" {...{ colunas, campos, registros, salvar, excluir }} />;
}

