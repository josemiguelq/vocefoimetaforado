// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({
        introduction: "Partindo aqui do sistema FACTS, criado na década de 70 por Paul Ekcman",
        fake: ['Conforme  observado Dr. Paul Ekman apse de latência em até 1seg uma expressão genuína'],
        happiness: ['Contração bilateral Músculo zigomático maior'],
        fear: [
            'Contracao dos músculos risórios, um AU20',
            'o canto dos lábios se estica lateralmente, uma microexpressao de medo',

            'Alguns artigos falam pra gente como the voice of deception ou a CBCA, a pausa narrativa muito' +
            ' prolongada pode ocorrer quando a gente nao ter certeza do que a gente tá falando, como podemos ver' +
            ' aqui neste caso',

            'Vemos claramente continuas inspiradas fundas e também o canto dos lábios se esticam lateralmente' +
            ' deixando' +
            ' a arcaria dentária lateralmente' +
            ' exposta, junto com a inspirada fun uma micro expressao facial de medo'
        ],
        scorn: [
            'a gente observa uma elevacao assimétrica no canto dos lábios'
        ],
        anxiety: [
            'Existe uma mudança na linha de base e o fluxo de piscadas está bem elevado e também vemos um aumento na' +
            ' abertura ocular, indicando' +
            ' ansiedade',
        ],
        rage: [
            'Contracao na regiao glabelar',
            'projecao prossemica '
        ]
    })
}
