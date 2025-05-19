import React from 'react';

const CezarTheory = () => {
  return (
    <div className="p-[10%] max-w-4xl mx-auto">
      <div className=''>
        <h1 className="text-3xl font-bold mb-4">🔐 Cezar Algoritmi - Qaraqalpaq Álipbesi Tiykarında</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Formulalar</h2>
          <p><strong>Shifrlaw:</strong> C<sub>i</sub> = (P<sub>i</sub> + K) mod 34</p>
          <p><strong>Deshifrlaw:</strong> P<sub>i</sub> = (C<sub>i</sub> - K + 34) mod 34</p>
          <p>Bul jerde <strong>K</strong> — jıljıw muǵdarı (máselen, 3).</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Qaraqalpaq Álipbesi</h2>
          <p className="whitespace-pre-wrap bg-gray-100 p-2 rounded">
            A a, Á á, B b, D d, E e, F f, G g, Ǵ ǵ, H h, X x, Í í, I i, J j, K k, Q q, L l, M m, N n, Ń ń, O o, Ó ó, P p, R r, S s, T t, U u, Ú ú, V v, W w, Y y, Z z, Sh sh, C c, Ch ch
          </p>
          <p>Álipbede 34 belgi bar. "sh" hám "ch" birlik belgi sipatında qaraladı.</p>
        </section>
      </div>
      <div>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Mısal </h2>
          <p><strong>Tekst:</strong> qaraqalpaq</p>
          <p><strong>Jıljıw:</strong> +3</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shifrlaw</h2>
          <table className="table-auto w-full text-left border mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 py-1 border">Harip</th>
                <th className="px-2 py-1 border">P<sub>i</sub></th>
                <th className="px-2 py-1 border">P + 3</th>
                <th className="px-2 py-1 border">(P + 3) % 34</th>
                <th className="px-2 py-1 border">Shifrlanǵan tekst</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['q', 14, 17, 17, 'n'],
                ['a', 0, 3, 3, 'd'],
                ['r', 22, 25, 25, 'u'],
                ['a', 0, 3, 3, 'd'],
                ['q', 14, 17, 17, 'n'],
                ['a', 0, 3, 3, 'd'],
                ['l', 15, 18, 18, 'ń'],
                ['p', 21, 24, 24, 't'],
                ['a', 0, 3, 3, 'd'],
                ['q', 14, 17, 17, 'n']
              ].map((row, i) => (
                <tr key={i} className="even:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-2 py-1 border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-2">✅ <strong>Shifrlanǵan tekst:</strong> ndudndńtdn</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Deshifrlaw</h2>

          <table className="table-auto w-full text-left border mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 py-1 border">Shifr</th>
                <th className="px-2 py-1 border">C<sub>i</sub></th>
                <th className="px-2 py-1 border">C - 3</th>
                <th className="px-2 py-1 border">(C - 3 + 34) % 34</th>
                <th className="px-2 py-1 border">Nátiyje</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['n', 17, 14, 14, 'q'],
                ['d', 3, 0, 0, 'a'],
                ['u', 25, 22, 22, 'r'],
                ['d', 3, 0, 0, 'a'],
                ['n', 17, 14, 14, 'q'],
                ['d', 3, 0, 0, 'a'],
                ['ń', 18, 15, 15, 'l'],
                ['t', 24, 21, 21, 'p'],
                ['d', 3, 0, 0, 'a'],
                ['n', 17, 14, 14, 'q']
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
    </div>
  );
};

export default CezarTheory;
