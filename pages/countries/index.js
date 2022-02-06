import React from 'react';

export default function Home(props) {
    return (
        <div>
            <h1>Countries</h1>
            {props.countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
        </div>
    );
}

// ssr
// getServerSideProps : only used in routes under the pages folder
// getServerSideProps : it will not work in component
// getServerSideProps : destination can be returned in the redirect object
export const getServerSideProps = async () => {
    const countries = await fetch('https://restcountries.com/v3.1/all').then(res => res.json());
    return {
        props: {
            countries
        }
    }
}
