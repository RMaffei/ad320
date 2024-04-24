import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentA from './components/ContentA';
import ContentB from './components/ContentB';
import {Button} from './components/SharedComponents';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <ContentA />
                <ContentB />
            </main>
            <section>
                <ContentA />
                <ContentB />
            </section>
            <Button onClick={() => alert('Button clicked')}>just a button</Button>
            <Footer />
        </div>
    );
};

export default App;