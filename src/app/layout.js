import './globals.css';
import Header from '@components/Header';
import { App } from 'antd';

export const metadata = {
    title: 'Codebnb',
    description: 'Plataforma de aluguel de imóveis para viagens',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <App>
                    <Header />
                    <main>{children}</main>
                </App>
            </body>
        </html>
    );
}
