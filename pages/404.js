/* components */
import Layout from '../componetns/layout/Layout';

// pages/404.js
export default function Custom404() {
  return (
    <Layout title="Next.js with Sequelize | 404 Page">
      <div className="page-error">
        <h1>404 - Page Not Found</h1>
      </div>
    </Layout>
  );
}
