import React from 'react';
import Layout from '@theme/Layout'

export default function MyReactPage() {
    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'centre',
                    alignItems: 'centre',
                    fontSize: '20px',
                    padding: "4rem"
                }}>
                <h1>Example React Page</h1>
                <p>This is an example React page.</p>
                </div>
        </Layout>
    );
}