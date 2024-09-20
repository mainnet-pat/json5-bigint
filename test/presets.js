const JSON5 = require('../lib')

const t = require('tap')

t.test('parse(text)', t => {
    t.strictSame(
        JSON5.stringify(new Uint8Array([1])),
        "{'0':1}",
        'Default Uint8Array serialization'
    )

    require('../lib/presets/extended')

    t.strictSame(JSON5.stringify({
        a: new Uint8Array([1]),
        b: 0n
    }),
    '{"a":0x01,"b":0n}',
    'Extended serialization rules'
    )

    require('../lib/presets/standard')

    t.end()
})
