import Head from 'next/head'
import MainLayout from '../componetns/MainLayout.js';

export default function Primer() {
    return (
        <MainLayout>
            <Head>
                <title>Surgut Expert</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <hr/>
            <h1>
                Каталог
            </h1>
            <hr/>
        </MainLayout>
    )
}