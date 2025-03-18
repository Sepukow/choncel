export function meta({ }: any) {
  return [
    { title: "Bartłomiej Choncel - books" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Books() {
  return (
    <div className="text-base sm:text-lg md:text-sm leading-relaxed mb-8">
      <p>
        Reading is one of the most important skills. Naturally, you can spend a lifetime reading and you won’t remember everything. What will change in the process is the way you think. Your way of thinking will affect everyone you meet in life.
      </p>
      <br></br>
      <p>
        Here is a list of books I think are good to recommend:
      </p>
      <ul className="list-inside mt-4 space-y-2 custom-list">
        <li>Leviathan Wakes - James S.A. Corey</li>
        <li>Caliban’s War - James S.A. Corey</li>
        <li>Abaddon’s Gate - James S.A. Corey</li>
        <li>Cibola Burn - James S.A. Corey</li>
        <li>Nemesis Games - James S.A. Corey</li>
        <li>Babylon’s Ashes - James S.A. Corey</li>
        <li>Persepolis Rising - James S.A. Corey</li>
        <li>The Stand - Stephen King</li>
        <li>1984 - George Orwell</li>
        <li>Metro 2033 - Dmitry Glukhovsky</li>
        <li>Astrophysics for People in a Hurry - Neil deGrasse Tyson</li>
        <li>Number 9 Dream - David Mitchell</li>
        <li>The Richest Man in Babylon - George S. Clason</li>
      </ul>

      <style>
        {`
          .custom-list {
            list-style-type: none; /* Usuwamy domyślne punktory */
          }
          .custom-list li::before {
            content: "•"; /* Dodajemy punktor */
            color: #8977FF; /* Kolor punktora */
            font-weight: bold; /* Pogrubienie punktora */
            display: inline-block;
            width: 1em; /* Odstęp między punktorem a tekstem */
            margin-left: -1em; /* Wyrównanie punktora */
          }
        `}
      </style>
    </div>
  );
}