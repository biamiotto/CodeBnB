import bcrypt from 'bcryptjs';

try {
    process.loadEnvFile();
} catch {
    console.error('   ❌ parceria ... arquivo .env não encontrado');
    process.exit(1);
}

const { criptografar } = await import('../src/lib/cripto.js');
const { prisma } = await import('../src/lib/prisma.js');

// para ter mais linhas no banco, acrescente mais objetos em cada lista/tabela
const dados = {
    usuario: [
        { nome: 'admin', senha: bcrypt.hashSync('admin123', 10) },
        { nome: 'mariana', senha: bcrypt.hashSync('mari123', 10) },
        { nome: 'pedro', senha: bcrypt.hashSync('pedro123', 10) },
        { nome: 'julia', senha: bcrypt.hashSync('julia123', 10) },
        { nome: 'gabriel', senha: bcrypt.hashSync('gabriel123', 10) },
    ],
    cliente: [
        { nome: 'Mariana Oliveira', cpf: criptografar('123.456.789-01') },
        { nome: 'Pedro Santos', cpf: criptografar('234.567.890-12') },
        { nome: 'Julia Ferreira', cpf: criptografar('345.678.901-23') },
        { nome: 'Gabriel Costa', cpf: criptografar('456.789.012-34') },
        { nome: 'Ana Martins', cpf: criptografar('567.890.123-45') },
    ],
    imovel: [
        { tipo: 'Casa de Praia', preco: 450, descricao: 'Casa com piscina e vista para o mar em Ubatuba', cliente_id: 1 },
        { tipo: 'Apartamento', preco: 280, descricao: 'Apartamento moderno próximo à praia em Santos', cliente_id: 2 },
        { tipo: 'Chalé', preco: 350, descricao: 'Chalé aconchegante com lareira em Campos do Jordão', cliente_id: 3 },
        { tipo: 'Casa de Campo', preco: 500, descricao: 'Casa ampla com jardim e churrasqueira em Atibaia', cliente_id: 4 },
        { tipo: 'Studio', preco: 180, descricao: 'Studio mobiliado próximo ao centro de São Paulo', cliente_id: 5 },
        { tipo: 'Casa de Praia', preco: 600, descricao: 'Casa espaçosa com piscina e varanda em Florianópolis', cliente_id: 1 },
    ],
    aluguel: [
        { data: new Date('2026-11-20'), imovel_id: 1 },
        { data: new Date('2026-11-22'), imovel_id: 2 },
        { data: new Date('2026-11-25'), imovel_id: 3 },
        { data: new Date('2026-11-28'), imovel_id: 4 },
        { data: new Date('2026-12-02'), imovel_id: 5 },
        { data: new Date('2026-12-05'), imovel_id: 6 },
    ],
};

const tabelas = Object.keys(dados).reverse().join(', ');
await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tabelas} RESTART IDENTITY CASCADE`);
console.log('   🧹 registros anteriores apagados (ids reiniciados)');

for (const [tabela, data] of Object.entries(dados)) {
    const { count } = await prisma[tabela].createMany({ data });
    console.log(`   ✅ ${tabela}: ${count} registros`);
}

await prisma.$disconnect();
