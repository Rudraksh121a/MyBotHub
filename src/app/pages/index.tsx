// pages/index.js
import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:8000/api/example/')
  const data = await res.json()

  return {
    props: { data },
  }
}
interface Data {
  message: string;
}

export default function Home({ data }: { data: Data }) {
  return (
    <div>
      <h1>Welcome to MyBothub</h1>
      <p>{data.message}</p>
    </div>
  );
}
