import React from 'react';

const AffineTheory = () => {
    // Karakalpak alphabet (34 characters)
    const alphabet = [
        'a', 'á', 'b', 'd', 'e', 'f', 'g', 'ǵ', 'h', 'x', 'í', 'i', 'j', 'k', 'q', 'l', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'y', 'z', 'sh', 'c', 'ch'
    ];

    // a = 5, b = 8 (shart: gcd(a, m) = 1, m = 34)
    const a = 5;
    const b = 8;

    const text = 'qaraqalpaq';
    const m = alphabet.length;

    // a^-1 mod m topish (modular inverse)
    const modInverse = (a, m) => {
        for (let i = 0; i < m; i++) {
            if ((a * i) % m === 1) return i;
        }
        return null;
    };

    const aInv = modInverse(a, m);

    const encryptChar = (char) => {
        const x = alphabet.indexOf(char);
        const y = (a * x + b) % m;
        return { char, x, y, encrypted: alphabet[y] };
    };

    const decryptChar = (char) => {
        const y = alphabet.indexOf(char);
        const x = (aInv * (y - b + m)) % m;
        return { char, y, x, decrypted: alphabet[x] };
    };

    const encryptedRows = text.split('').map(encryptChar);
    const encryptedText = encryptedRows.map(r => r.encrypted).join('');

    const decryptedRows = encryptedText.split('').map(decryptChar);
    const decryptedText = decryptedRows.map(r => r.decrypted).join('');

    return (
        <div className="p-[10%] max-w-4xl mx-auto">
            {/* Left Panel: Theory */}
            <div>
                <h1 className="text-3xl font-bold mb-4">🔐 Affine Algoritmi - Qaraqalpaq Álipbesi Tiykarında</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">1. Formulalar</h2>
                    <p><strong>Shifrlaw:</strong> E(x) = (a·x + b) mod 34</p>
                    <p><strong>Deshifrlaw:</strong> D(y) = a<sup>-1</sup> · (y - b) mod 34</p>
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
                    <p><strong>Tekst:</strong> {text}</p>
                    <p>Bu yerda <strong>a = {a}</strong>, <strong>b = {b}</strong>, <strong>a<sup>-1</sup> = {aInv}</strong></p>
                </section>
            </div>

            {/* Right Panel: Tables */}
            <div>
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">🔒 Shifrlaw bosqishlari</h2>
                    <table className="table-auto w-full border text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-2 py-1 border">Belgi</th>
                                <th className="px-2 py-1 border">x</th>
                                <th className="px-2 py-1 border">(a·x + b)%34</th>
                                <th className="px-2 py-1 border">Shifrlangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {encryptedRows.map((r, i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="px-2 py-1 border">{r.char}</td>
                                    <td className="px-2 py-1 border">{r.x}</td>
                                    <td className="px-2 py-1 border">{r.y}</td>
                                    <td className="px-2 py-1 border">{r.encrypted}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-2">✅ <strong>Shifrlanǵan tekst:</strong>{encryptedText}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">🔓 Deshifrlaw bosqishlari</h2>
                    <table className="table-auto w-full border text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-2 py-1 border">Shifr</th>
                                <th className="px-2 py-1 border">y</th>
                                <th className="px-2 py-1 border">(a⁻¹·(y−b))%34</th>
                                <th className="px-2 py-1 border">Deshifrlangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {decryptedRows.map((r, i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="px-2 py-1 border">{r.char}</td>
                                    <td className="px-2 py-1 border">{r.y}</td>
                                    <td className="px-2 py-1 border">{r.x}</td>
                                    <td className="px-2 py-1 border">{r.decrypted}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-2">✅ <strong>Deshifrlanǵan tekst:</strong> {decryptedText}</p>
                </section>
            </div>
        </div>
    );
};

export default AffineTheory;
