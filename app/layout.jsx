import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        {/* <link rel='preload' href='../../styles/globals.css' as='style' />
        <link rel='stylesheet' href='../../styles/globals.css' /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if(document) {
            document.querySelectorAll("link[rel='preload'][as='style']").forEach(link => link.rel = "stylesheet")}
            `,
          }}
        />
      </head>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
