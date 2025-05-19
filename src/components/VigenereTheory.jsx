import React from 'react'

const VigenereTheory = () => {
  
  return (
    <div className="p-[10%] max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔐 Vigener Algoritmi - Qaraqalpaq Álipbesi Tiykarında</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Formulalar</h2>
        <p><strong>Shifrlaw:</strong> C<sub>i</sub> = (P<sub>i</sub> + K<sub>i</sub>) mod 34</p>
        <p><strong>Deshifrlaw:</strong> P<sub>i</sub> = (C<sub>i</sub> - K<sub>i</sub> + 34) mod 34</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Qaraqalpaq Álipbesi</h2>
        <p className="whitespace-pre-wrap bg-gray-100 p-2 rounded">
        A a, Á á, B b, D d, E e, F f, G g, Ǵ ǵ, H h, X x, Í í, I i, J j, K k, Q q, L l, M m, N n, Ń ń, O o, Ó ó, P p, R r, S s, T t, U u, Ú ú, V v, W w, Y y, Z z, Sh sh, C c, Ch ch
        </p>
        <p>Álipbede 34 belgi bar. "sh" hám "ch" birlik belgi sipatında qaraladı.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Mısal</h2>
        <p><strong>Tekst:</strong> qaraqalpaq</p>
        <p><strong>Gilt sóz:</strong> key → keykeykeyk</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> Shifrlaw</h2>
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 border">Tekst</th>
              <th className="px-2 py-1 border">P<sub>i</sub></th>
              <th className="px-2 py-1 border">Gilt</th>
              <th className="px-2 py-1 border">K<sub>i</sub></th>
              <th className="px-2 py-1 border">(P+K)%34</th>
              <th className="px-2 py-1 border">Shifrlanǵan tekst</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['q', 14, 'k', 13, 27, 'ú'],
              ['a', 0, 'e', 4, 4, 'e'],
              ['r', 23, 'y', 30, 19, 'ó'],
              ['a', 0, 'k', 13, 13, 'k'],
              ['q', 14, 'e', 4, 18, 'ń'],
              ['a', 0, 'y', 30, 30, 'y'],
              ['l', 15, 'k', 13, 28, 'v'],
              ['p', 22, 'e', 4, 26, 'ú'],
              ['a', 0, 'y', 30, 30, 'y'],
              ['q', 14, 'k', 13, 27, 'ú']
            ].map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-2 py-1 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2">✅ <strong>Shifrlanǵan tekst:</strong> úeókńyvýy</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> Deshifrlaw</h2>
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-1 border">Shifr</th>
              <th className="px-2 py-1 border">C<sub>i</sub></th>
              <th className="px-2 py-1 border">Gilt</th>
              <th className="px-2 py-1 border">K<sub>i</sub></th>
              <th className="px-2 py-1 border">(C−K+34)%34</th>
              <th className="px-2 py-1 border">Nátiyje</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['ú', 27, 'k', 13, 14, 'q'],
              ['e', 4, 'e', 4, 0, 'a'],
              ['ó', 19, 'y', 30, 23, 'r'],
              ['k', 13, 'k', 13, 0, 'a'],
              ['ń', 18, 'e', 4, 14, 'q'],
              ['y', 30, 'y', 30, 0, 'a'],
              ['v', 28, 'k', 13, 15, 'l'],
              ['ú', 26, 'e', 4, 22, 'p'],
              ['y', 30, 'y', 30, 0, 'a'],
              ['ú', 27, 'k', 13, 14, 'q']
            ].map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-2 py-1 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2">✅ <strong>Deshifrlanǵan tekst:</strong> qaraqalpaq</p>
      </section>

     
    </div>
  );
};

export default VigenereTheory;
