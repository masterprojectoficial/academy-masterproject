/**
 * Elemento de assinatura visual do site: um diagrama de fluxo de processo
 * (vocabulário visual de BPMN — evento, tarefa, gateway) representando a
 * jornada do aluno. Usado no hero da home.
 */
export default function ProcessFlowArt() {
  return (
    <svg
      viewBox="0 0 560 260"
      className="w-full max-w-lg"
      role="img"
      aria-label="Diagrama de processo: Explorar, Aprender, Aplicar e Avançar"
    >
      <line x1="40" y1="130" x2="520" y2="130" stroke="#E3DFD3" strokeWidth="2" />

      <g className="flow-line" fill="none" stroke="#2E3FB8" strokeWidth="2">
        <path d="M75 130 H145" strokeDasharray="6 6" />
        <path d="M215 130 H285" strokeDasharray="6 6" />
        <path d="M355 130 H425" strokeDasharray="6 6" />
      </g>

      <path d="M505 130 L495 124 L495 136 Z" fill="#12151C" />

      <circle cx="55" cy="130" r="20" fill="#FBFAF7" stroke="#12151C" strokeWidth="2" />
      <text x="55" y="172" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="#12151C">
        EXPLORAR
      </text>

      <rect x="145" y="105" width="90" height="50" rx="10" fill="#FBFAF7" stroke="#12151C" strokeWidth="2" />
      <text x="190" y="135" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="600" fontSize="13" fill="#12151C">
        Aprender
      </text>
      <text x="190" y="182" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#12151C99">
        artigos e guias
      </text>

      <rect x="285" y="105" width="50" height="50" rx="8" fill="#E1A13B" transform="rotate(45 310 130)" />
      <text x="310" y="205" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#12151C99">
        escolha a trilha
      </text>

      <rect x="355" y="105" width="90" height="50" rx="10" fill="#FBFAF7" stroke="#12151C" strokeWidth="2" />
      <text x="400" y="135" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="600" fontSize="13" fill="#12151C">
        Avançar
      </text>
      <text x="400" y="182" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#12151C99">
        curso + certificado
      </text>

      <circle cx="500" cy="130" r="20" fill="#12151C" />
      <circle cx="500" cy="130" r="14" fill="none" stroke="#FBFAF7" strokeWidth="2" />
    </svg>
  );
}
