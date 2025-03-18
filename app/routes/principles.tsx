export function meta({ }: any) {
  return [
    { title: "Bartłomiej Choncel - principles" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Principles() {
  return (
    <div className="text-sm sm:text-sm md:text-sm leading-relaxed mb-8" >
      <p>
        <i>Prīncipium. </i> From the Latin <i>prīncipium</i> means “beginning, foundation.” 
        A fundamental truth or proposition that serves as the basis for a belief system, behavior or chain of reasoning.
      </p>
      <br></br>
      <ol className="list-none mt-4 custom-list">
        <li>Your habits make you. Stick to simple rules. Days with 0 output are the killers.</li>
        <li>Our life is shaped by our mind; we become what we think.</li>
        <li>Never give up. Never ever. Stay in the game.</li>
        <li>All the real benefits in life come from compound interest. Understand compounding.</li>
        <li>Knowledge is the compound interest of curiosity.</li>
        <li>Be endlessly curious. Hang out on the edges.</li>
        <li>Conduct yourself with quiet confidence.</li>
        <li>Be an infinite learner. Reading (learning) is the ultimate meta-skill. Think about spending on books as an investment.</li>
        <li>Understand the 80/20 rule.</li>
        <li>Small details build the big picture. Think in first principles.</li>
        <li>Make room for error. Be comfortable being wrong.</li>
        <li>Encourage intellectual debate.</li>
        <li>Have strong opinions, loosely held. Train yourself in mental models.</li>
        <li>Experiment and tinker — take lots of small risks.</li>
        <li>Surround yourself with the best (few) people. Discard people that don’t make you better.</li>
        <li>Don’t burn bridges with others. Burn your boats.</li>
        <li>Don’t criticize someone in front of others.</li>
        <li>Read philosophy specifically and ignore news/pop culture.</li>
        <li>Being enthusiastic is worth 25 IQ points.</li>
        <li>Don’t be afraid to ask a question.</li>
      </ol>

      <style>
        {`
          .custom-list {
            counter-reset: list-counter;
            padding-left: 0;
            margin-left: 0;
            width: 100%;
          }
          .custom-list li {
            counter-increment: list-counter;
            margin-bottom: 1rem;
            list-style-type: none;
            position: relative;
            padding-left: 1.75rem;
          }
          .custom-list li::before {
            content: counter(list-counter, decimal-leading-zero) ". ";
            color: #8977FF;
            font-weight: regular;
            position: absolute;
            left: 0;
            width: 1rem;
            text-align: right;
            margin-right: 0.5rem;
          }
        `}
      </style>
    </div>
  );
}