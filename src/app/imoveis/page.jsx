import { excluir, salvar } from '@actions/imoveis';
import Crud from '@components/Crud';
import { prisma } from '@lib/prisma';

const colunas = [
    { title: 'Tipo', dataIndex: 'tipo' },
    { title: 'Preço', dataIndex: 'preco' },
    { title: 'Descrição', dataIndex: 'descricao' },
    { title: 'Cliente', dataIndex: 'cliente_nome' },
];

export default async function Imoveis() {
    const [imoveis, clientes] = await Promise.all([
        prisma.imovel.findMany({ orderBy: { tipo: 'asc' }, include: { cliente: true } }),
        prisma.cliente.findMany({ orderBy: { nome: 'asc' } }),
    ]);

    const registros = imoveis.map(({ cliente, ...imovel }) => ({ ...imovel, cliente_nome: cliente.nome }));

    const campos = [
        { name: 'tipo', label: 'Tipo' },
        { name: 'preco', label: 'Preço' },
        { name: 'descricao', label: 'Descrição', opcional: true },
        { name: 'cliente_id', label: 'Proprietário', opcoes: clientes.map((c) => ({ value: c.id, label: c.nome })) },
    ];

    return <Crud titulo="Imóveis" {...{ colunas, campos, registros, salvar, excluir }} />;
}
